import React from "react";
import "./Dashboard.css";
import Dashnav from "./Dashnav";
import Time from "./Time";
import { Container, Card, Col } from 'react-bootstrap';
import 'animate.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Dashnav className="nav"></Dashnav>
      <div className="client-details">
        <div className="client">
          <div className="dash-img">
            <img
              className="client-img"
              src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
          </div>
          <div className="dash-about">
<h2>John Doe</h2>
            <p className="about-client">
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco ."
            </p>
          </div>
        </div>
        <h2 className="header">My Journey</h2>
        <div className="details-container">
          <div className="stats">
            <div className="client-status">
              <li>Height:</li>
              <li>Weight:</li>
              <li>Age:</li>
            </div>
            <div className="payment">
              <p>Payment:</p>
            </div>
            <div>
              <Time />
            </div>
          </div>
          <div className="diet-bar">
            <div className="exercise">
<div className="todays">
              <Container className='p-4'>
                <Col md="4">
                  <Card>
                    <Card.Title className="status-heading">Today's Excercise</Card.Title>
                    <Card.Img className="img" variant="top" src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <Card.Body>
                      <Card.Text>
                        Upper body
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Container>
              </div>
              <div className="diet">
                <Container className='p-4'>
                  <Col md="4">
                    <Card>
                      <Card.Title className="status-heading">Diet and Suppliments</Card.Title>
                      <Card.Img className="img" variant="top" src="https://images.unsplash.com/photo-1535007813616-79dc02ba4021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                      <Card.Body>
                        <Card.Text>
                          Upper body
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Container>
              </div>
            </div>
            <p>Trainer Name:</p>
          </div>
        </div>
      </div>
    </div>
  );
};