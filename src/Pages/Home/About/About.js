import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div id="about" className="about-title-container">
            <h3 className="title">About Our Shop</h3>
            <div className="about-container mx-auto mt-3">
                
                <Container>
                    <Row>

                        <Col className="mt-5" sm={8}>
                            <p className="detail">A drone, in technological terms, is an unmanned aircraft. Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems (UASes). Essentially, a drone is a flying robot that can be remotely controlled or fly autonomously through software-controlled flight plans in their embedded systems, working in conjunction with onboard sensors and GPSA drone, in technological terms, is an unmanned aircraft. Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems (UASes). Essentially, a drone is a flying robot that can be remotely controlled or fly autonomously through software-controlled flight plans in their embedded systems, working in conjunction with onboard sensors and GPS..</p>
                            <br />
                            <br />
                            <br />
                           <Link to="/explore">
                                <Button variant="success">EXPLORE</Button>
                           </Link>
                        </Col>
                        <Col sm={4}><img className="img" src={'https://image.freepik.com/free-photo/white-drone-hovering-bright-blue-sky_158595-3347.jpg'} alt="" /></Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default About;