import React, { Component } from "react";

export default class SelectDentist extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div>Select Dentist</div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Dentist 1</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Dentist 2</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Dentist 3</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
