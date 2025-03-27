import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';

import Footer from './Components/Footer/Footer';
import bannermen from './Components/Assets/bannermen.jpg';
import banner4 from './Components/Assets/banner4.jpg';
import banner10 from './Components/Assets/banner11.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={bannermen} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={banner4} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={banner10} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
