import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewPatientAppointments() {
  const [appointments, setAppointments] = useState([]); //Sets the variable appointments the vaue of the arraylist sent by the backend

  const { patient_id } = useParams();

  useEffect(() => {
    //When the component first renders, he loadAppoinments function is triggered
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    //Funtion to loaad all the appointments
    const result = await axios.get(
      `http://localhost:8080/appointment_patient/${patient_id}`
    );
    setAppointments(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Type</th>
              <th scope="col">Cost</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>

              <th scope="col">Patient ID</th>
              <th scope="col">Dentist</th>
              <th scope="col">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr>
                <th scope="row" key={appointment.id}>
                  {appointment.id}
                </th>
                <td>{appointment.type}</td>
                <td>{appointment.cost} €</td>
                <td>{appointment.status}</td>
                <td>{appointment.date}</td>
                <td>
                  {appointment.start_time}-{appointment.end_time}
                </td>

                <td>{appointment.patient?.id}</td>
                <td>
                  {appointment.staff?.first_name} {appointment.staff?.last_name}
                </td>
                <td>
                  {/* <Link
                    className="btn btn-primary btn-sm mx-2"
                    to={`/viewappointment/${appointment.id}`}
                  >
                    Details
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm mx-2"
                    to={`/editappointment/${appointment.id}`}
                  >
                    Edit
                  </Link> */}
                  <Link
                    className="btn btn-warning btn-sm mx-2"
                    to={`/view_invoice/${appointment.id}`}
                  >
                    Invoice
                  </Link>
                  {/* <button
                    className="btn btn-danger btn-sm mx-2"
                    onClick={() => deleteAppointment(appointment.id)}
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
