import { Link } from "react-router-dom";
import "./Acadamic.css";

function Examination() {
  return (
    <div className="examination-container">

      <h6><Link
        to="/Fees"
        className="back-btn text-decoration-none text-dark">
        Fees </Link> / <span className='back-btn fw-bold text-dark'>Examination Fee Pay</span>
   </h6>

      <h3 className="text-center mt-3 fw-bold">
        Examination Fee Payment
      </h3>

      <div className="Acd">

        <div className="card fee-card">
          <div className="card-body">
            <Link to="/Pay_Fee">
              <h4>
                Regular Exam Fee
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </h4>
            </Link>
          </div>
        </div>

        <div className="card fee-card">
          <div className="card-body">
            <Link to="/Pay_Fee">
              <h4>
                Supplementary Exam Fee
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </h4>
            </Link>
          </div>
        </div>

        <div className="card fee-card">
          <div className="card-body">
            <Link to="/Pay_Fee">
              <h4>
                Internal Exam Fee
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </h4>
            </Link>
          </div>
        </div>

        <div className="card fee-card">
          <div className="card-body">
            <Link to="/Pay_Fee">
              <h4>
                Revaluation Exam Fee
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </h4>
            </Link>
          </div>
        </div>

        <div className="card fee-card">
          <div className="card-body">
            <Link to="/Pay_Fee">
              <h4>
                Recounting
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </h4>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Examination;