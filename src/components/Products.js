import React from 'react';
import { useCartcontext } from '../context';
import Product from './Product';
const Products = () => {
	const { data } = useCartcontext();

	return (
		<section className="cart-section">
			<h2 className="product-section-heading">Products</h2>
			<div className="product-center" id="product-list">
				{data.map(product => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</section>
	);
};

export default Products;
