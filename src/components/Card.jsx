import React from "react";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.itemImage} alt="Clothing" className="card-photo" />
			<h1 className="item-name">{props.itemName}</h1>
			<p className="price">{props.itemPrice}$</p>
			<button
				className="buy-btn"
				onClick={() => {
					props.handleClick();
				}}
				disabled={props.timesAdded > 0}>
				<span>Add To Cart</span>
			</button>
		</div>
	);
};

export default Card;
