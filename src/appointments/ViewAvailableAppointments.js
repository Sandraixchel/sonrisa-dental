import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ViewAvailableAppointments() {
  const [appointments, setAppointment] = useState([]);
  const [selectedAppointmentType, setSelectedAppoinmentType] =
    useState("CLEANING"); // Declare new variable to store what is currently selecting on the drop down
  // ...
  const [selected_date, onChange] = useState(new Date());

  const { staff_id } = useParams(); //Information/properties that are passed in to the component from another component

  const [selected_slot, setSelectedSlot] = useState(); // Declare a variable to store value for selected slot time

  //Run the function when the component loads
  useEffect(() => {
    loadAppointment(); //It reloads the appoinmnets whenever the variabe in the array changes, in this case selectedAppointmentType
  }, [selectedAppointmentType, selected_date]);

  //it creates an async funtion sending get requests to the Spring server
  const loadAppointment = async () => {
    const offset = selected_date.getTimezoneOffset();
    let formatted_date = new Date(selected_date.getTime() - offset * 60 * 1000);
    formatted_date = formatted_date.toISOString().split("T")[0];

    const result = await axios.get(
      `http://localhost:8080/available-appointments?date=${formatted_date}&type=${selectedAppointmentType}&staff_id=${staff_id}` //itll send the back end whatever the current vlue of the drop down is and loads appoinments for that type
    );

    //const result = await axios.get(`http://localhost:8080/user/${id}`);

    console.log(result);

    setAppointment(result.data[formatted_date]);
  };

  const bookAppointment = async () => {
    //Only if bookAppoinment function is clicked this function will get triggered

    const offset = selected_date.getTimezoneOffset();
    let formatted_date = new Date(selected_date.getTime() - offset * 60 * 1000);
    formatted_date = formatted_date.toISOString().split("T")[0];

    const appointmentBody = {
      type: selectedAppointmentType,
      date: formatted_date,
      start_time: selected_slot,
      patient_id: 102, // To do: replace with a variable
      staff_id: staff_id,
    };
    const result = await axios.post(
      "http://localhost:8080/appointment",
      appointmentBody
    );
  };

  return (
    <div className="container">
      <div className="py-4 row">
        <div className="col">
          <h1>Select Your Date</h1>
          <Calendar
            tileDisabled={({ date }) =>
              date.getDay() === 0 ||
              date.getDay() === 6 ||
              date < new Date().setHours(0, 0, 0, 0)
            }
            onChange={onChange}
            value={selected_date}
          />
        </div>
        <div className="col">
          <select
            value={selectedAppointmentType} // ...force the select's value to match the state variable...
            onChange={(e) => setSelectedAppoinmentType(e.target.value)} // ... and update the state variable on any change!
          >
            <option value="CLEANING">Cleaning</option>
            <option value="EXAM">Exam</option>
            <option value="EMERGENCY">Emergency</option>
            <option value="FILLING">Filling</option>
            <option value="EXTRACTION">Extraction</option>
            <option value="VENEERS">Veneers</option>
            <option value="CROWN">Crown</option>
          </select>

          {selectedAppointmentType}

          <div className="row">
            {appointments.map(
              (
                appointment //Display all available appoinments for the selected date/tye/staff_id
              ) => (
                <button
                  type="button"
                  className={`btn ${
                    appointment === selected_slot
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={(e) => setSelectedSlot(appointment)} //Create a function to set the value of the selected slot when the button is clicked in one of the slots
                >
                  {appointment}
                </button>
              )
            )}
          </div>
          <div>
            {selected_slot ? ( //ternary condition to only show the "Book Appointment" button if selected_slot has been given a value
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => bookAppointment()}
              >
                Book Appointment
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
