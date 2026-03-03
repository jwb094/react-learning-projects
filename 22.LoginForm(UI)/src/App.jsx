import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  //get value of username input and insert into username state
  function updateUsername(e) {
    setUsername(e.target.value);
  }
  //get value of password input and insert into password state
  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function validateFields() {
    let validationErrors = {};

    // Username validation
    if (!username.trim()) {
      validationErrors.username = "Username is required";
    } else if (username.length < 3) {
      validationErrors.username = "Username must be at least 3 characters";
    }

    // Password validation
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    //append the validationErrors to State
    setErrors(validationErrors);

    //Return True or false depending on the length
    return Object.keys(validationErrors).length === 0;
  }


  function handleLoginSubmit(e) {
    e.preventDefault();

    const isValid = validateFields();
    if (!isValid) return;

    setResult("Form has been submitted with Username: " + username + " and Password " + password);
  }




  return (
    <>
      <div className="container-fluid">
        <div className="row  | justify-content-center align-items-center">
          <div className="col-12">
            <form method="post" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" id="Inputusername" value={username} onChange={updateUsername} />
                {/* display error msg conditional for username */}
                {errors.username && (
                  <div className=" mt-2 | alert alert-danger" role="alert">
                    {errors.username}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="InputPassword" value={password} onChange={updatePassword} />
                {/* display error msg conditional for password */}
                {errors.password && (
                  <div className=" mt-2 | alert alert-danger" role="alert">
                    {errors.password}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {result ?
              < div class="alert alert-success" role="alert">
                {result}
              </div> : ""}
          </div>
        </div>
      </div >
    </>
  )
}

export default App
