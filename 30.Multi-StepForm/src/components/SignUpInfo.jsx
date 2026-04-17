import React from "react";

function SignUpInfo({ formData, setFormData, errors }) {
  return (

    <div className="sign-up-container">
      <input type="text" placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />

      {errors.email && (
        <div className=" mt-2 | alert alert-danger" role="alert">
          {errors.email}</div>
      )}
      <input type="text" placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        } />
      {errors.password && (
        <div className=" mt-2 | alert alert-danger" role="alert">
          {errors.password}</div>
      )}
      <input type="text" placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        } />
      {errors.confirmPassword && (
        <div className=" mt-2 | alert alert-danger" role="alert">
          {errors.confirmPassword}</div>
      )}
    </div>

  );
}

export default SignUpInfo;
