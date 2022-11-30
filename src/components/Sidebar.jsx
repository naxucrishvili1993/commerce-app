import React from "react";

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			<ul className="category-list">
				<li>
					<input
						type="radio"
						name="radioItem"
						value="All"
						id="allRadio"
						onChange={props.handleChange}
					/>
					<label for="allRadio">All</label>
				</li>
				<li>
					<input
						type="radio"
						name="radioItem"
						value="Shirts"
						id="shirtsRadio"
						onChange={props.handleChange}
					/>
					<label for="shirtsRadio">Shirts</label>
				</li>
				<li>
					<input
						type="radio"
						name="radioItem"
						id="jeansRadio"
						value="Jeans"
						onChange={props.handleChange}
					/>
					<label for="jeansRadio">Jeans</label>
				</li>
				<li>
					<input
						type="radio"
						name="radioItem"
						id="jacketsRadio"
						value="Jackets"
						onChange={props.handleChange}
					/>
					<label for="jacketsRadio">Jackets</label>
				</li>
				<li>
					<input
						type="radio"
						name="radioItem"
						id="pantsRadio"
						value="Pants"
						onChange={props.handleChange}
					/>
					<label for="pantsRadio">Pants</label>
				</li>
				<li>
					<input
						type="radio"
						name="radioItem"
						id="shoesRadio"
						value="Shoes"
						onChange={props.handleChange}
					/>
					<label for="shoesRadio">Shoes</label>
				</li>
				<li>
					<input
						type="radio"
						name="radioItem"
						id="socksRadio"
						value="Socks"
						onChange={props.handleChange}
					/>
					<label for="socksRadio">Socks</label>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
