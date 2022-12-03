import React from "react";

const Sidebar = (props) => {
	const buttons = document.querySelectorAll(".category-btn");
	const handleClick = (e) => {
		buttons.forEach((el) => {
			el.classList.remove("active-btn");
		});
		props.handleChange(e);
		e.currentTarget.classList.toggle("active-btn");
	};

	return (
		<div className="sidebar">
			<ul className="category-list">
				<li>
					<button className="category-btn" onClick={handleClick} value="All">
						All
					</button>
				</li>
				<li>
					<button
						className={"category-btn"}
						onClick={handleClick}
						value="Shirts">
						Shirts
					</button>
				</li>
				<li>
					<button className="category-btn" onClick={handleClick} value="Jeans">
						Jeans
					</button>
				</li>
				<li>
					<button
						className="category-btn"
						onClick={handleClick}
						value="Jackets">
						Jackets
					</button>
				</li>
				<li>
					<button className="category-btn" onClick={handleClick} value="Pants">
						Pants
					</button>
				</li>
				<li>
					<button className="category-btn" onClick={handleClick} value="Shoes">
						Shoes
					</button>
				</li>
				<li>
					<button className="category-btn" onClick={handleClick} value="Socks">
						Socks
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
