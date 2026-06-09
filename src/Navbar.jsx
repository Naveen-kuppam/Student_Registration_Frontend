import { Link } from "react-router-dom";

import "./Navbar.css";



function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg custom-navbar">

            <div className="container-fluid">
                <Link className="navbar-brand brand-logo" to="/"> CAMPX
                </Link>
                <button

                    className="navbar-toggler"

                    type="button"

                    data-bs-toggle="collapse"

                    data-bs-target="#navbarSupportedContent"

                    aria-controls="navbarSupportedContent"

                    aria-expanded="false"

                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto fw-bold">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/Home">
                                Home
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/Profile">
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );

}



export default Navbar;