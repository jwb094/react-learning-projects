import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [status, setStatus] = useState(true);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setStatus((status) => status === true ? false : true)}>
          Switch State {status === true ? 'Off' : 'On'}
        </button>
        <div className="form">
          <input type="text" name="" id="" disabled={status === true} />
        </div>
      </div>

    </>
  )
}

export default App
