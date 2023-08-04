import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PatientProfile() {
  const [patient, setPatient] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    phone_number: "",
    email: "",
    insurance_provider: "",
    insurance_number: "",
  });

  const { id } = useParams(); //The id of the patient that we are currently viewing

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    const result = await axios.get(`http://localhost:8080/patient/${id}`);
    setPatient(result.data);
  };

  return (
    <div className="container">
      <Link className="btn btn-primary my-2" to={"/selectdentist"}>
        Book Appointment
      </Link>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Patient Profile</h2>
          <div className="card">
            <div className="card-header">
              Details of patient ID: {patient.id}
              <ul className="list-group list-group flush">
                <li className="list-group-item">
                  <b>Name:</b>

                  {patient.first_name}
                </li>
                <li className="list-group-item">
                  <b>Surname:</b>
                  {patient.last_name}
                </li>
                <li className="list-group-item">
                  <b>DOB:</b>
                  {patient.dob}
                </li>
                <li className="list-group-item">
                  <b>phone_number:</b>
                  {patient.phone_number}
                </li>
                <li className="list-group-item">
                  <b>email address:</b>
                  {patient.email}
                </li>
                <li className="list-group-item">
                  <b>Insurance Provider:</b>
                  {patient.insurance_provider}
                </li>
                <li className="list-group-item">
                  <b>Insurance Number:</b>
                  {patient.insurance_number}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={`/editpatient/${id}`}>
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
