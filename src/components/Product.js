import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCartcontext } from '../context';
const Product = ({ product }) => {
	const { handleIncrement, initialBasket, handleDecrement } = useCartcontext();
	const { id, title, desc, price, img } = product;
	let search = initialBasket.find(item => item.id === id) || [];
	return (
		<article className="products">
			<div className="product-img">
				<img src={img} alt={title} />
			</div>
			<h3 className="product-name">{title}</h3>
			<p className="desc">{desc}</p>
			<div className="product-price-and-btn">
				<p className="price">${price}</p>
				<div className="btn-container">
					<button onClick={() => handleIncrement(product.id)}>
						<FaPlus />
					</button>
					<span className="quantity" id={id}>
						{search.amount === undefined ? 0 : search.amount}
					</span>
					<button onClick={() => handleDecrement(product.id)}>
						<FaMinus />
					</button>
				</div>
			</div>
		</article>
	);
};

export default Product;
