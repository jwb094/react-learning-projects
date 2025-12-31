import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import ProfileCard from './components/profileCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="row  | justify-content-center align-items-center">
          <Profile name={"Jo smith Jr"} bio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sem mollis, mollis nunc vel, ornare sem. Morbi tempus quis nibh in volutpat. Integer lacus tellus, mollis id risus quis, pulvinar molestie nulla. Etiam quis lacus lacus. Integer eget magna sodales, aliquam mauris rhoncus, bibendum diam. Donec interdum venenatis ligula, nec imperdiet ex rutrum suscipit."} />
          <ProfileCard />
        </div>
      </div >

    </>
  )
}

export default App
