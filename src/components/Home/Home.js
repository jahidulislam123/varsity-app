import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Home.css"
const Home = () => {
    return (
        <div>
            <h2>hi this is home page </h2>
            <div>
       <Carousel>
       <Carousel.Item interval={1000}>
    <img
      className="d-block container  rounded w-100"
      src="./images/img1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block container w-100"
      src="./images/img2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block container w-100"
      src="./images/img3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div>
    <h3>Video fro plantaion</h3>
</div>
        </div>
    );
};

export default Home;