import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from './axios'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import CheckOutProduct from './CheckOutProduct'
import './payment.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
// import history from './history'
import { db } from './firebase'



export default function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory()
    const stripe = useStripe()
    const elements = useElements()

    const [processing, setProcessing] = useState("")

    const [succeeded, setSucceeded] = useState(false)

    const [clientSecret, setClientSecret] = useState(true)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)





    useEffect(() => {
        // console.log("use effect is working")
        const getClientSecret = async () => {
            // console.log("get client sec is is working")
            //    const BaseUrl = window.location.protocol + '//' + window.location.hostname + ":5001/";
            //     const response = await axios({
            //         method: 'post',
            //         url: `${BaseUrl}payments/create?total=${getBasketTotal(basket) * 100}`
            //     })


            const response = await axios({

                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            console.log('response is >>>>>>>>>>>', response)
            console.log(response.data)
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])

    console.log('the secrate is >>>>>>>>', clientSecret)
    console.log("user is =========",user)


    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)

            }
        }).then(({ paymentIntent }) => {
            // console.log("=============================================================", paymentIntent)
            // console.log(paymentIntent)
console.log("user uid is ======",user.uid)
console.log("======paymment intent=====",paymentIntent)
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            //payment  
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
            .catch(err => console.log(err))

        // console.log("==========payload is============================", payload)
        // console.log("==========payment intent is============================",paymentIntent)
        // console.log("======================================", clientSecret)
        // console.log("======================================",stripe.confirmCardPayment)
    }

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    return (
        <>
            <div className="payment" >
                <div className="payment__container">
                    <h1>
                        Checkout ( <Link to='./checkout'>{basket?.length} items</Link>)
</h1>
                    <div className="payment__section">

                        <div className="payment__title">
                            <h3>delivery address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p> Surat,Gujrat</p>
                        </div>

                    </div>

                    <div className="payment__section">

                        <div className="payment__title">
                            <h3>Review Items and Delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(items => (
                                <CheckOutProduct
                                    id={items.id}
                                    title={items.title}
                                    image={items.image}
                                    price={items.price}
                                    rating={items.rating}

                                />
                            ))}

                        </div>



                    </div>
                    <div className="payment__section">

                        <div className="payment__title">
                            <h3>Payment method</h3>
                        </div>
                        <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className="payments_priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value} </h3>
                                        )}

                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>

                                    </button>

                                </div>
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
