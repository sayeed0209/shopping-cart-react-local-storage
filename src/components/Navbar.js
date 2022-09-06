import React from 'react';
import cartSvg from '../img/shopping-cart-svg.svg';
import { useCartcontext } from '../context';
const Navbar = () => {
	const { cartItem } = useCartcontext();
	return (
		<nav>
			<h1 className="heading">shoe store</h1>
			<a href="cart.html">
				<div className="cart-total-container">
					<img src={cartSvg} alt="cart" />
					<span className="cart-total" id="cart-total">
						{cartItem}
					</span>
				</div>
			</a>
		</nav>
	);
};

export default Navbar;
