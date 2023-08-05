import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Link } from "react-router-dom";
import axios from "axios";

//import appointments from "../demo-data/today-appointments";

export default function ViewByWeek() {
  const [appointments, setAppointments] = useState([]); //Sets the variable appointments the vaue of the arraylist sent by the backend

  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    generateAppointmentsData();
  }, [appointments]); //Run it anytime "appointments" changes

  useEffect(() => {
    //When the component first renders, the loadAppoinments function is triggered
    loadAppointments();
  }, []); //Just run it once when the components runs = []

  const loadAppointments = async () => {
    //async funtions wait for something to happen, in this casethe get request (has to have await)
    //Funtion to loaad all the appointments
    const result = await axios.get("http://localhost:8080/appointments");
    setAppointments(result.data);
  };

  const generateAppointmentsData = () => {
    //no need to add async because it is not doing any network request
    const convertedData = appointments.map((appointment) => {
      const startDate = new Date(
        `${appointment.date}T${appointment.start_time}+01:00`
      );
      const endDate = new Date(
        `${appointment.date}T${appointment.end_time}+01:00`
      );

      return {
        title: appointment.type,
        startDate: startDate,
        endDate: endDate,
        id: appointment.id,
      };
    });

    setAppointmentsData(convertedData); // sets the value of appointmentsData to our converted Appointment (the whole ArrayList)
  };

  return (
    <div className="calendar">
      <Link className="btn btn-outline-primary mx-2" to={"/viewbookedapt"}>
        Back to all appointments
      </Link>
      <Paper>
        <Scheduler data={appointmentsData} height={660}>
          <WeekView startDayHour={7} endDayHour={18} />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}
