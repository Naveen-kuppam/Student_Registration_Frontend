import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Student_Registration.css";

function Student_Registration() {
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        rollno: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("student", JSON.stringify(student));

        alert("Registration Successful");
        navigate("/");
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="fw-bold">Create Your Account</h2>
                <p>Fill in your student details.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            value={student.name}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Roll No.</label>
                        <input
                            type="text"
                            placeholder="Enter Roll Number"
                            value={student.rollno}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    rollno: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={student.email}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={student.password}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>

                    <button type="submit" className="mt-2">
                        Register
                    </button>

                    <p className="signin-text">
                        Already registered?{" "}
                        <Link to="/">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Student_Registration;