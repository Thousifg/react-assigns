import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from "./components/Navbar"
import { Product } from './components/Product';
import {ProductDetails} from "./components/ProductDetails";
import { Login } from './components/Login';
import { Contact } from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<div>404 Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;