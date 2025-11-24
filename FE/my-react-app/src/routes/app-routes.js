import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import ProductDetail from '../pages/product-detail';
import Cart from '../pages/cart';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/product-detail' element={<ProductDetail />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    )
}