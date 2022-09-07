import React from 'react';
import { useCartcontext } from '../context';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartTotal from './CartTotal';
const Cart = () => {
	const {
		handleIncrement,
		initialBasket,
		handleDecrement,
		data,
		removeCartItem,
	} = useCartcontext();
	if (initialBasket.length > 0) {
		return (
			<section className="cart-section">
				<h2 className="product-section-heading">Your Cart</h2>
				<CartTotal />
				<div className="cart-center" id="cart-center">
					{initialBasket.map(cartItem => {
						const { id, amount } = cartItem;
						const { img, title, price } =
							data.find(item => item.id === id) || [];
						return (
							<article className="shoes-card" key={id}>
								<img src={img} width="150" height="100" alt={title} />
								<div>
									<div className="details">
										<h3>{title}</h3>
										<p className="cart-item-price">${price}</p>
										<button
											className="remove"
											onClick={() => removeCartItem(id)}
										>
											<FaTrash />
										</button>
									</div>
									<div className="btn-container">
										<button
											onClick={() => {
												handleIncrement(id);
											}}
										>
											<FaPlus />
										</button>
										<span className="quantity" id={id}>
											{amount}
										</span>
										<button
											onClick={() => {
												handleDecrement(id);
											}}
										>
											<FaMinus />
										</button>
									</div>
									<p className="item-total">
										${`${(amount * price).toFixed(2)}`}
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</section>
		);
	} else {
		return (
			<section className="cart-center" id="cart-center">
				<h2>your Cart is empty</h2>
				<Link class="back-home-btn" to="/">
					Go Back Home
				</Link>
			</section>
		);
	}
};

export default Cart;
