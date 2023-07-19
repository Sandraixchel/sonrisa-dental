import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function AllStaff() {
  const [staffs, setStaff] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = async () => {
    const result = await axios.get("http://localhost:8080/allstaff");
    setStaff(result.data);
  };
  //function to deleting the Staff

  const deleteStaff = async (id) => {
    await axios.delete(`http://localhost:8080/staff/${id}`);
    loadStaff();
  };

  function ButtonLink({ to, children }) {
    return (
      <Link to={to}>
        <button>{children}</button>
      </Link>
    );
  }

  // Usage

  // <a>
  //   <Link className="btn btn-outline-primary mx-2" to={"/"}>
  //     Add New Patient
  //   </Link>
  // </a>;
  return (
    <div className="container">
      <div className="py-4">
        <ButtonLink className="btn btn-outline-primary mx-2" to="/addstaff">
          Add New Staff
        </ButtonLink>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((staff) => (
              <tr>
                <th scope="row" key={staff.id}>
                  {staff.id}
                </th>
                <td>{staff.first_name}</td>
                <td>{staff.last_name}</td>
                <td>{staff.phone_number}</td>
                <td>{staff.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewpatient/${staff.id}`}
                  >
                    More Details
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editpatient/${staff.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteStaff(staff.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
