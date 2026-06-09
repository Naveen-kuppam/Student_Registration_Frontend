import { Link } from "react-router-dom";
import "./Acadamic.css";

function Transport() {
    return (
        <div className="examination-container">

           <h6> <Link
                to="/Fees"
                className="back-btn text-decoration-none text-dark">
                Fees  </Link>/ <span className='back-btn fw-bold text-dark'>Transport Fee Pay</span></h6>
        

            <h3 className="text-center mt-3 fw-bold">
                Transport Fee Payment
            </h3>

            <div className="Acd">
                <div className="card fee-card">
                    <div className="card-body">
                        <form>
                            <h4 className="fw-bold mb-3">
                                Boarding Point *
                            </h4>

                            <input
                                type="search"
                                placeholder="Search Boarding Point..."
                                className="transport-input"
                            />

                            <button
                                type="submit"
                                className="transport-btn"
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Transport;