import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<Products />} />
					<Route path="cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
