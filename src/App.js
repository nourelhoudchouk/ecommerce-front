import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';
import Payment from './pages/Payment';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/pay" element={<Payment />} />
        <Route exact path="/products/:cat" element={<ProductsList />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
      <Newsletter />

    </Router>
  );
}

export default App;
