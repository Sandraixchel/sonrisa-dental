import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewAppointment() {
  const [appointment, setAppointment] = useState({
    date: "",
    end_time: "",
    start_time: "",
    type: "",
    patient: {}, //Because they come back as objects, thats why it needs to be an object space empty
    staff: {},
    cost: "",
    status: "",
    extra_items: [],
  });

  const { id } = useParams(); //The id of the appointment that we are currently viewing

  useEffect(() => {
    loadAppointment();
  }, []);

  const loadAppointment = async () => {
    const result = await axios.get(`http://localhost:8080/appointment/${id}`);
    setAppointment(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Appointment Details</h2>
          <div className="card">
            <div className="card-header">
              Details of Appointment ID: {appointment.id}
              <ul className="list-group list-group flush">
                <li className="list-group-item">
                  <b>Date:</b>

                  {appointment.date}
                </li>
                <li className="list-group-item">
                  <b>Start time:</b>
                  {appointment.start_time}
                </li>
                <li className="list-group-item">
                  <b>End time:</b>
                  {appointment.end_time}
                </li>
                <li className="list-group-item">
                  <b>Type:</b>
                  {appointment.type}
                </li>
                <li className="list-group-item">
                  <b>Patient ID:</b>
                  {appointment.patient.id}
                </li>
                <li className="list-group-item">
                  <b>Dentist ID:</b>
                  {appointment.staff.id}
                </li>
                <li className="list-group-item">
                  <b>Cost:</b>
                  {appointment.cost}
                </li>
                <li className="list-group-item">
                  <b>Status:</b>
                  {appointment.status}
                </li>
                <li className="list-group-item">
                  <b>Extra Items:</b>
                  {appointment.extra_items.length}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/viewbookedapt"}>
            Back to all appointments
          </Link>
        </div>
      </div>
    </div>
  );
}
