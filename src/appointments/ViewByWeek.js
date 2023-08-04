import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Link } from "react-router-dom";

import appointments from "../demo-data/today-appointments";

export default function ViewByWeek() {
  return (
    <div className="calendar">
      <Link className="btn btn-outline-primary mx-2" to={"/viewbookedapt"}>
        Back to all appointments
      </Link>
      <Paper>
        <Scheduler data={appointments} height={660}>
          <WeekView startDayHour={7} endDayHour={18} />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}
