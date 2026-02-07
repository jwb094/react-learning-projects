import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
function App() {

  const bagProduct = {
    title: "Fashion Bag",
    price: 234,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  return (
    <>
      <div className="container">
        <div className="row  | justify-content-center align-items-center">
          <ProductCard bag={bagProduct} />
        </div>
      </div>

    </>
  )
}

export default App
