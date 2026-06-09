import { Link } from "react-router-dom";
function Results() {
    return (
        <div>
             <h6 className='text-left mx-3 py-3'><Link to="/Home" className='text-decoration-none fw-bold text-dark'>Home / </Link><span className='fw-bold text-dark'>Results</span></h6>
             <h4 className="fw-bold text-center">Currently there is no Results</h4>
        </div> 
        
     );
}

export default Results;