import React from "react";

function OtherInfo({ formData, setFormData, errors }) {
  return (
    <div className="other-info-container">
      <input type="text" placeholder="Nationality..."
        value={formData.nationality}
        onChange={(event) =>
          setFormData({ ...formData, nationality: event.target.value })
        } />
      {errors.nationality && (
        <div className=" mt-2 | alert alert-danger" role="alert">
          {errors.nationality}</div>
      )}
      <input type="text" placeholder="Other..."
        value={formData.other}
        onChange={(event) =>
          setFormData({ ...formData, other: event.target.value })
        } />
      {errors.other && (
        <div className=" mt-2 | alert alert-danger" role="alert">
          {errors.other}</div>
      )}
    </div>
  )
}

export default OtherInfo;
