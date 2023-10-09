import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Product({id, title, image, price, rating}) {

    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    const iconStyle = {
        fontSize: '12px'
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small><CurrencyRupeeIcon style={iconStyle} /></small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} />

            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
