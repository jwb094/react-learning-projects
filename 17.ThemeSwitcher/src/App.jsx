import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/theme.css'
function App() {
  const [theme, setTheme] = useState("lightmode");
  function SwitchTheme() {

    setTheme(prev => {
      //Get the previous state value of Theme
      const nextTheme = prev === 'darkmode' ? 'lightmode' : 'darkmode';
      // Remove previous classes for body tag
      document.body.classList.remove('lightmode', 'darkmode');
      // add update themeclass to body class selector classes for body tag
      document.body.classList.toggle(theme);

      return nextTheme;
    });
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
        {/* <button onClick={() => setTheme((theme) => theme === "lightmode" ? "darkmode" : "lightmode")}>
          Switch to  {theme}
        </button> */}
        <button onClick={SwitchTheme}>
          Switch to  {theme}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
