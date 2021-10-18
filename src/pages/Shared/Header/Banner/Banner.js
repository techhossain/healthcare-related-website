import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://techhossain.github.io/api/banner-4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-light">Welcome to GYM Zone</h3>
          <p className="text-light">One of the largest Gym and Health Fitness Center of Bangladesh.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://techhossain.github.io/api/banner-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-light">All progress takes place outside the comfort zone.</h3>
          <p className="text-light">Success usually comes to those who are too busy to be looking for it.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://techhossain.github.io/api/banner-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-light">Well done is better than well said.</h3>
          <p className="text-light">The last three or four reps is what makes the muscle grow. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;