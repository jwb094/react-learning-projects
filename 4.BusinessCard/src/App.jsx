import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './components/BusinessCard';
function App() {
  const [fakePerson, setfakePerson] = useState({
    "firstName": "Alex",
    "lastName": "Morgan",
    "jobTitle": "Senior Web Application Developer",
    "phoneNumber": "+1-555-0198",
    "email": "alex.morgan@example.com",
    "personalWebsite": "https://www.alexmorgan.dev"
  }
  )

  return (
    <>

      <div className="container">
        <div className="row  | justify-content-center align-items-center">
          <h1>Business Card Component</h1>
          <div className='col-md-8'>
            <BusinessCard BusinessCardProfile={fakePerson} />
          </div>
        </div>
      </div >
    </>
  )
}

export default App
