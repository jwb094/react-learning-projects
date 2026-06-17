import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfile from './pages/UserProfile'
function App() {

  return (
    <>
      <Routes>
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </>
  )
}

export default App
