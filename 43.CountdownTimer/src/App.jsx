import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  const [timer, setTimer] = useState(10);

  // useEffect(() => {
  //   timeCountDown();
  // }, [timer])

  // function timeCountDown() {
  //   // Stop immediately if timer is already 0
  //   if (timer <= 0) return

  //   setInterval(() => {
  //     SetTimer(prevTime => prevTime - 1)
  //   }, 1000)
  // }

  useEffect(() => {
    // Stop immediately if timer is already 0
    if (timer <= 0) return

    const interval = setInterval(() => {
      setTimer(prevTime => prevTime - 1)
    }, 1000)

    // Cleanup interval on every re-render
    return () => clearInterval(interval)
  }, [timer])

  return (
    <>
      <h1>{timer}</h1>
      <div>dsdsd</div>
    </>
  )
}

export default App
