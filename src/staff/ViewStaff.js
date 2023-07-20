import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewStaff() {
  const [staff, setStaff] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    role: "",
    working_days: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = async () => {
    const result = await axios.get(`http://localhost:8080/staff/${id}`);
    setStaff(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Staff Details</h2>
          <div className="card">
            <div className="card-header">
              Details of staff ID: {staff.id}
              <ul className="list-group list-group flush">
                <li className="list-group-item">
                  <b>Name:</b>

                  {staff.first_name}
                </li>
                <li className="list-group-item">
                  <b>Surname:</b>
                  {staff.last_name}
                </li>

                <li className="list-group-item">
                  <b>Phone Number:</b>
                  {staff.phone_number}
                </li>
                <li className="list-group-item">
                  <b>Email address:</b>
                  {staff.email}
                </li>
                <li className="list-group-item">
                  <b>Role: </b>
                  {staff.role}
                </li>
                <li className="list-group-item">
                  <b>Working Days:</b>
                  {staff.working_days}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/allstaff"}>
            Back to All Staff
          </Link>
        </div>
      </div>
    </div>
  );
}
