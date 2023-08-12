import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStaff() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [staff, setStaff] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    role: "",
    description: "",
  });

  const { first_name, last_name, phone_number, email, role, description } =
    staff;

  const onInputChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStaff();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/staff/${id}`, staff); //To POST info into the data base by using axios
    navigate("/allstaff"); //To redirect to all staff page
  };

  const loadStaff = async () => {
    const result = await axios.get(`http://localhost:8080/staff/${id}`);
    setStaff(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Staff</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter name"
                name="first_name"
                value={first_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Surname" className="form-label">
                Surname
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter surname"
                name="last_name"
                value={last_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone_number" className="form-label">
                Phone Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter phone number"
                name="phone_number"
                value={phone_number}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter email address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Role" className="form-label">
                Role
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter role"
                name="role"
                value={role}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/allstaff">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
