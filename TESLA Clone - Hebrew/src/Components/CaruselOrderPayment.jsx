import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CaruselOrderPayment({ orderCurrent }) {
  return (
    <div>
      <Carousel variant="dark" interval={null} indicators={null}>
        <Carousel.Item>
          <img className="d-block w-100" src={orderCurrent.imgBackOrd} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={orderCurrent.imgFrontOrd} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={orderCurrent.imgSideOrd} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
