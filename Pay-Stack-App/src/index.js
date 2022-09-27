import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Index from './component/Index';
import Product from "./component/Product"
import Register from "./component/Register"
import Profile from "./component/Profile"
import Card from './component/Card';
import Transaction from "./component/Transaction"
import EditProduct from "./component/EditProduct"
import NewProduct from "./component/NewProduct"
import OrderList from "./component/OrderList"
import EditView from "./component/EditView"
import Virtual from "./component/Virtual"
import Error from "./component/Error"
import StoreMade from './component/StoreMade';
import NewStore from "./component/NewStore"
import About from "./component/About-Us"
import Blog from "./component/Blog"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<App />} />
       <Route exact path="/Home" element={<Index />} />
       <Route exact path="/NewStore" element={<NewStore />} />
       <Route exact path="/Store" element={<StoreMade />} />
       <Route exact path="/Products" element={<Product />} />
       <Route exact path="/EditProduct" element={<EditProduct />} />
       <Route exact path="/EditView" element={<EditView />} />
       <Route exact path="/NewProduct" element={<NewProduct />} />
       <Route exact path="/Register" element={<Register />} />
       <Route exact path="/Profile" element={<Profile />} />
       <Route exact path="/OrderList" element={<OrderList />} />
       <Route exact path="/Card" element={<Card />} />
       <Route exact path="/Transaction" element={<Transaction />} />
       <Route exact path="/Virtual" element={<Virtual />} />
       <Route exact path="/About" element={<About />} />
       <Route exact path="/Blog" element={<Blog />} />
       <Route exact path="*" element={<Error />} />
       
       </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);


