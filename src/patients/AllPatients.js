import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function PatientsHome() {
  const [patients, setPatients] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios.get("http://localhost:8080/patients");
    setPatients(result.data);
  };
  //function to deleting the patient

  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:8080/patient/${id}`);
    loadPatients();
  };

  // <body>
  //   <div>
  //     <h1>
  //       <Link className="btn btn-outline-primary mx-2" to={"/"}>
  //         Add New Patient
  //       </Link>
  //     </h1>
  //   </div>
  // </body>;
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{patient.first_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.phone_number}</td>
                <td>{patient.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewpatient/${patient.id}`}
                  >
                    More Details
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editpatient/${patient.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePatient(patient.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
