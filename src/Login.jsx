import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import Student_Registration from "./Student_Registration";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const student = JSON.parse(localStorage.getItem("student"));

        if (
            student &&
            student.email === email &&
            student.password === password
        ) {
            navigate("/Home");
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Student Login</h1>

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>

                    <p className="signup-text">
                        Don't have an account?
                    </p>

                    <Link to="/Student_Registration">
                        <button type="button" className="signup-btn">
                            Sign Up
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;