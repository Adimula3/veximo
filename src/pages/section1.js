import React from "react";
import '../styles/section1.css'
import portfolio from '../assets/home/portfolio-mobile.png';
import { } from "react-icons/fa";
import {BsCreditCard2Back } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import security from '../assets/home/security.png';
import {Col, Row} from "react-bootstrap";
import passcode from '../assets/home/passcode.png';

import 'animate.css';
const Section1 = () => {
  return(
      <>
          <section className="section1 d-flex">
              <div className="left-se1">
                  <p>Access and exchange hundreds of crypto currencies all in one place.
                      Join 5 million+ people using PECA wallet.</p>
                  <button className="btn btn-dark">Get Veximo Now</button>
              </div>
              <div>
                  <img src={portfolio} alt="" className="mobile-portfolio"/>
              </div>
              <div className="right-se1">
                  <ul>
                      <li><CgArrowsExchangeAlt className="icons"/>Easy Exchanges</li>
                      <li><BsCreditCard2Back className="icons" />Credit Cards Accepted</li>
                      <li><GrSecure className="icons"/>Private & Secure</li>
                  </ul>
              </div>
          </section>
          <section className="section2">
              <Row>
                  <Col lg={6}>
                      <div className="left-se2 d-flex">
                          <img src={security} alt="" className="security"/>
                          <div className="">
                              <h1 className="animate__fadeInDown">Your security is our priority</h1>
                              <p className="animate__backInLeft">Veximo uses the highest level of Internet Security and it is secured by 256 bits SSL security
                                  encryption to ensure that your information is completely protected from fraud.</p>
                          </div>
                      </div>
                  </Col>
                  <Col lg={6}>
                      <div className="shape">
                          <img src={passcode} alt="" className="passcode  animate__backInLeft"/>
                      </div>

                  </Col>
              </Row>

          </section>
      </>
  );
}
export default Section1;
