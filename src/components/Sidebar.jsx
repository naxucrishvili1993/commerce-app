import React from "react";

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			<ul className="category-list">
				<li>
					<button
						className="category-btn"
						onClick={props.handleChange}
						value="All">
						All
					</button>
				</li>
				<li>
					<button
						className="category-btn"
						onClick={props.handleChange}
						value="Shirts">
						Shirts
					</button>
				</li>
				<li>
					<button
						className="category-btn"
						onClick={props.handleChange}
						value="Jeans">
						Jeans
					</button>
				</li>
				<li>
					<button
						className="category-btn"
						onClick={props.handleChange}
						value="Jackets">
						Jackets
					</button>
				</li>
				<li>
					<button
						className="category-btn"
						onClick={props.handleChange}
						value="Pants">
						Pants
					</button>
				</li>
				<li>
					<button
						className="category-btn"
						onClick={props.handleChange}
						value="Shoes">
						Shoes
					</button>
				</li>
				<li>
					<button
						className="category-btn"
						onClick={props.handleChange}
						value="Socks">
						Socks
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
