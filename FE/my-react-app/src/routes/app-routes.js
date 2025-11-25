import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import ProductDetail from '../pages/product-detail';
import Cart from '../pages/cart';
import Checkout from '../pages/checkout';
import Register from '../pages/register';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/product-detail' element={<ProductDetail />}/>
            <Route path='/product-detail/:product_id' element={<ProductDetail />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
    )
}