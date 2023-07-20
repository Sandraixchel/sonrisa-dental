import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddPatient() {
  let navigate = useNavigate();

  const [patient, setPatient] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    phone_number: "",
    email: "",
    insurance_provider: "",
    insurance_number: "",
  });

  const {
    first_name,
    last_name,
    dob,
    phone_number,
    email,
    insurance_provider,
    insurance_number,
  } = patient;

  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/patient", patient); //To POST info into the data base by using axios
    navigate("/allpatients"); //To redirect to home page
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Patient</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter patient name"
                name="first_name"
                value={first_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Surname" className="form-label">
                Surname
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter surname"
                name="last_name"
                value={last_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter date of birth"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">
                Phone Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter phone number"
                name="phone_number"
                value={phone_number}
                onChange={(e) => onInputChange(e)}
              />
            </div>
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
              <label htmlFor="insurance_provider" className="form-label">
                Insurance Provider
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Insurance Provider"
                name="insurance_provider"
                value={insurance_provider}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="insurance_number" className="form-label">
                Insurance Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Insurance Number"
                name="insurance_number"
                value={insurance_number}
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
