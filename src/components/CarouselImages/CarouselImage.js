import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselImage = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="/profile-images/profile_img.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="/profile-images/profile-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="/profile-images/profile-3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="/profile-images/profile-4.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImage;
