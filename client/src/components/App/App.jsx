import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes, Route, Link, Outlet, Switch
} from 'react-router-dom';

import Header from '../Others/Header';
import Footer from '../Others/Footer';

import Product from '../ProductPage/App';
import About from '../About/About';

export default function App() {
  return <Router>
    <Header />
    <center>
      <nav style={{ padding: '50', backgroundColor: 'pink', fontSize: '25' }}>
        <Link to='/' style={{ padding: '30' }}>Home</Link>
        <Link to='product_1' style={{ padding: '30' }}>Product_1</Link>
        <Link to='about' style={{ padding: '30' }}>About</Link>
      </nav>
    </center>
    <Routes>
      <Route path='/' element={<Home />} />
      {/* nested routes: */}
      <Route path='product_1' element={<Product />}>
        {/* <Route path=':name' element={<LaunchShoe />} /> */}
        <Route path='about' element={<About />}></Route>
      </Route>
    </Routes>
    <Footer />
  </Router>
}

function Home() {
  return <center>
    <h1 style={{ height: '50%' }}>HomePage Placeholder</h1>
  </center>
}

function Launch() {
  return <div>
    <h1>Welcome to Launch</h1>
    <Outlet />
  </div>
}

function LaunchIndex() {
  return <ul>
    {Object.entries(shoes).map(([key, { name, price }]) => <li key={key}>
      <h4>{name}</h4>
      <p>{price}</p>
    </li>)}
  </ul>
}

const shoes = {
  'shoe_1': {
    name: 'shoe_1_name',
    price: '$1000'
  },
  'shoe_2': {
    name: 'shoe_2_name',
    price: '$1000'
  },
  'shoe_3': {
    name: 'shoe_3_name',
    price: '$1000'
  },
  'shoe_4': {
    name: 'shoe_4_name',
    price: '$1000'
  },
  'shoe_5': {
    name: 'shoe_5_name',
    price: '$1000'
  },
}