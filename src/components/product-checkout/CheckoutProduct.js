import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";


function CheckoutProduct({ id, image, title, price, rating }) {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }
    const iconStyle = {
        fontSize: '12px'
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}
                </p>
                <p className="checkoutProduct__price">
                    <small><CurrencyRupeeIcon style={iconStyle} /></small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button className='cartremove__button' onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
