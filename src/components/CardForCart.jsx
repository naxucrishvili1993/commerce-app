import React, { useState } from "react";
import Increase from "../svgs/plus.svg";
import Decrease from "../svgs/minus.svg";

const CardForCart = (props) => {
	const [itemCounter, setItemCounter] = useState(props.timesAdded);

	return (
		props.timesAdded > 0 && (
			<div className="shop-items">
				<div>
					<img src={props.itemImage} alt="Item" />
				</div>
				<div>
					<h1>{props.itemName}</h1>
					<p>{props.itemPrice}$</p>
					<p>
						Quantity: <span>{itemCounter}</span>
					</p>
					<p>
						Total Price:
						{Math.round((itemCounter * props.itemPrice * 100) / 100)}$
					</p>
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
							setItemCounter(itemCounter - 1);
							if (props.timesAdded === 1) {
								props.handleRemoval();
							}
							props.handleDecrease();
						}}>
						<img src={Decrease} alt="Decrease" />
					</button>
				</div>
			</div>
		)
	);
};

export default CardForCart;
