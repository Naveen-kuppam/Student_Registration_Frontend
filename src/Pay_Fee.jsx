import { Link } from "react-router-dom";
function Pay_Fee() {
    return ( 
        <div>
        <h6 className='text-left mx-3 py-3'><Link to="/Fees" className='text-decoration-none fw-bold text-dark'>Fees / </Link><span className='fw-bold text-dark'>Fees Structure</span></h6>
        <h4 className="fw-bold text-center">Currently there are no examinations</h4>
        </div>
     );
}

export default Pay_Fee;