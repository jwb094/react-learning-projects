import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");

  function updateName(e) {
    setName(e.target.value);
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row  | justify-content-center align-items-center">
          <div class="col-12">
            <form onSubmit={handleLoginSubmit}>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">First Name</span>
                </div>
                <input type="text" class="form-control" value={name} onChange={updateName} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </form>

            {name !== "" ?
              <div class="alert alert-primary" role="alert">
                First Name {name}
              </div> : ""}

          </div>
        </div>
      </div >
    </>
  )
}

export default App
