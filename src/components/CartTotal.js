import React from 'react';
import { useCartcontext } from '../context';
const CartTotal = () => {
	const { cartTotal, clearCart } = useCartcontext();
	return (
		<div className="label" id="label">
			<h4 class="total-amount">Total: ${cartTotal.toFixed(2)}</h4>
			<button class="clear-cart" onClick={clearCart}>
				Clear Cart
			</button>
		</div>
	);
};

export default CartTotal;
