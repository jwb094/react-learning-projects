import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [visibility, setVisibility] = useState(true);

  return (
    <>
      <section id="center">

        <div>
          <h1>26.Password Show/Hide</h1>
          <div>
            <input type={visibility ? "text" : "password"} />
            <button
              className="counter"
              onClick={() => setVisibility((visibility) => visibility ? false : true)}>
              {visibility === true ? 'Invisible' : 'Visible'}
            </button>
          </div>

        </div>


      </section >
    </>
  )
}

export default App
