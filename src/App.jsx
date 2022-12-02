/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import CardForCart from "./components/CardForCart";
import Sidebar from "./components/Sidebar";
import items from "./items";

function App() {
	const [itemCounter, setItemCounter] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const [priceCounter, setPriceCounter] = useState(0);
	const [shopStatus, setShopStatus] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [activeCategory, setActiveCategory] = useState("All");

	return (
		<div className="container">
			<Header
				handleClick={() => {
					setShopStatus(false);
					setActiveCategory("All");
				}}
				handleChange={(e) => {
					setSearchTerm(e.target.value);
				}}
				openCart={() => {
					setShopStatus(true);
				}}
				itemCounter={itemCounter}
			/>
			{!shopStatus && (
				<Sidebar
					handleChange={(e) => {
						setActiveCategory(e.target.value);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				/>
			)}
			<div className={shopStatus ? "hidden" : "cards"}>
				{items
					.filter((el) => {
						if (el.category === activeCategory.toLowerCase()) return el;
						else if (activeCategory === "All") return el;
					})
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
