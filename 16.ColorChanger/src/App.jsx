import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/theme.css'
function App() {
  //
  const [colors] = useState(["blue", "red", "green", "yellow", "orange"]);
  const [selectedColour, SetselectedColour] = useState("");

  function SwitchColour() {
    const randomIndex = [Math.floor(Math.random() * colors.length)];
    SetselectedColour(colors[randomIndex]);
  }

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
        <button onClick={SwitchColour}>
          Switch Colour
        </button>
        <p className={'bg_' + selectedColour + ' default_text_colour'}>
          <code>src/App.jsx</code>
          <br />
          <code>to have state and written classes in `className` {'bg_' + selectedColour + ' default_text_colour'}</code>
          <a href="https://stackoverflow.com/questions/36209432/how-to-dynamically-add-a-class-to-manual-class-names"> How to dynamically add a class to manual class names?</a>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
