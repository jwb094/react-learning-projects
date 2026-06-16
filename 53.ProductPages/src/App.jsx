import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ProductsDetails from './pages/ProductsDetails'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products/:slug" element={<ProductsDetails />} />
      </Routes>
    </>
  )
}

export default App
