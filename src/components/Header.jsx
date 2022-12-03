import React from "react";
import Logo from "../svgs/shop.svg";
import ShoppingLogo from "../svgs/shopping-bag.svg";

const Header = (props) => {
	return (
		<div className="header">
			<img src={Logo} alt="Logo" className="logo" onClick={props.handleClick} />
			<input
				type="text"
				className="search-bar"
				placeholder="Search here..."
				onChange={props.handleChange}
			/>
			<div className="shopping-cart-area">
				<img
					src={ShoppingLogo}
					alt="Shopping Logo"
					className="shopping-logo"
					onClick={props.openCart}
				/>
				<span className="item-counter">{props.itemCounter}</span>
			</div>
		</div>
	);
};

export default Header;
