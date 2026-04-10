import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [email, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  //get value of last name input and insert into last name state
  function updateName(e) {
    setName(e.target.value);
  }

  //get value of email input and insert into email state
  function updateEmail(e) {
    setAddress(e.target.value);
  }
  //get value of password input and insert into password state
  function updateMessage(e) {
    setMessage(e.target.value);
  }

  function validateFields() {
    let validationErrors = {};
    // First Name validation
    if (!name) {
      validationErrors.name = "Your Name is required";
    }
    // Message validation
    if (!message) {
      validationErrors.message = "Your Message is required";
    }

    // Email validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      validationErrors.email = "Invalid Email address";
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

    setResult("Thank you " + name + " for sending your message");

  }

  return (
    <>
      <div className="container-fluid">
        <div className="row  | justify-content-center align-items-center">
          <div className="col-12">
            <form method="post" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"> Name</label>
                <input type="text" className="form-control" id="InputFirstname" value={name} onChange={updateName} />
                {/* display error msg conditional for username */}
                {errors.name && (
                  <div className=" mt-2 | alert alert-danger" role="alert">
                    {errors.name}</div>
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
                <label htmlFor="exampleInputPassword1">Message</label>
                <textarea name="message" className="form-control" id="message" value={message} onChange={updateMessage}></textarea>
                {/* display error msg conditional for password */}
                {errors.message && (
                  <div className=" mt-2 | alert alert-danger" role="alert">
                    {errors.message}</div>
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
