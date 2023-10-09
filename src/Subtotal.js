import React from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";


function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();
    const iconStyle = {
        fontSize: '12px'
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items): <strong><CurrencyRupeeIcon style={iconStyle} />{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}

            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
