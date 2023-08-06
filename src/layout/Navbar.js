import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarAll, SideBarPatient, SideBarAdmin } from "./SideBar";
import { useLocalStorage } from "../hooks/useLocalStorage";

import "../App.css";
import { IconContext } from "react-icons";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  let navigate = useNavigate();

  const [admin, setAdmin] = useLocalStorage("admin", null); //Pull admin object from local storage
  const [patient, setPatient] = useLocalStorage("patient", null); //Pull patient object from local storage

  const [sideBarOptions, setSideBarOptions] = useState(SideBarAll);

  useEffect(() => {
    if (admin) {
      setSideBarOptions(SideBarAdmin);
    } else if (patient) {
      setSideBarOptions(SideBarPatient(patient.id));
    } else {
      setSideBarOptions(SideBarAll);
    }
  }, [
    admin,
    patient,
    localStorage.getItem("admin"),
    localStorage.getItem("patient"),
  ]);

  const showSidebar = () => setSidebar(!sidebar);

  const logOut = () => {
    localStorage.clear(); //This will delete adta in the local storage
    navigate("/");
    window.location.reload(); //Reloads the page in order to get the data stored in local storage
  };

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="z-3 navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sideBarOptions.map((item, index) => {
              //We are going to map the SideBar data here
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {(admin || patient) && (
              <li>
                <button className="btn btn-outline-primary" onClick={logOut}>
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>

    // <div>

    //   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //     <div className="container-fluid">
    //       <Link className="navbar-brand" to="/">
    //         Sonrisa Dental Clinic
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <Link className="btn btn-outline-light" to="/allstaff">
    //         View All Staff
    //       </Link>
    //       <Link className="btn btn-outline-light" to="/viewavailableapts">
    //         View Available Appointments
    //       </Link>
    //       <Link className="btn btn-outline-light" to="/allpatients">
    //         View All Patients
    //       </Link>
    //       <Link className="btn btn-outline-light" to="/allusers">
    //         View All Users
    //       </Link>
    //     </div>
    //   </nav>
    // </div>
  );
}
