import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users`);
        const result = await response.json()
        setUsers(result.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <>
      <section className="container">
        <div className="row justify-content-center align-items-center">
          <div className="row | justify-content-md-center ">
            <div className="">
              Search
              <input className="form-control" type="text"
                placeholder="Default input"
                aria-label="default input example"
                value={searchTerm}
                onChange={(e) => (setSearchTerm(e.target.value))}></input>
            </div>
          </div>
          <div className="col-md-6 | mt-4">
            {
              users.filter((item) => searchTerm === ''
                || item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                || item.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((user) => (
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
      </section>
    </>
  )
}

export default App
