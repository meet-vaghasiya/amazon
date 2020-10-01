import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'

export default function CheckOutProduct({ id, image, title, price, rating ,hideButton}) {
const [{basket},dispatch]=useStateValue()

    const removeFronBasket=()=>{
dispatch({
    type:'REMOVE_TO_BASKET',
    id:id
})
    }
  
    return (
        <div className="checkOutProduct">
            <img src={image} className="CheckOutProduct__image" />
            <div className="checkOutProduct__info">

                <p className="checkOutProduct__title">{title}  </p>
                <p className="checkOutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkOutProdect__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
                {!hideButton&&
                (<button onClick={removeFronBasket}>Remove From Cart</button>)}
                
            </div>


        </div>
    )
}
