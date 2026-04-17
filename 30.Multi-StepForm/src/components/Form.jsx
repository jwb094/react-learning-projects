import React, { use, useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    username: "",
    nationality: "",
    other: ""
  })
  const formTitles = ["SignUp", "Personal Info", "Other Info"];

  // const PageDisplay = () => {
  //   if (page === 0) {
  //     return <SignUpInfo />;
  //   } else if (page === 1) {
  //     return <PersonalInfo />;
  //   } else {
  //     return <OtherInfo />;
  //   }
  // };

  function validateFields() {
    let validationErrors = {};

    // First Name validation
    if (!formData.firstname) {
      validationErrors.firstname = "First Name is required";
    }

    // Last Name validation
    if (!formData.lastname) {
      validationErrors.lastname = "Last Name is required";
    }

    // Email validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(formData.email)) {
      validationErrors.email = "Invalid Email address";
    }

    // Username validation
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      validationErrors.username = "Username must be at least 3 characters";
    }

    // Password validation
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.password = "Confirmed Password Doesn't match Password";
    }

    if (!formData.nationality) {
      validationErrors.nationality = "nationality is required";
    }

    if (!formData.other) {
      validationErrors.other = "other is required";
    }

    //append the validationErrors to State
    setErrors(validationErrors);

    //Return True or false depending on the length
    return Object.keys(validationErrors).length === 0;
  }


  function handleSignUpSubmit() {
    const isValid = validateFields();
    if (!isValid) return;

    alert("Form was Sumbitted");
  }

  return (
    <div className="form">
      <div className="progressbar">
        <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="body">
          {/* {PageDisplay()} */}
          {page == 0 && <SignUpInfo formData={formData} setFormData={setFormData} errors={errors} />}
          {page == 1 && <PersonalInfo formData={formData} setFormData={setFormData} errors={errors} />}
          {page == 2 && <OtherInfo formData={formData} setFormData={setFormData} errors={errors} />}
          {/* {page == 0 ? <SignUpInfo /> : ""}
          {page == 1 ? <PersonalInfo /> : ""}
          {page == 2 ? <OtherInfo /> : ""} */}
        </div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) =>
                currPage - 1
              );
            }}
          >
            Prev
          </button>
          <button
            // disabled={page == formTitles.length - 1}
            onClick={() => {
              if (page === formTitles.length - 1) {
                // alert("form sumbitted");
                // console.log(formData);
                handleSignUpSubmit();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === formTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div >
  );
}

export default Form;
