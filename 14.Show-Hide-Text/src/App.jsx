import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visible, setvisible] = useState(true);

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
        <button type="button" class="btn btn-primary" onClick={() => setvisible((visible) => visible === true ? false : true)}>
          {visible === true ? 'Invisible' : 'Visible'}</button>
      </div>

      <p className={`mt-5 alert alert-primary ${visible ? 'visible' : 'invisible'}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam vitae tempor orci, in pellentesque magna. Nulla lacus massa, finibus eu dui vitae, egestas ornare arcu.
        Nullam et mi vel arcu efficitur tincidunt ut ac nunc.
        Aenean rutrum auctor nunc, eget dapibus libero sollicitudin ac.
        Mauris sollicitudin consequat consequat. Quisque dictum justo id purus blandit, ac lacinia tortor imperdiet.
        Nulla condimentum feugiat est, id facilisis diam. Fusce bibendum quis tellus et fermentum.
        Donec elementum ligula nulla.
      </p>
    </>
  )
}

export default App
