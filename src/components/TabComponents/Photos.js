import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import MUIGallery from './MUIGallery';



function Photos() {

  return (
    <div>
      <Container className='my-3 '>
        <Carousel data-bs-theme="light">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../assets/haryana0.jpg')}
              alt="First slide"
              style={{ height: '400px', width: '300px' }}
            />
            <Carousel.Caption>
              <h5>OUR TEAM</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../assets/haryana1.jpg')}
              alt="Second slide"
              style={{ height: '400px', width: '300px' }}
            />
            <Carousel.Caption>
              <h5>BATTING</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../assets/haryana2.jpg')}
              alt="Third slide"
              style={{ height: '400px', width: '300px' }}
            />
            <Carousel.Caption>
              <h5>BOWLING</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Responsive Image Gallery: */}
        {/* MUI Code: */}
        <MUIGallery />
    
      </Container>
      {/* <Footer /> */}
    </div>
  )
}


export default Photos