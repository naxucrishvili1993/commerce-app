import React, { useState } from "react";

const Card = (props) => {
	const [btnValue, setBtnValue] = useState("Add To Cart");
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className="card">
			<img src={props.itemImage} alt="Clothing" className="card-photo" />
			<h1 className="item-name">{props.itemName}</h1>
			<p className="price">{props.itemPrice}</p>
			<button
				className="buy-btn"
				disabled={isClicked}
				onClick={() => {
					setIsClicked(true);
					setBtnValue("Added!");
					props.handleClick();
				}}>
				{btnValue}
			</button>
		</div>
	);
};

export default Card;
