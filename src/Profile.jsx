import { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  const storedStudent = JSON.parse(localStorage.getItem("student")) || {};

  const [student, setStudent] = useState(storedStudent);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setStudent({
          ...student,
          image: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("student", JSON.stringify(student));
    setEdit(false);
  };

   return (
  <div className="parent">
    <h6 className="m-3">
      <Link to="/Home"
        className="text-black fw-bold text-decoration-none">
        Home /
      </Link>
      <span className="text-black fw-bold"> Profile</span>
    </h6>

    <h2 className="fw-bold text-center mb-4">
      STUDENT PROFILE
    </h2>

    <div className="main1">
      <div className="card profile-card">
        <div className="text-center">
          <img
            src={student?.image || "https://via.placeholder.com/120"}
            alt="Profile"
            className="profile-img"
          />
        </div>

        {edit && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="form-control mb-4"
          />
        )}

        <div className="profile-grid">

          <div className="profile-item">
            <label>Name</label>
            {edit ? (
              <input
                type="text"
                name="name"
                value={student.name || ""}
                onChange={handleChange}
              />
            ) : (
              <p>{student.name || "N/A"}</p>
            )}
          </div>

          <div className="profile-item">
            <label>Roll Number</label>
            {edit ? (
              <input
                type="text"
                name="rollno"
                value={student.rollno || ""}
                onChange={handleChange}
              />
            ) : (
              <p>{student.rollno || "N/A"}</p>
            )}
          </div>

          <div className="profile-item">
            <label>Email</label>
            {edit ? (
              <input
                type="email"
                name="email"
                value={student.email || ""}
                onChange={handleChange}
              />
            ) : (
              <p>{student.email || "N/A"}</p>
            )}
          </div>

          <div className="profile-item">
            <label>Gender</label>
            {edit ? (
              <select
                name="gender"
                value={student.gender || ""}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{student.gender || "N/A"}</p>
            )}
          </div>

          <div className="profile-item full-width">
            <label>Address</label>
            {edit ? (
              <textarea
                name="address"
                value={student.address || ""}
                onChange={handleChange}
              />
            ) : (
              <p>{student.address || "N/A"}</p>
            )}
          </div>

        </div>

        <div className="text-center mt-4">
          {!edit ? (
            <button
              className="btn btn-primary"
              onClick={() => setEdit(true)}
            >
              Edit Profile
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={handleSave}
            >
              Save Profile
            </button>
          )}
        </div>

      </div>
    </div>
  </div>

  );
}

export default Profile;