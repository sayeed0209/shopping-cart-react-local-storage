import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import cartSvg from '../img/shopping-cart-svg.svg';
import { useCartcontext } from '../context';
const Navbar = () => {
	const { cartItem } = useCartcontext();
	return (
		<nav>
			<ReactTooltip />
			<Link to="/">
				<h1 className="heading" data-tip="Store">
					shoe store
				</h1>
			</Link>
			<Link to="/cart">
				<div className="cart-total-container">
					<img src={cartSvg} alt="cart" data-tip="Go To The Cart" />
					<span className="cart-total" id="cart-total">
						{cartItem}
					</span>
				</div>
			</Link>
		</nav>
	);
};

export default Navbar;
