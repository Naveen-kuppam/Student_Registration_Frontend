import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./Login";
import Navbar from "./Navbar";
import Student_Registration from "./Student_Registration";
import Home from "./Home";
import Profile from "./Profile";
import Attendance from "./Attendance";
import Fees from "./Fees";
import Examination from "./Examination";
import Transport from "./Transport";
import Pay_Fee from "./Pay_Fee";
import Results from "./Results";
import Events from "./Events";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Acadamic_Fees from "./Acadamic_Fees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Student_Registration />,
  },
  {
    path: "/Navbar",
    element: <Navbar/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
  {
    path: "/Attendance",
    element: <Attendance/>,
  },
   {
    path: "/Fees",
    element: <Fees/>,
  },
  {
    path: "/Acadamic_Fees",
    element: <Acadamic_Fees/>,
  },
  {
    path: "/Examination",
    element: <Examination/>,
  },
  {
    path: "/Transport",
    element: <Transport/>,
  },
  {
    path: "/Pay_Fee",
    element: <Pay_Fee/>,
  },
  {
    path: "/Results",
    element: <Results/>,
  },
  {
    path: "/Events",
    element: <Events/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);