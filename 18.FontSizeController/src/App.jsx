import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const [fontSize, setfontSize] = useState(16);

  return (
    <>

      <h1>Font Size Controller</h1>
      <div className="card">
        <button onClick={() => setfontSize((fontSize) => fontSize + 1)}>
          Increase Font Size  {fontSize + 1}
        </button>
        <button onClick={() => setfontSize((fontSize) => fontSize - 1)}>
          Decrease Font Size to {fontSize - 1}
        </button>
        <p style={{ fontSize: `${fontSize}px` }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est odio et labore ab totam optio animi id deleniti voluptates earum, fuga eligendi aut. Ducimus dolorem, illo tempora quisquam labore qui delectus, totam harum provident quia quod ad laudantium laboriosam nemo? Maiores et velit tempora aliquam, perspiciatis pariatur hic magnam reiciendis!
        </p>
      </div >
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
