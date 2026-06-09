import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import Attendance from "./Attendance";
import Fees from "./Fees";
import Examination from "./Examination";
import Transport from "./Transport";
import Pay_Fee from "./Pay_Fee";
import Results from "./Results";
import Events from "./Events";
import Student_Registration from "./Student_Registration";
import Acadamic_Fees from "./Acadamic_Fees";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Student_Registration" element={<Student_Registration />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/Fees" element={<Fees />} />
        <Route path="/Acadamic_Fees" element={<Acadamic_Fees />} />
        <Route path="/Examination" element={<Examination />} />
        <Route path="/Transport" element={<Transport />} />
        <Route path="/Pay_Fee" element={<Pay_Fee />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Events" element={<Events />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </HashRouter>
  </StrictMode>
);