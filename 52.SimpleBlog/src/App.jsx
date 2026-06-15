import { useState } from 'react'
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Home from './pages/Home';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
  )
}

export default App
