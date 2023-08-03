import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  //function to deleting the user

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="home">
      <h1>Sonrisa Dental Clinic </h1>

      <h2>
        <br />a reason to smile
      </h2>
      <img src="/assets/images/HomePagePic.jpeg" width="100px" />
      <Link className="btn btn-primary my-2" to={"/selectdentist"}>
        Book Now
      </Link>
    </div>
  );
}
