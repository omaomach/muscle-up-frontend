import React from 'react'
import About from './About'
import Trainers from './Trainers';
import Services from './Services'
import { Carousel } from 'react-carousel-minimal';
import "./styles.css";

function Home() {
  const data = [
    {
      image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "Strive for progress, not perfection"
    },
    {
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "Life is all about ups and downs, we call it squats"
    },
    {
      image: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1600",

      // caption: "Darjeeling"
    },
    {
      image: "https://as1.ftcdn.net/v2/jpg/03/20/45/94/1000_F_320459487_SAvrvfR4NN4CkFQccj49rBfmiLoYebuw.jpg",
      caption: "Being weak is nothing to be ashamed of, staying weak is"
      // caption: "San Francisco"
    },



  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }
  return (
    <div >
      <div className="carousel">

        <Carousel
          data={data}
          time={3000}
          width="1700px"
          height="825px"
          border-radius="12px"
          captionStyle={captionStyle}

          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"

          style={{
            textAlign: "center",
            // width: "1000px",
            maxHeight: "500px",
            borderRadius: "12px"
          }}
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

    </div>
  );
}

export default Home;