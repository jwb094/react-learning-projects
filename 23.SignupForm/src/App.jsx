import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});


  //get value of first name input and insert into first name state
  function updateFirstname(e) {
    setFirstname(e.target.value);
  }
  //get value of last name input and insert into last name state
  function updateLastname(e) {
    setLastname(e.target.value);
  }

  //get value of email input and insert into email state
  function updateEmail(e) {
    setAddress(e.target.value);
  }

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

    // First Name validation
    if (!firstname) {
      validationErrors.firstname = "First Name is required";
    }

    // Last Name validation
    if (!lastname) {
      validationErrors.lastname = "Last Name is required";
    }

    // Email validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      validationErrors.email = "Invalid Email address";
    }

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

    setResult("Form has been submitted with { first_name: " + firstname + ",last_name: " + lastname + ",email :" + email + ",username:" + username + ",password:" + password + "} ");

  }

  return (
    <>
      <div className="container-fluid">
        <div className="row  | justify-content-center align-items-center">
          <div className="col-12">
            <form method="post" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input type="text" className="form-control" id="InputFirstname" value={firstname} onChange={updateFirstname} />
                {/* display error msg conditional for username */}
                {errors.firstname && (
                  <div className=" mt-2 | alert alert-danger" role="alert">
                    {errors.firstname}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                <input type="text" className="form-control" id="InputLastname" value={lastname} onChange={updateLastname} />
                {/* display error msg conditional for password */}
                {errors.lastname && (
                  <div className=" mt-2 | alert alert-danger" role="alert">
                    {errors.lastname}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="Inputemail" value={email} onChange={updateEmail} />
                {/* display error msg conditional for username */}
                {errors.email && (
                  <div className=" mt-2 | alert alert-danger" role="alert">
                    {errors.email}</div>
                )}
              </div>
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
