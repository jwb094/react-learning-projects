import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [greeting, setGreeting] = useState("Hello");
  // const [username, setUsername] = useState("James");

  const greeting = "Hello";
  const username = "James";
  return (

    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <h1> {greeting}, {username}</h1>
        </div>
      </div>
    </div>

  )
}

export default App
