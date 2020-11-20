import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './Achievements.css';

const Achievements = () => {
    return (
        <section className="achivement-wrapper">
            <Container>
                <Row>
                    <Col className="achivement-inner" xs={12} md={6}>
                        <h2>Our Achievements</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter. </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={12} sm={6} md={6}>
                                <div className="d-flex achivement mb_4">
                                    <FontAwesomeIcon className="icons" icon={faSmile} /> 
                                    <div>
                                        <h3>700+</h3>
                                        <h6>Happy Clients</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6}>
                                <div className="d-flex achivement br_2 mb_4">
                                    <FontAwesomeIcon className="icons" icon={faTrophy} /> 
                                    <div>
                                        <h3>140+</h3>
                                        <h6>Projects Completed</h6>
                                    </div>
                                </div>
                            </Col> 
                            <Col xs={12} sm={6} md={6}>
                                <div className="d-flex achivement br_2">
                                    <FontAwesomeIcon className="icons" icon={faSmile} /> 
                                    <div>
                                        <h3>25+</h3>
                                        <h6>Crazy Minds</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6}>
                                <div className="d-flex achivement">
                                    <FontAwesomeIcon className="icons" icon={faTrophy} /> 
                                    <div>
                                        <h3>75+</h3>
                                        <h6>Running Projects</h6>
                                    </div>
                                </div>
                            </Col>                                                       
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achievements;