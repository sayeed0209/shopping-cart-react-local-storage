import React, { useContext, useState, useEffect } from 'react';
import data from './data';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
	const [initialBasket, setInitialBasket] = useState(
		() => JSON.parse(localStorage.getItem('cartItem')) || []
	);
	const [cartItem, setCartItem] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);
	const handleIncrement = id => {
		const search = initialBasket.find(basket => basket.id === id);
		if (search) {
			const newCartItem = initialBasket.map(item => {
				if (item.id === id) {
					return { ...search, amount: search.amount + 1 };
				} else {
					return item;
				}
			});
			setInitialBasket(newCartItem);
		} else {
			const newCartItem = [...initialBasket, { ...id, id, amount: 1 }];

			setInitialBasket(newCartItem);
		}
	};
	const handleDecrement = id => {
		const search = initialBasket.find(basket => basket.id === id);
		if (search === undefined) return;
		else if (search.amount === 0) return;
		else {
			const newCartItem = initialBasket
				.map(item => {
					if (item.id === id) {
						return { ...search, amount: search.amount - 1 };
					} else {
						return item;
					}
				})
				.filter(item => item.amount !== 0);
			setInitialBasket(newCartItem);
		}
	};

	const calculateCartItem = () => {
		if (initialBasket.length > 0) {
			const total = initialBasket.reduce((acc, curr) => {
				return acc + curr.amount;
			}, 0);
			setCartItem(total);
		}
	};
	const removeCartItem = id => {
		const newCartItems = initialBasket.filter(item => item.id !== id);
		setInitialBasket(newCartItems);
	};
	const calculateCartItemTotal = () => {
		if (initialBasket.length) {
			const amount = initialBasket
				.map(x => {
					let { amount, id } = x;
					let search = data.find(y => y.id === id) || [];

					return amount * search.price;
				})
				.reduce((x, y) => x + y, 0);
			setCartTotal(amount);
		} else {
			return;
		}
	};
	const clearCart = () => {
		setInitialBasket([]);
	};
	useEffect(() => {
		localStorage.setItem('cartItem', JSON.stringify(initialBasket));
		calculateCartItem();
		calculateCartItemTotal();
	}, [initialBasket]);
	return (
		<CartContext.Provider
			value={{
				data,
				handleIncrement,
				initialBasket,
				handleDecrement,
				cartItem,
				removeCartItem,
				cartTotal,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCartcontext = () => {
	return useContext(CartContext);
};
export { CartProvider, useCartcontext };
