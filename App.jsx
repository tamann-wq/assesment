
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProductsList from './pages/ProductsList';
import ProductsDetail from './pages/ProductsDetails';
import RegisterPage from './RegisterPage';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
    <Home/>
      <Routes>
        <Route path = '/login' element = {<LoginPage/>}/>
        <Route path = '/register' element = {<RegisterPage/>}/>
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}