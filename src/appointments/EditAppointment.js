import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAppointment() {
  let navigate = useNavigate();

  const { id } = useParams();

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

  const {
    date,
    end_time,
    start_time,
    type,
    patient,
    staff,
    cost,
    status,
    extra_items,
  } = appointment;

  useEffect(() => {
    loadAppointment();
  }, []);

  const onInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/appointment/${id}`, appointment); //To PUT info into the data base by using axios
    navigate(`/viewappointment/${appointment.id}`); //To redirect to all patients page
  };

  const loadAppointment = async () => {
    const result = await axios.get(`http://localhost:8080/appointment/${id}`);
    setAppointment(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Appoinment</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="enter appointment date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Start_time" className="form-label">
                Start time
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter start time"
                name="start_time"
                value={start_time}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                End time
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter end time"
                name="end_time"
                value={end_time}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Type
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter type"
                name="type"
                value={type}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Patient ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter patient_id"
                name="patient_id"
                value={patient.id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="insurance_provider" className="form-label">
                Staff ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Staff id"
                name="staff_id"
                value={staff.id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="insurance_number" className="form-label">
                Cost
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Insurance Number"
                name="insurance_number"
                value={cost}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="insurance_number" className="form-label">
                Status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Status"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="insurance_number" className="form-label">
                Extra Items
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Extra Items"
                name="insurance_number"
                value={extra_items}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/viewbookedapt">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
