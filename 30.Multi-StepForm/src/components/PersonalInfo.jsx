import React from "react";

function PersonalInfo({ formData, setFormData, errors }) {
  return (
    <div className="personal-info-container">
      <input type="text" placeholder="First name..."
        value={formData.firstname}
        onChange={(event) =>
          setFormData({ ...formData, firstname: event.target.value })
        } />
      {errors.firstname && (
        <div className=" mt-2 | alert alert-danger" role="alert">
          {errors.firstname}</div>
      )}
      <input type="text" placeholder="Last Name..."
        value={formData.lastname}
        onChange={(event) =>
          setFormData({ ...formData, lastname: event.target.value })
        } />
      {errors.lastname && (
        <div className=" mt-2 | alert alert-danger" role="alert">
          {errors.lastname}</div>
      )}
      <input type="text" placeholder="Username..."
        value={formData.username}
        onChange={(event) =>
          setFormData({ ...formData, username: event.target.value })
        } />
      {errors.username && (
        <div className=" mt-2 | alert alert-danger" role="alert">
          {errors.username}</div>
      )}
    </div>
  )
}

export default PersonalInfo;
