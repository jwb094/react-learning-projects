import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home'
import Default from './components/layouts/Default'
import Blog from './components/layouts/Blog';
import BlogPost from './pages/BlogPost';
import BlogList from './pages/BlogList';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
