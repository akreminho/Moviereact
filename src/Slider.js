import React from 'react';
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './avatar1.jpg';
import img2 from './avatar2.jpg';
import img3 from './avatar3.jpg';
// import slider using bootstrap template
function Slider() {
  return (
    <div className='slides'>
    <Carousel>
      <Carousel.Item>
        <img 
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  )
}

export default Slider
