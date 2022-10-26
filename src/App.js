// ReactToastify
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Cart from './components/Cart';
import Home from './components/Home';
import Register from './components/auth/Register';
import NotFound from './components/NotFound';
import Login from './components/auth/Login';
import CheckoutSuccess from './components/CheckoutSuccess';
import Summary from './components/admin/Summary';
import MyAccount from './components/my-account';
import ProductDetails from './components/ProductDetails';
import SpareParts from './components/Spare-parts';
import { Destoking } from './components/Destocking';
import { CreateProduct } from './components/admin/CreateProduct';
import { CreateCategory } from './components/admin/CreateCategory';
import Footer from './components/Footer';
import { NavBar5 } from './components/NavBar5';
import { TopHeader } from './components/TopHeader';
import Products from './components/admin/products';
import Dashboard from './components/admin/Dashboard';
import Orders from './components/admin/orders';
import Users from './components/admin/Users'
import Categories from './components/admin/Categories';
import Modal from 'react-modal';
import Marks from './components/admin/Mark';
import CreateMark from './components/admin/MarkCreate'



function App() {

  return (<div className="App">
    <BrowserRouter>
      {/* <TopHeader/> */}
      <ToastContainer />
      <Routes>
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/checkout-success" exact element={<CheckoutSuccess />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/destocking" exact element={<Destoking />} />
        <Route path="/spare-parts" exact element={<SpareParts />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/my-account" exact element={<MyAccount />} />
        <Route path="/product/:name" exact element={<ProductDetails />} />
        <Route path="/not-found" exact element={<NotFound />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="summary" element={<Summary />} />
          <Route path="products" element={<Products />}>
            <Route path="create-product" exact element={<CreateProduct />} />
          </Route>
          <Route path="categories" element={<Categories />}>
            <Route path="create-category" exact element={<CreateCategory />} />
          </Route>
          <Route path="marks" element={<Marks/>}>
            <Route path="create-mark" element={<CreateMark />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        <Route path="*" element={<NotFound />} /* Redirige si aucune URL n'existe dans notre application */ />
      </Routes>
    </BrowserRouter>
    {/* <Footer /> */}
  </div>
  );
}

export default App;
