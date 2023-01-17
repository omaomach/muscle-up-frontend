import React from 'react'
import About from './About'
import Trainers from './Trainers';
import Services from './Services'
import Testimonials from './Testimonials'
import { Carousel } from 'react-carousel-minimal';
import "./styles.css";
import NavBar from './NavBar';

function Home() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      caption: "Being weak is nothing</br> to be ashamed of</br> staying weak is"

    },
    {
      image:"https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption: "Life is a carousel. It goes up and</br> down. All U gotta do</br> is just stay on"

    },
    {
      image: "https://images.unsplash.com/photo-1651840403916-d1e0515b32c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption: "Strive for progress,</br> not perfection"

    },
    {
      image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption: "Life is all about ups and</br>downs, we call it squats"

    },



  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    // paddingBottom: '35vh',
    // paddingRight:'60%',
    // justifyContent:'centre',
    // display: 'flex',
    // paddingLeft: '15%',
    zIndex: '1',
    letterSpacing: '2px',
    
  

  }
 
  return (
    <div >
      <NavBar />
      <div className="carousel">

        <Carousel
          data={data}
          time={3000}
          width="100%"
          height="80vh"
          captionStyle={captionStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"

          // style={{
          //   textAlign: "center",
          //   // width: "1000px",
          //   // maxHeight: "500px",
          //   borderRadius: "12px"
          // }}
        />

      </div><br/><br/><br/><br/><br/>
      <div className='about'>
        <About/>
      </div>

      <div className='services'>
        <Services />
      </div>

      <div className='Trainers'>
        <Trainers />
      </div>
      <div className='Testimonials'>
        <Testimonials/>
      </div>

    </div>
  );
}

export default Home;