import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
// import {
//   Scheduler,
//   WeekView,
//   Appointments,
// } from "@devexpress/dx-react-scheduler-material-ui";
import { Link } from "react-router-dom";
import axios from "axios";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PrintIcon from "@mui/icons-material/Print";
import Button from "@mui/material/Button";

//import appointments from "../demo-data/today-appointments";

export default function ViewByWeek() {
  const [appointments, setAppointments] = useState([]); //Sets the variable appointments the vaue of the arraylist sent by the backend

  const [appointmentsData, setAppointmentsData] = useState([]);

  const [dentists, setDentists] = useState([]); //varriable to store dentist Array List

  const [selectedDentistID, setSelectedDentistID] = React.useState(-1); // We are setting the default value for "All dentists"

  const handleChange = (event) => {
    setSelectedDentistID(event.target.value);
  };
  useEffect(() => {
    loadDentists();
  }, []);

  const loadDentists = async () => {
    const result = await axios.get("http://localhost:8080/alldentists");
    setDentists(result.data);
  };

  useEffect(() => {
    generateAppointmentsData();
  }, [appointments, selectedDentistID]); //Run it anytime "appointments" changes OR selectedDentist ID changes

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

  //no need to add async because it is not doing any network request
  const generateAppointmentsData = () => {
    //Varible to store the filtered Appoinmnets Array List
    let filteredAppointments;

    //If the selected Dentist ID is equal to -1, it means that we want to see data from all dentists
    if (selectedDentistID === -1) {
      filteredAppointments = appointments; // Thats is why we assign all appointments value to filtered Appointments
    } else {
      filteredAppointments = appointments.filter(
        //Filtering through the appointments array list one by one, comparing the selected dentist ID with the staff ID stored in the curret appointment
        (appointment) => selectedDentistID === appointment.staff?.id //If staff is null it wont try o call ID on it
      );
    }

    const convertedData = filteredAppointments.map((appointment) => {
      //converting Appoinmnet data from String to Date objects
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
      <div className="calendarButtons">
        <Link className="btn btn-outline-primary mx-2" to={"/viewbookedapt"}>
          Back to all appointments
        </Link>
        <Button
          onClick={() => {
            window.print();
          }}
          variant="outlined"
          startIcon={<PrintIcon color="action" />}
        >
          Print
        </Button>
        <InputLabel id="demo-simple-select-label">Dentists</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedDentistID}
          label="Dentist"
          onChange={handleChange}
        >
          {/* //Default value for All dentists */}
          <MenuItem value={-1}>All Dentists</MenuItem>
          {dentists.map((dentist) => (
            <MenuItem value={dentist.id}>
              {dentist.first_name} {dentist.last_name}
            </MenuItem>
          ))}
        </Select>
      </div>

      <Paper>
        <Scheduler data={appointmentsData} height={"auto"}>
          <ViewState defaultCurrentViewName="Week" />
          <DayView startDayHour={7} endDayHour={18} />
          <WeekView startDayHour={7} endDayHour={18} />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />

          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}
