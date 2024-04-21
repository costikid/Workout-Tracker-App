import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';
import carousel1Img1 from '../images/carousel-1-img-1.jpg';
import carousel2Img1 from '../images/carousel-2-img-1.jpg';
import carousel3Img1 from '../images/carousel-3-img-1.jpg';

//an array of objects - each object contains data for each carousel
const carouselsData = [
  {
    id: 1,
    items: [
      {
        imgSrc: carousel1Img1,
        captionTitle: 'Lets go!!',
      },
    ]
  },
  {
    id: 2,
    items: [
      {
        imgSrc: carousel2Img1,
        captionTitle: 'Take the step!!',
      },
    ]
  },
  {
    id: 3,
    items: [
      {
        imgSrc: carousel3Img1,
        captionTitle: 'Are you ready!!',
      },
    ]
  }
];

const Home = () => {
  return (
    <div className="welcome-message">
      <h1>Welcome to Workout Hub</h1>
      <p>Your personal guide to fitness and workouts.</p>
      <div className="carousels-container">
        {carouselsData.map((carouselData) => (
          <div key={carouselData.id} className="individual-carousel-container">
            <Carousel>
              {carouselData.items.map((item, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100 carousel-img"
                    src={item.imgSrc}
                    alt={`Slide ${carouselData.id}-${idx + 1}`}
                  />
                  <Carousel.Caption>
                    <h3>{item.captionTitle}</h3>
                    <p>{item.captionDescription}</p> 
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;