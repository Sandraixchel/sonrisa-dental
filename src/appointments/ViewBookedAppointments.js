import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewBookedAppointments() {
  const [appointments, setAppointments] = useState([]); //Sets the variable appointments the vaue of the arraylist sent by the backend

  const { id } = useParams();

  useEffect(() => {
    //When the component first renders, he loadAppoinments function is triggered
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    //Funtion to loaad all the appointments
    const result = await axios.get("http://localhost:8080/appointments");
    setAppointments(result.data);
  };
  //function to deleting the patient

  //  const deletePatient = async (id) => {
  //    await axios.delete(`http://localhost:8080/patient/${id}`);
  //    loadPatients();
  //  };

  return (
    <div className="container">
      <div className="py-4">
        <a>
          <Link className="btn btn-outline-primary mx-2" to={"/addpatient"}>
            View By Date
          </Link>
          <Link className="btn btn-outline-primary mx-2" to={"/viewbyweek"}>
            View By Week
          </Link>
          <Link className="btn btn-outline-primary mx-2" to={"/addpatient"}>
            View By Dentist
          </Link>
        </a>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col">Patient ID</th>
              <th scope="col">Staff ID</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr>
                <th scope="row" key={appointment.id}>
                  {appointment.id}
                </th>
                <td>{appointment.type}</td>
                <td>{appointment.date}</td>
                <td>{appointment.start_time}</td>
                <td>{appointment.end_time}</td>
                <td>{appointment.patient?.id}</td>
                <td>{appointment.staff?.id}</td>
                <td>
                  {/* <Link
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
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
