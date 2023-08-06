import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PrintIcon from "@mui/icons-material/Print";
import Button from "@mui/material/Button";

export default function InvoiceAppointment() {
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

  const [totalCost, setTotalCost] = useState();

  useEffect(() => {
    const extra_item_cost = appointment.extra_items.reduce(
      (accumulator, extra_item) => accumulator + extra_item.cost,
      0
    ); //One number with the sum of all the cost from extra items in the appointment

    setTotalCost(appointment.cost + extra_item_cost); //Sums up the cost of the appointment plus total cost of extra items
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
      <Button
        className="print-button"
        onClick={() => {
          window.print();
        }}
        variant="outlined"
        startIcon={<PrintIcon color="action" />}
      >
        Print
      </Button>
      <div className="row">
        {/* <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"> */}
        <h2 className="text-center mt-4">Invoice</h2>
        <div>
          <div>
            <ul className="list-group list-group flush">
              <li className="list-group-item">
                <b>Patient: </b>
                {appointment.patient.first_name} {appointment.patient.last_name}
              </li>
              <li className="list-group-item">
                <b>Email address: </b>
                {appointment.patient.email}
              </li>
              <li className="list-group-item">
                <b>Date: </b>
                {appointment.date}
              </li>
              <li className="list-group-item">
                <b>Type: </b>
                {appointment.type}
              </li>
              <li className="list-group-item">
                Base Cost : {appointment.cost} €
                {appointment.extra_items.map((extra_item) => (
                  <div>
                    {extra_item.item_name} : {extra_item.cost} €
                  </div>
                ))}
                <br></br>
                <b>Total Cost: {totalCost} € </b>
              </li>
            </ul>
          </div>
        </div>
        <Link
          className="btn btn-primary my-2  back-button"
          to={"/viewbookedapt"}
        >
          Back to all appointments
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
}
