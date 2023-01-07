import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import boxing1 from "../assets/boxing.webp"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

export default function Trainers() {
  return (
    <div id='trainers'>
      <h1 style={{ textAlign: "center" }}>Trainers</h1>
      <div className="trainers">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={boxing1} alt="boxing"/>
          </Item>
          <Item><img src={boxing1} alt="boxing"/></Item>
          <Item><img src={boxing1} alt="boxing"/></Item>
          <Item><img src={boxing1} alt="boxing"/></Item>
          <Item><img src={boxing1} alt="boxing"/></Item>
          <Item><img src={boxing1} alt="boxing"/></Item>
          <Item><img src={boxing1} alt="boxing"/></Item>
          <Item><img src={boxing1} alt="boxing"/></Item>
        </Carousel>
      </div>
    </div>
  )
}

