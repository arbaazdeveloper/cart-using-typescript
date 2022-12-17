import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Products } from './pages/Products';
import { Header } from './pages/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

      </Router>
   
    </div>
  );
}

export default App;
