import React, { useState } from "react";
import Increase from "../svgs/plus.svg";
import Decrease from "../svgs/minus.svg";

const CardForCart = (props) => {
	const [itemCounter, setItemCounter] = useState(1);

	return (
		<div className="shop-items">
			<div>
				<img src={props.itemImage} alt="Item" />
			</div>
			<div>
				<h1>{props.itemName}</h1>
				<p>{props.itemPrice}$</p>
				<p>Quantity: {itemCounter}</p>
				<p>Total Price: {Math.round(itemCounter * props.itemPrice)}$</p>
			</div>
			<div>
				<button
					className="increase-btn"
					onClick={() => {
						setItemCounter(itemCounter + 1);
						props.handleIncrease();
					}}>
					<img src={Increase} alt="Increase" />
				</button>
				<button
					disabled={itemCounter === 0}
					className="decrease-btn"
					onClick={() => {
						itemCounter > 0 && setItemCounter(itemCounter - 1);
						props.handleDecrease();
					}}>
					<img src={Decrease} alt="Decrease" />
				</button>
			</div>
		</div>
	);
};

export default CardForCart;
