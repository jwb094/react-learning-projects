import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  const [products, SetProducts] = useState([
    {
      name: "Wireless Mouse",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Ergonomic wireless mouse designed for smooth tracking and comfortable long-term usage.",
      favourite: false
    },
    {
      name: "Bluetooth Headphones",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Over-ear Bluetooth headphones with immersive sound quality and extended battery performance.",
      favourite: false
    },
    {
      name: "Laptop Stand",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1641057350183-48d58af53b12?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Adjustable aluminum laptop stand that improves posture and enhances airflow for cooling.",
      favourite: false
    },
    {
      name: "Smartphone",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Modern smartphone featuring a high-resolution display, fast processor, and excellent camera system.",
      favourite: false
    },
    {
      name: "Gaming Keyboard",
      price: 89.99,
      image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Mechanical keyboard with responsive keys and customizable RGB lighting for gaming setups.",
      favourite: false
    },
    {
      name: "Smart Watch",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Smartwatch offering fitness tracking, notifications, and long-lasting battery for daily use.",
      favourite: false
    },
    {
      name: "Coffee Maker",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1608354580875-30bd4168b351?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Automatic coffee maker with programmable settings for a perfect brew every morning.",
      favourite: false
    },
    {
      name: "Running Shoes",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lightweight running shoes designed for comfort, durability, and enhanced athletic performance.",
      favourite: false
    },
    {
      name: "Backpack",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Spacious backpack with multiple compartments, ideal for travel, school, or daily commuting.",
      favourite: false
    },
    {
      name: "Desk Lamp",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "LED desk lamp with adjustable brightness levels and modern minimalist design.",
      favourite: false
    },
    {
      name: "Electric Kettle",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1643114786355-ff9e52736eab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Fast-boiling electric kettle with safety features and sleek stainless steel finish.",
      favourite: false
    },
    {
      name: "Yoga Mat",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1646239646963-b0b9be56d6b5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Non-slip yoga mat suitable for home workouts, stretching routines, and fitness exercises.",
      favourite: false
    },
    {
      name: "Tablet",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Portable tablet with a vibrant display, perfect for entertainment, reading, and productivity.",
      favourite: false
    },
    {
      name: "Camera",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "High-resolution digital camera ideal for capturing stunning photos and professional videos.",
      favourite: false
    },
    {
      name: "Office Chair",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Ergonomic office chair with lumbar support for improved posture during long work sessions.",
      favourite: false
    },
    {
      name: "Monitor",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Full HD monitor delivering crisp visuals and smooth performance for work or gaming.",
      favourite: false
    },
    {
      name: "Portable Speaker",
      price: 44.99,
      image: "https://source.unsplash.com/featured/?speaker",
      desc: "Compact Bluetooth speaker with powerful sound and water-resistant build for outdoor use.",
      favourite: false
    },
    {
      name: "Sunglasses",
      price: 19.99,
      image: "https://source.unsplash.com/featured/?sunglasses",
      desc: "Stylish sunglasses with UV protection, suitable for everyday wear and outdoor activities.",
      favourite: false
    },
    {
      name: "Water Bottle",
      price: 12.99,
      image: "https://source.unsplash.com/featured/?water-bottle",
      desc: "Reusable water bottle made from durable materials, perfect for staying hydrated on the go.",
      favourite: false
    },
    {
      name: "Gaming Console",
      price: 399.99,
      image: "https://source.unsplash.com/featured/?gaming-console",
      desc: "Next-generation gaming console delivering immersive gameplay and high-performance graphics.",
      favourite: false
    }
  ]);


  function updateFavourite(index) {
    let items = [...products];
    (items[index].favourite === false)
      ? items[index].favourite = true
      : items[index].favourite = false;
    const updatedProducts = [...items];
    SetProducts(updatedProducts);
  }

  return (
    <>
      <div className="container text-center">
        <div className="row row-gap-3 column-gap-3">
          {products.map((product, index) =>
            <ProductCard index={index} product={product} updateFavourite={updateFavourite} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
