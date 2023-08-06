import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layout
import Navbar from "./layout/Navbar";

//Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurPrices from "./pages/OurPrices";

//Users
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import AllUsers from "./users/AllUsers";

//Appointments
import ViewAvailableAppointments from "./appointments/ViewAvailableAppointments"; // We need to import the file ViewAvailableAppointments
import ViewBookedAppointments from "./appointments/ViewBookedAppointments";
import ViewByWeek from "./appointments/ViewByWeek";
import ViewAppointment from "./appointments/ViewAppointment";
import EditAppointment from "./appointments/EditAppointment";
import InvoiceAppointment from "./appointments/InvoiceAppointment";

//Patients
import AllPatients from "./patients/AllPatients";
import ViewPatient from "./patients/ViewPatient";
import EditPatient from "./patients/EditPatient";
import AddPatient from "./patients/AddPatient";
import PatientSignIn from "./patients/PatientSignIn";
import PatientSignUp from "./patients/PatientSignUp";
import CompleteProfile from "./patients/CompleteProfile";
import PatientProfile from "./patients/PatientProfile";

//Staff
import AllStaff from "./staff/AllStaff";
import AddStaff from "./staff/AddStaff";
import EditStaff from "./staff/EditStaff";
import ViewStaff from "./staff/ViewStaff";
import AdminDesktop from "./staff/AdminDesktop";
import AdminSignIn from "./staff/AdminSignIn";

//Dentist
import SelectDentist from "./dentists/SelectDentist";
import { ProtectedRoute } from "./components/ProtectedRoute";

//React Router, here we define the routes and the paths
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          {/*layout. Do I need to add one for SideBar?  */}

          {/* pages */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/ourprices" element={<OurPrices />} />

          {/* user */}
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/allusers" element={<AllUsers />} />

          {/*appointment  */}
          <Route
            exact
            path="/viewavailableapts/:staff_id"
            element={<ViewAvailableAppointments />}
          />
          <Route
            exact
            path="/viewbookedapt"
            element={<ViewBookedAppointments />}
          />
          <Route exact path="/viewbyweek" element={<ViewByWeek />} />
          <Route
            exact
            path="/viewappointment/:id"
            element={<ViewAppointment />}
          />
          <Route
            exact
            path="/editappointment/:id"
            element={<EditAppointment />}
          />
          <Route
            exact
            path="/invoice_appointment/:id"
            element={<InvoiceAppointment />}
          />

          {/* patients */}
          <Route exact path="/allpatients" element={<AllPatients />} />
          <Route exact path="/viewpatient/:id" element={<ViewPatient />} />
          <Route exact path="/editpatient/:id" element={<EditPatient />} />
          <Route exact path="/addpatient" element={<AddPatient />} />
          <Route exact path="/patientsignin" element={<PatientSignIn />} />
          <Route exact path="/patientsignup" element={<PatientSignUp />} />
          <Route
            exact
            path="/completeprofile/:id"
            element={
              <ProtectedRoute>
                <CompleteProfile />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/patientprofile/:id"
            element={<PatientProfile />}
          />

          {/* staff */}
          <Route exact path="/allstaff" element={<AllStaff />} />
          <Route exact path="/viewstaff/:id" element={<ViewStaff />} />
          <Route exact path="/editstaff/:id" element={<EditStaff />} />
          <Route exact path="/addstaff" element={<AddStaff />} />
          <Route exact path="/admindesktop" element={<AdminDesktop />} />
          <Route exact path="/adminsignin" element={<AdminSignIn />} />

          {/* dentist */}
          <Route exact path="/selectdentist" element={<SelectDentist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
