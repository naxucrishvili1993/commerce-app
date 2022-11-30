/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import CardForCart from "./components/CardForCart";
import items from "./items";

function App() {
	const [itemCounter, setItemCounter] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const [priceCounter, setPriceCounter] = useState(0);
	const [shopStatus, setShopStatus] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

	return (
		<div className="container">
			<Header
				handleClick={() => setShopStatus(false)}
				handleChange={(e) => {
					setSearchTerm(e.target.value);
				}}
				openCart={() => {
					setShopStatus(true);
				}}
				itemCounter={itemCounter}
			/>
			<div className={shopStatus ? "hidden" : "cards"}>
				{items
					.filter((el) => {
						if (searchTerm === "") return el;
						else if (el.name.toLowerCase().includes(searchTerm.toLowerCase()))
							return el;
					})
					.map((element, index) => {
						return (
							<Card
								itemImage={element.image}
								itemName={element.name}
								itemPrice={element.price}
								key={index}
								handleClick={() => {
									setPriceCounter(priceCounter + element.price);
									setItemCounter(itemCounter + 1);
									setTotalPrice(
										totalPrice + Math.round((element.price * 100) / 100),
									);
									element.addToCart = true;
									element.timesAdded++;
								}}
								timesAdded={element.timesAdded}
							/>
						);
					})}
			</div>
			{shopStatus && (
				<div className="shop">
					<h1>Items To Cart:</h1>
					{items
						.filter((el) => {
							if (el.addToCart) return el;
						})
						.map((el, index) => {
							return (
								<CardForCart
									key={index}
									itemImage={el.image}
									itemName={el.name}
									itemPrice={el.price}
									timesAdded={el.timesAdded}
									handleIncrease={() => {
										el.timesAdded++;
										setTotalPrice(totalPrice + el.price);
									}}
									handleDecrease={() => {
										el.timesAdded--;
										setTotalPrice(totalPrice - el.price);
									}}
									handleRemoval={() => {
										console.log(itemCounter);
										setItemCounter(itemCounter - 1);
									}}
								/>
							);
						})}
					<div className="shop-summary">
						<h1>Total Price: {Math.round((totalPrice * 100) / 100)}$</h1>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
