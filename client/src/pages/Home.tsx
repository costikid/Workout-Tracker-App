import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import './Home.css'
import img1 from '../images/carousel-1-img-1.jpg';
import img2 from '../images/carousel-2-img-1.jpg';
import img3 from '../images/carousel-3-img-1.jpg';

interface CarouselsData{
    id: Number,
    imgSrc: String,
    captionTitle: String,
    link: String,
}
const carouselsData = [
  {
    id: 1,
    imgSrc: img1,
    captionTitle: 'Elevate Your Fitness Game',
    link: '#',
  },
  {
    id: 2,
    imgSrc: img2,
    captionTitle: 'Set Your Goals',
    link: '/goals',

  },
  {
    id: 3,
    imgSrc: img3,
    captionTitle: 'Join Our Community',
    link: '#',

  }
];

const quotes = [
  "'Take care of your body. It's the only place you have to live.' – Jim Rohn",
  "'If you don’t find the time, if you don’t do the work, you don’t get the results.' - Arnold Schwarzenegger",
  "'The hardest lift of all is lifting your butt off the couch.' – Arnold Schwarzenegger",
  "'Once you are exercising regularly, the hardest thing is to stop it.' – Erin Gray",
  "'You miss one hundred percent of the shots you don’t take.' – Wayne Gretzky"
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const Home = () => {
  return (
  <div>
    <div className="welcome-message">
      <h1>Welcome to Workout Hub</h1>
      <p>Your personal guide to fitness and workouts.</p>
      <div className="image-grid-container">
        {carouselsData.map((item) => (
          <div key={item.id} className="individual-image-container">
            <img
              className="d-block w-100"
              src={item.imgSrc}
              alt={`Image ${item.id}`}
            />
            <div className="image-caption">
              <Link to={item.link} className='main-Link'>
                {item.captionTitle}
              </Link>
              
            </div>
          </div>
        ))}
      </div>
      <div className="quote-container">
        <p>"{getRandomQuote()}"</p>
      </div>
    </div>

  </div>
  );

};

export default Home;