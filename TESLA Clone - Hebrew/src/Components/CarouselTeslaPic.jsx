import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselTeslaPic({ YourDesgin }) {
  return (
    <div>
      <Carousel variant="dark" interval={null} indicators={null}>
        <Carousel.Item>
          <img className="d-block w-100" src={YourDesgin.imgFront} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={YourDesgin.imgBack} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={YourDesgin.imgSide} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
