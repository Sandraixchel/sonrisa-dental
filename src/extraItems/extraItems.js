import React, { useState, useEffect } from "react";
//import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EXTRA_ITEMS_COST = {
  "Curaprox Adult": 5.49,
  "Curaprox Child": 5.49,
  "Satin Floss": 4.99,
  SuperFloss: 5.49,
  "iWave-Pink": 6.49,
  "iWave-Blue": 6.49,
  "iWave-Green": 6.49,
  "iWave-Orange": 6.49,
  "iWave-Red": 6.49,
  "iWave-Yellow": 6.49,
  "Tounge Scraper": 7.49,
  "Interproximal Brush": 4.59,
  "Tooth Paste Flouride": 7.59,
  "Tooth Paste Chlorhexidine": 9.59,
  "Curasept 200": 10.49,
  "Curasept 220": 11.49,
  "Curasept 250": 11.89,
  "Curasept 250": 11.89,
  "Fluoride Mouthwash": 7.59,
  "Whitening 8%": 25.99,
  "Whitening 10%": 29.99,
  "Whitening 16%": 33.99,
  "Whitening Trays (Pair)": 150.9,
  "Whitening Tray (Single)": 80,
  "Whitening Relief": 11.99,
  "Electric Flosser": 84.8,
  "Electric Toothbrush": 123.9,
  "YOTUEL (5g)": 24.99,
  "XEROSTOM Dental Gum": 3.59,
  OPG: 50.0,
  "Small Xray": 25.9,
  "BiteWings (2 Small Xrays)": 50.9,
};

export default function ExtraItems({ appointmentID }) {
  const [extra_items, setExtraItems] = useState([]); //variable to store extra items values

  const [extra_item, setExtraItem] = useState({
    appointment: { id: appointmentID },
    item_name: "",
    cost: "",
  });

  const { item_name, cost } = extra_item;

  const onInputChange = (e) => {
    setExtraItem({ ...extra_item, [e.target.name]: e.target.value });
  };

  const onNameChange = (e) => {
    setExtraItem({
      ...extra_item,
      ...{
        item_name: e.target.value,
        cost: EXTRA_ITEMS_COST[e.target.value] || "",
        appointment: { id: appointmentID },
      },
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/add_extra_items", extra_item); //To POST info into the data base by using axios
    loadExtraItems(); //Reload the extra items once a new one is created
    setExtraItem({
      appointment: { id: appointmentID },
      item_name: "",
      cost: "",
    });
  };

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

      <br></br>
      <div>
        <h5 className="text-center m-4">Add New Extra Item</h5>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Item Name" className="form-label">
              Item Name
            </label>
            <select
              className="form-control"
              placeholder="Enter item name"
              name="item_name"
              value={extra_item.item_name}
              onChange={(e) => onNameChange(e)}
            >
              <option value="">--Select Item--</option>
              {Object.keys(EXTRA_ITEMS_COST).map(
                (
                  item_name //Automatically populates the item name option with the EXTRA ITEMS Name Array
                ) => (
                  <option value={item_name}>{item_name}</option>
                )
              )}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Item Cost" className="form-label">
              Cost
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter item cost"
              name="cost"
              value={cost}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    </div>

    //   {/* <Link className="btn btn-primary my-2" to={"/allpatients"}>
    //         Back to All patients
    //       </Link> */}
  );
}
