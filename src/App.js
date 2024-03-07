import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';
import Product from './components/Product';
import Cart from './components/Cart';
import ProductDatatable from './components/ProductDatatable';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Create />} />
					<Route exact path='/read' element={<Read />} />
					<Route exact path='/edit/:id' element={<Update />} />
					<Route exact path='/products' element={<Product />} />
					<Route exact path='/products-datatable' element={<ProductDatatable />} />
					<Route exact path='/cart' element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
