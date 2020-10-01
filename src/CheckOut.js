import React from 'react'
import './CheckOut.css'
import CheckOutProduct from './CheckOutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


export default function CheckOut() {
    const [{basket},dispatch]=useStateValue()
    // console.log(basket)
    return (
        <div className="checkout">
            <div className="chaeckout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Apple/iPhone11/Pre-book/D12731792_IN_WLM_Apple_PC_LP_top_banner._CB452057659_.jpg" alt="checkout img" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

{basket.map(item=>(
    <CheckOutProduct 
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
    />
))}
                </div>
            </div>
            <div className="checkout__right">
            <Subtotal  />
               
            </div>


        </div>
    )
}
