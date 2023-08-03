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
        <br />
        <Link to="/allusers">a reason to smile</Link>
      </h2>
      <img src="/Users/Sandy/Desktop/sonrisa-dental/src/HomePagePic.jpeg" />
    </div>
  );
}
