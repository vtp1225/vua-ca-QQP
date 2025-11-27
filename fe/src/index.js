import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import AppRoutes from './routes/app-routes';
import { CartProvider } from './context/cart-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </CartProvider>
);