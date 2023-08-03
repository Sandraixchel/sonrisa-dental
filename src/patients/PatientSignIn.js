import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    const result = await axios.post(
      "http://localhost:8080/patientsignin",
      patient
    ); //To POST info into the data base by using axios
    navigate(`/completeprofile/${result.data.id}`); //To redirect to complete patient's profile page by using the id given by the back end
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
                type={"text"}
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
                type={"text"}
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
            <Link className="btn btn-outline-danger mx-2" to="/allpatients">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
