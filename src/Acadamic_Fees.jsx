import { Link } from "react-router-dom";
import "./Acadamic.css";

function Acadamic_Fees() {
  return (
    <div className="examination-container">

    <h6>  <Link
        to="/Fees"
        className="back-btn text-decoration-none text-dark">
        Fees</Link>/ <span className='back-btn fw-bold text-dark'>Acadamic Fee Pay</span></h6>
    

      <h3 className="text-center mt-3 fw-bold">
        Academic Fee Payment
      </h3>

      <div className="Acd">

        <div className="card fee-card">
          <div className="card-body">
            <Link to="/Pay_Fee">
              <h4>
                Student Payment History
                <span>
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </span>
              </h4>
            </Link>
          </div>
        </div>

        <div className="card fee-card">
          <div className="card-body">
            <Link to="/Pay_Fee">
              <h4>
                Old Transactions
                <span>
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </span>
              </h4>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Acadamic_Fees;