import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarAll = [
  //Creates an Array of objects with our menu options
  {
    title: "About Us",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Our Prices",
    path: "/ourprices",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Patient Sign In",
    path: "/patientsignin",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/patientsignup",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Admin Sign In",
    path: "/adminsignin",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

export const SideBarPatient = (patient_id) => [
  //We have to pass the signed in patient's id
  //Creates an Array of objects with our menu options
  {
    title: "About Us",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Our Prices",
    path: "/ourprices",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Patient Profile",
    path: `/patientprofile/${patient_id}`,
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "View Booked Appoinments",
    path: `/view_booked_apts/${patient_id}`,
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

export const SideBarAdmin = [
  //We have to pass the signed in patient's id
  //Creates an Array of objects with our menu options
  {
    title: "About Us",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Our Prices",
    path: "/ourprices",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Booked Appointments",
    path: "/viewbookedapt",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Staff",
    path: "/allstaff",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
