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
    console.log(result);

    setAppointment(result.data["2023-07-23"]);
  };

  return (
    <div className="container">
      <div className="py-4">
        {appointments.map((appointment) => (
          <div>{appointment}</div>
        ))}
      </div>
    </div>
  );
}
