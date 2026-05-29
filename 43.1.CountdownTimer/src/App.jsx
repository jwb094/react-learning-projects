import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [timer, setTimer] = useState("00:00:00");
  const Ref = useRef();


  function getTimeRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    const hour = Math.floor(total / (1000 * 60 * 60) % 24);
    const seconds = Math.floor((total / 1000) % 60);
    const minute = Math.floor((total / 1000 / 60) % 60);

    return { total, hour, minute, seconds }
  }
  function startTimer(e) {
    let { total, hour, minute, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hour > 9 ? hour : '0' + hour) + ":" +
        (minute > 9 ? minute : '0' + minute) + ":" +
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  function clearTimer(e) {
    setTimer("00:00:20");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  function getDeadTime() {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 20);
    return deadline;
  }

  function Reset() {
    clearTimer(getDeadTime())
  }
  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])
  return (
    <>
      <div className="flex  items-center justify-center ">
        <h2>{timer}</h2>
        <br />
        <button onClick={Reset} className='btn btn-primary'>Reset</button>
      </div>
    </>
  )
}

export default App
