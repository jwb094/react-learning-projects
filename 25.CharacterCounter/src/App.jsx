import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [characterCounter, setCharacterCounter] = useState(0);

  function updateCount(e) {
    setCharacterCounter(e.target.value.length);
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <input type="text" onChange={updateCount} />
        </div>
        <div
        >
          Count is {characterCounter}
        </div>
      </section>


    </>
  )
}

export default App
