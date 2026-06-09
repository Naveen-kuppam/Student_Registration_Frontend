import { Link } from "react-router-dom";
import "./Attendance.css";

function Attendance() {
  const attendance = 0;

  return (
    <div>
    <h6 className='text-left mx-3 py-3'><Link to="/Home" className='text-decoration-none fw-bold text-dark'>Home / </Link><span className='fw-bold text-dark'>Attendance</span></h6>
    <div className="Attendance">
      <div className="Main">
        <h4 className="fw-bold heading text-center">
         Overall Attendance
        </h4>

        <div className="attendance-scale">
          <span>1.5</span><br />
          <span>1</span><br />
          <span>0.5</span><br />
          <span>0</span>
        </div>

        <h6 className="text-center attendance-text">
          Total Attendance: {attendance}%
        </h6>
      </div>
    </div>
    </div>
  );
}

export default Attendance;