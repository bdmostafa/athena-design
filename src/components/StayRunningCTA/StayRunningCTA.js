import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import project from '../../images/project.png';
import './StayRunningCTA.css'

const StayRunningCTA = () => {
    return (
        <section className="project-wrapper">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img src={project} alt="" className="img-fluid"/>
                    </Col>
                    <Col className="pr-details" xs={12} md={6}>
                        <h2>STAY RUNNING & PROJECT</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        <Button className="cta-btn" variant="primary">Contact us</Button>
                    </Col>                    
                </Row>
            </Container>
        </section>
    );
};

export default StayRunningCTA;