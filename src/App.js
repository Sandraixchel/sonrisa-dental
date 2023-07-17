import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import ViewAvailableAppointments from "./appointments/ViewAvailableAppointments"; // We need to import the file ViewAvailableAppointments
import PatientsHome from "./pages/PatientsHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />

          <Route exact path="/viewuser/:id" element={<ViewUser />} />

          <Route
            exact
            path="/viewavailableapts"
            element={<ViewAvailableAppointments />}
          />
          <Route exact path="/allpatients" element={<PatientsHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
