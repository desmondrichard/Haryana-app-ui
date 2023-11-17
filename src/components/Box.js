import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

import './Box.css';
function Box() {
    return (
        <Container fluid className='bgImg ' style={{zIndex:'-1'}}> 
        <Row>
            <Col lg={{span:3,offset:1}} sm={{span:4,offset:3}} className='my-4'>
                <Image src={require('../assets/abishekImg-fotor.jpg')} fluid roundedCircle style={{ height: "220px", width: '220px' }}></Image>
            </Col>
            <Col lg={8} className='my-5'>
                <Row>
                    <Col xs={12}>
                        <h4 style={{ fontSize: "20px", fontWeight: "600", color: "white", lineHeight: "1.0" }}>ABHISHEK SHARMA <br /><span style={{ fontSize: "17px", fontWeight: "500", color: "white" }}>CHAUDHARY</span></h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} lg={4} className='my-4'>
                        <h4 style={{ fontWeight: "500", fontSize: "13px", color: "#A2B1A3",lineHeight:'0.8'}}>ROLE</h4>
                        <h4 style={{ fontWeight: "500", fontSize: "15px", color: 'white' }}>ALL ROUNDER</h4>
                    </Col>
                    <Col xs={4} lg={4} className='my-4'>
                        <h4 style={{ fontWeight: "500", fontSize: "13px", color: "#A2B1A3",lineHeight:'0.8' }}>BAT STYLE</h4>
                        <h4 style={{ fontWeight: "500", fontSize: "15px", color: 'white' }}>RIGHT HAND BAT</h4>
                    </Col>
                    <Col xs={4} lg={4} className='my-4'>
                        <h4 style={{ fontWeight: "500", fontSize: "13px", color: "#A2B1A3",lineHeight:'0.8' }}>BOWL STYLE</h4>
                        <h4 style={{ fontWeight: "500", fontSize: "15px", color: 'white' }}>RIGHT ARM FAST MEDIUM</h4>
                    </Col>
                    <Col lg={4}>
                        <h4 style={{ fontWeight: "500", fontSize: "13px", color: "#A2B1A3",lineHeight:'0.8' }}>DOB</h4>
                        <h4 style={{ fontWeight: "500", fontSize: "15px", color: 'white' }}>4<sup>TH</sup> OCT,2005</h4>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}

export default Box