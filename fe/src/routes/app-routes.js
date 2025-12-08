import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import ProductDetail from '../pages/product-detail';
import Cart from '../pages/cart';
import Checkout from '../pages/checkout';
import Register from '../pages/register';
import CheckoutSuccess from "../pages/checkout-success";
import CheckoutFailed from "../pages/checkout-failed";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/product-detail' element={<ProductDetail />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/register' element={<Register />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="/checkout/failed" element={<CheckoutFailed />} />
        </Routes>
    )
}