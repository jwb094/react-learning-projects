import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [errormsg, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/nonexistent");
        //https://jsonplaceholder.typicode.com/users
        if (!response.ok) {
          setError(`Request failed: ${response.status}`)
        }
        const result = await response.json()
        setUsers(result);
      } catch (error) {
        setError(`Error fetching data:: ${error}`)
      }
    }
    fetchUserData();
  }, [])
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {errormsg !== "" &&
            <div class="card bg-danger text-white">
              <div class="card-body">
                <h1 class="bg-danger">{errormsg}</h1>
              </div>
            </div>}
          {users.length >= 0 && users.map((user) => (
            <div key={user.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {user.firstName} {user.lastName}
                </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {user.email}
                </h6>
                <p className="card-text">
                  {user.company?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
