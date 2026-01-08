import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogHeader from './components/BlogHeader';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Static blog post layout</h1>
      <div className="container">
        <div className="row  | justify-content-center align-items-center">
          <BlogHeader />
        </div>
      </div >
    </>
  )
}

export default App
