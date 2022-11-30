import React, { useState } from "react";

const Card = (props) => {
	const [btnValue, setBtnValue] = useState("Add To Cart");

	return (
		<div className="card">
			<img src={props.itemImage} alt="Clothing" className="card-photo" />
			<h1 className="item-name">{props.itemName}$</h1>
			<p className="price">{props.itemPrice}$</p>
			<button
				className="buy-btn"
				onClick={() => {
					props.handleClick();
					if (props.timesAdded > 0) setBtnValue("Added!");
				}}
				disabled={props.timesAdded > 0}>
				{btnValue}
			</button>
		</div>
	);
};

export default Card;
