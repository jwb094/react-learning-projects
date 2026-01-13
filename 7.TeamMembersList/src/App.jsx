import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamMembersCard from "./components/TeamMembersCard";
function App() {

  const [teamMembers, setteamMembers] = useState([
    {
      name: "Jane Johnson",
      Role: "Accountant"
    },
    {
      name: "Alan Richards",
      Role: "CEO"
    },
    {
      name: "bartholomew Daniels",
      Role: "COO"
    },]);



  return (
    <>
      <div className="container">
        <div className="row  | justify-content-center align-items-center">
          {teamMembers.map((key, index) =>
            < div className="col-md-4" >
              <TeamMembersCard teamMember={teamMembers[index]} />
            </div>
          )}
        </div>
      </div >
    </>
  )
}

export default App
