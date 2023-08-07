import React from "react";

import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div className="home container-fluid flex-column">
      <div className="row">
        <div className="col">
          <h1 className="display-1">Sonrisa Dental Clinic </h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Carousel>
            <Carousel.Item>
              <img
                className="home-picture "
                src="/assets/images/HomePagePic.jpeg"
                width="600px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home-picture "
                src="https://www.revitalisedentalcentre.co.uk/wp-content/uploads/2020/05/Facebook_GeneralDentistry.jpg"
                width="600px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home-picture "
                src="https://dreamlanddental.com/wp-content/uploads/2018/01/iStock-510634014.jpg"
                width="600px"
              />
            </Carousel.Item>
          </Carousel>

          {/* <img
            className="home-picture "
            src="/assets/images/HomePagePic.jpeg"
            width="600px"
          /> */}
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <h2 className="mt-2">a reason to smile</h2>

      <Link className="btn btn-primary my-2 btn-lg" to={"/selectdentist"}>
        Book Now
      </Link>
    </div>
  );
}
