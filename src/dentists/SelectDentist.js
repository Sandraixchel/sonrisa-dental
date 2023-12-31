import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SelectDentist() {
  const [dentists, setDentists] = useState([]); //varriable to store dentist Array List

  useEffect(() => {
    loadDentists();
  }, []);

  const loadDentists = async () => {
    const result = await axios.get("http://localhost:8080/alldentists");
    setDentists(result.data);
  };

  return (
    <div className="container text-center">
      <h1>Select Your Dentist</h1>
      <br />
      <div className="row">
        {dentists.map((dentist) => (
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h3 class="card-title">
                  {dentist.first_name} {dentist.last_name}
                </h3>
                <p class="card-text">{dentist.description}</p>

                <Link
                  class="btn btn-primary"
                  to={`/viewavailableapts/${dentist.id}`}
                >
                  Select Date
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
