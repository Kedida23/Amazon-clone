import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
const [{ basket }, dispatch] = useStateValue();
//dispatch = to pull data
const navigate = useNavigate();

const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

return (
	<div className="subtotal">
		<CurrencyFormat
			renderText={(value) => (
				<div>
					<p>
						Subtotal ({basket.length} items): <strong>{value} </strong>
					</p>
					<small className="subtotal__gift">
						<input type="checkbox" /> This order contains a gift
					</small>
				</div>
			)}
			decimalScale={2}
			value={getBasketTotal(basket)}
			displayType={"text"}
			thousandSeparator={true}
			prefix={"$"}
		/>
		{/* <button>Proceed to Checkout</button> */}
		<button onClick={(e) => navigate("/payment")}>Proceed to checkout</button>
	</div>
);
}

export default Subtotal;