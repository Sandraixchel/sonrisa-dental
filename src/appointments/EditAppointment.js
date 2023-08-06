import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import ExtraItems from "../extraItems/extraItems";

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

  //Function to change the value in the appointment object that are stored as strings or numbers, it will repace it with the user input
  const onInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  //Function to change an specific value of n object (patietnt or Staff) and replace it with the user input
  const onPatientChange = (e) => {
    setAppointment({ ...appointment, patient: { id: Number(e.target.value) } });
  };

  //Function to change an specific value of n object (patietnt or Staff) and replace it with the user input
  const onStaffChange = (e) => {
    setAppointment({
      ...appointment,
      staff: { id: Number(e.target.value) },
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/appointment/${id}`, appointment); //To PUT info into the data base by using axios
    navigate(`/viewappointment/${appointment.id}`); //To redirect to all patients page
  };

  //Funtion to load the appointment into the browser
  const loadAppointment = async () => {
    const result = await axios.get(`http://localhost:8080/appointment/${id}`);
    setAppointment(result.data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-md-11 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4">Edit Appoinment</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Date
                  </label>
                  <input
                    type={"date"}
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
                  {/* <input
                type={"text"}
                className="form-control"
                placeholder="Enter type"
                name="type"
                value={type}
                onChange={(e) => onInputChange(e)}
              /> */}
                  <select
                    className="form-select"
                    name="type"
                    value={type} // ...force the select's value to match the state variable...
                    onChange={(e) => onInputChange(e)} // ... and update the state variable on any change!
                  >
                    <option value="CLEANING">Cleaning</option>
                    <option value="EXAM">Exam</option>
                    <option value="EMERGENCY">Emergency</option>
                    <option value="FILLING">Filling</option>
                    <option value="EXTRACTION">Extraction</option>
                    <option value="VENEERS">Veneers</option>
                    <option value="CROWN">Crown</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="patient.id" className="form-label">
                    Patient ID
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter patient_id"
                    name="patient"
                    value={patient.id}
                    onChange={(e) => onPatientChange(e)}
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
                    name="staff"
                    value={staff.id}
                    onChange={(e) => onStaffChange(e)}
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
                    name="cost"
                    value={cost}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="insurance_number" className="form-label">
                    Status
                  </label>
                  {/* <input
                type={"text"}
                className="form-control"
                placeholder="Enter Status"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              /> */}
                  <select
                    className="form-select"
                    name="status"
                    value={status} // ...force the select's value to match the state variable...
                    onChange={(e) => onInputChange(e)} // ... and update the state variable on any change!
                  >
                    <option value="BOOKED">Booked</option>
                    <option value="IN_TREATMENT">In treatment</option>
                    <option value="LAB_WORK_SENT">Lab work sent</option>
                    <option value="LAB_WORR_ARRIVED">Lab work arrived</option>
                    <option value="CANCELLED">Cancelled</option>
                    <option value="RESCHEDULED">Rescheduled</option>
                    <option value="PAID">Paid</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
                <Link
                  className="btn btn-outline-danger mx-2"
                  to="/viewbookedapt"
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="col-md-8 offset-md-3 border rounded p-4 mt-2 shadow">
              {/* rendering Extra Item component */}
              <ExtraItems appointmentID={appointment.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
