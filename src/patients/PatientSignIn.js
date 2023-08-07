import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function PatientSignIn() {
  let navigate = useNavigate();

  const [patient, setPatient] = useState({
    email: "",
    password: "",
  });

  const { email, password } = patient;

  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    //if the user enter an incorrect email or password, the bowser will show an alert and allow the user to re enter them again
    try {
      const result = await axios.post(
        "http://localhost:8080/patientsignin",
        patient
      ); //To POST info into the data base by using axios

      localStorage.setItem("patient", JSON.stringify(result.data)); //to local store the patient object
      navigate(`/patientprofile/${result.data.id}`); //To redirect to patient's profile page by using the id given by the back end
      window.location.reload();
    } catch (error) {
      Swal.fire({
        title: "Incorrect Email or Password",
        icon: "warning",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#4890fd",
      });
    }
  };

  return (
    <div className="container">
      <img src="/assets/images/SonrisaDentalLogo.png" />
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Patient Sign In</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type={"password"} //It doesnt remember past inputs and shows dots when youre typing
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
            <hr />
            <div>Don't have an account?</div>
            <Link underline="always" to="/patientsignup">
              Create one now
            </Link>
          </form>
        </div>
      </div>
      <script src="sweetalert2.all.min.js"></script>
    </div>
  );
}
