import React, { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewAvailableAppointments() {
  const [appointments, setAppointment] = useState([]);
  const [selectedAppointmentType, setSelectedAppoinmentType] =
    useState("CLEANING"); // Declare new variable to store what is currently selecting on the drop down
  // ...

  //const { id } = useParams();

  //Run the function when the component loads
  useEffect(() => {
    loadAppointment(); //It reloads the appoinmnets whenever the variabe in the array changes, in this case selectedAppointmentType
  }, [selectedAppointmentType]);

  //it creates an async funtion sending get requests to the Spring server
  const loadAppointment = async () => {
    const result = await axios.get(
      `http://localhost:8080/available-appointments?date=2023-07-19&type=${selectedAppointmentType}` //itll send the back end whatever the current vlue of the drop down is and loads appoinments for that type
    );

    //const result = await axios.get(`http://localhost:8080/user/${id}`);

    console.log(result);

    setAppointment(result.data["2023-07-19"]);
  };

  return (
    <div className="container">
      <div className="py-4">
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

        {appointments.map((appointment) => (
          <div>{appointment}</div>
        ))}
      </div>
    </div>
  );
}
