import React, { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewAvailableAppointments() {
  const [appointments, setAppointment] = useState([]);

  //const { id } = useParams();

  useEffect(() => {
    loadAppointment();
  }, []);

  const loadAppointment = async () => {
    const result = await axios.get(
      "http://localhost:8080/available-appointments?date=2023-07-23&type=EMERGENCY"
    );

    //const result = await axios.get(`http://localhost:8080/user/${id}`);
    setAppointment(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Starting Time</th>
              <th scope="col">Ending Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{appointment.type}</td>
                <td>{appointment.date}</td>
                <td>{appointment.start_time}</td>
                <td>{appointment.end_time}</td>
                {/* <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
