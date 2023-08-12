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

  //   function ButtonLink({ to, children }) {
  //     return (
  //       <Link to={to}>
  //         <button>{children}</button>
  //       </Link>
  //     );
  //   }

  // Usage

  return (
    <div className="container">
      <div className="py-4">
        {/* <ButtonLink className="btn btn-outline-primary mx-2" to="/addstaff">
          Add New Staff
        </ButtonLink> */}
        <a>
          <Link
            className="btn btn-outline-primary btn-lg mx-2"
            to={"/addstaff"}
          >
            Add New Staff
          </Link>
        </a>

        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Role</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((staff) => (
              <tr>
                <th scope="row" key={staff.id}>
                  {staff.id}
                </th>
                <td>{staff.role}</td>
                <td>{staff.first_name}</td>
                <td>{staff.last_name}</td>
                <td>{staff.phone_number}</td>
                <td>{staff.email}</td>
                <td>{staff.description}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewstaff/${staff.id}`}
                  >
                    More Details
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editstaff/${staff.id}`}
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
