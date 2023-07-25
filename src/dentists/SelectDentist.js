import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SelectDentist extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div>Select Your Dentist</div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Fabi Marcelo</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <Link class="btn btn-primary" to="/viewavailableapts/1">
                  Select Date
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Cindy Flores</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link class="btn btn-primary" to="/viewavailableapts/2">
                  Select Date
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Isabel Calles</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link class="btn btn-primary" to="/viewavailableapts/3">
                  Select Date
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
