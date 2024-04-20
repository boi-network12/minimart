import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import SignUp from './Pages/SignUp/SignUp';
import { ShopContextProvider } from './Context/ShopContext';




function App() {

  
  return (
    <ShopContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
     </Routes>
    </ShopContextProvider>
    
  );
}

export default App;
