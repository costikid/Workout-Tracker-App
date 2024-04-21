import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="welcome-message">
      <h1>Welcome to Workout Hub</h1>
      <p>Your personal guide to fitness and workouts.</p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path-to-your-image.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Some representative placeholder content for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;