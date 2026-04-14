import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
              className="toggle-visibility"
              onClick={() => setVisibility((visibility) => visibility ? false : true)}>
              {visibility === true ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

        </div>


      </section >
    </>
  )
}

export default App
