import React, {useState} from "react";
import '../styles/home.css'
import {Col, Container, NavLink, Row} from "react-bootstrap";
import {Register,SignUp} from "../component/register/register";
import pattern from '../assets/home/pattern-circles.svg';
import Breadcrumbs from "./breadcrumbs";
import Section1 from "./section1";
import appleIcon from '../assets/home/apple-icon.svg';
import googleIcon from '../assets/home/google-icon.svg';



const Home = () => {

  return (
      <>
          <div className="home">
              <Container>
                  <Row>
                      <Col>
                          <div className="left-home-content">
                              <h1>The best way to buy and sell cryptocurrency</h1>
                              <p>Sign up now to buy cryptocurrency and trade the most popular currency pairs</p>
                              <div className="socials-icon d-flex">
                                  <div className="store">
                                      <button className="btn btn-dark"><img className="icon" src={appleIcon} alt=""/>Get on iPhone</button>
                                  </div>
                                  <div className="store">
                                      <button className="btn btn-dark"><img className="" src={googleIcon} alt=""/>Get on Android</button>
                                  </div>
                              </div>
                          </div>
                      </Col>
                      <Col>
                          <div className="right-home-content">
                              <SignUp />
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          <Section1 />
          <Breadcrumbs />
      </>

  );
}
export default Home;
