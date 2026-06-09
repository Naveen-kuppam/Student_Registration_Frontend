import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row g-4">

          {/* Attendance */}
          <div className="col-lg-6 col-md-6 col-12">
            <Link to="/Attendance" className="text-decoration-none">
              <div
                className="card dashboard-card"
                style={{ backgroundColor: "#B6DEA6" }}
              >
                <div className="card-body1">
                  <i className="fa-regular fa-calendar"></i>
                  <h5 className="card-title fw-bold mt-3">Attendance</h5>
                  <p className="card-subtitle text-body-secondary">
                    Attendance
                  </p>
                  <p className="card-text">0.0 %</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Fees */}
          <div className="col-lg-6 col-md-6 col-12">
            <Link to="/Fees" className="text-decoration-none">
              <div
                className="card dashboard-card"
                style={{ backgroundColor: "#EB9E9E" }}
              >
                <div className="card-body2">
                  <i className="fa-solid fa-arrow-right"></i>
                  <h5 className="card-title fw-bold mt-3">Fee Payments</h5>
                  <p className="card-subtitle text-body-secondary">Dues</p>
                  <p className="card-text">INR 0.00</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Exams */}
          <div className="col-lg-6 col-md-6 col-12">
            <Link to="/Results" className="text-decoration-none">
              <div
                className="card dashboard-card"
                style={{ backgroundColor: "#CF9EEB" }}
              >
                <div className="card-body3">
                  <i className="fa-solid fa-trophy"></i>
                  <h5 className="card-title fw-bold mt-3">Exams</h5>
                  <p>CGPA : NA</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Events */}
          <div className="col-lg-6 col-md-6 col-12">
            <Link to="/Events" className="text-decoration-none">
              <div
                className="card dashboard-card"
                style={{ backgroundColor: "#9EDEEB" }}
              >
                <div className="card-body4">
                  <i className="fa-solid fa-location-crosshairs"></i>
                  <h5 className="card-title fw-bold mt-3">
                    Clubs & Events
                  </h5>
                  <p>Registered</p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;