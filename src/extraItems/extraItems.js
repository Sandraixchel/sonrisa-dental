import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ExtraItems({ appointmentID }) {
  const [extra_items, setExtraItems] = useState([]); //variable to store extra items values

  useEffect(() => {
    if (appointmentID) {
      loadExtraItems();
    }
  }, [appointmentID]);

  const loadExtraItems = async () => {
    const result = await axios.get(
      `http://localhost:8080/appointment/${appointmentID}/extra_items`
    );
    setExtraItems(result.data);
  };

  const deleteExtraItem = async (id) => {
    await axios.delete(`http://localhost:8080/extra_items/${id}`);
    loadExtraItems();
  };

  return (
    <div>
      <div>Extra Items for appointment: {appointmentID}</div>

      {extra_items.map(
        (
          extra_item //Map to generate acard for each extra item present in the ArrayList inked to a particular appointment
        ) => (
          <div className="card">
            <ul className="list-group list-group flush">
              <li className="list-group-item">
                <b>Item ID: </b>

                {extra_item.id}
              </li>
              <li className="list-group-item">
                <b>Item Name: </b>

                {extra_item.item_name}
              </li>
              <li className="list-group-item">
                <b>Cost: </b>
                {extra_item.cost}
              </li>
            </ul>
            <button
              className="btn btn-danger mx-2"
              onClick={() => deleteExtraItem(extra_item.id)}
            >
              Delete
            </button>
          </div>
        )
      )}
    </div>
    //   {/* <Link className="btn btn-primary my-2" to={"/allpatients"}>
    //         Back to All patients
    //       </Link> */}
  );
}
