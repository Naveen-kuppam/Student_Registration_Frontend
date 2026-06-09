import { Link } from "react-router-dom";
import "./Fees.css";

function Fees() {
  return (
    <>
      <h6 className="mx-3 py-3">
        <Link
          to="/Home"
          className="text-decoration-none fw-bold text-dark"
        >
          Home /
        </Link>
        <span className="fw-bold text-dark"> Fees Structure</span>
      </h6>

      <div className="Fees">
        <div className="main">

          <h3 className="text-center fw-bold mb-5">
            Select type of Fee to Continue
          </h3>

          <div className="Fees1">
            <Link to="/Acadamic_Fees">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Pay Academic Fees
                  </h5>
                  <p className="card-text">
                    Pay Tuition Fee, Hostel Fee and Tuition Fees
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="row g-3">

            <div className="col-lg-6 col-md-6 col-12">
              <Link to="/Examination">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Pay Examination Fees
                    </h5>

                    <p className="card-text">
                      Pay Regular and Supplementary Fees
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <Link to="/Transport">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Transport Registration
                    </h5>

                    <p className="card-text">
                      Register for bus service and select seats
                    </p>
                  </div>
                </div>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Fees;