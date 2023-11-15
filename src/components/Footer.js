import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Footer.css';
import Button from 'react-bootstrap/Button';
function Footer() {
    return (
        <footer >
            <Container fluid>
                <Row className='bgImage'>
                    <Col style={{ marginTop: "50px" }} sm={{span:10,offset:2}} md={{span:9,offset:2}} lg={{span:2,offset:1}}>
                        <Image src={require('../assets/logo.png')} fluid roundedCircle style={{ height: "130px", width: "130px" }}></Image>
                    </Col>
                    <Col lg={8} xs="auto">
                        <Row>
                            <Col lg={7} style={{ marginTop: "23px" }} xs="auto">
                                <Row>
                                    <Col lg={6} style={{ marginTop: "23px" }} xs="auto">
                                        <div>
                                            <h3 className='footer-heading'>QUICK LINKS</h3>
                                            <p className='footer-link'>TOURNAMENTS</p>
                                            <p className='footer-link'>ARCHIVE</p>
                                            <p className='footer-link'>TEAMS</p>
                                            <p className='footer-link'>BCCI MATCHES</p>
                                            <p className='footer-link'>IMAGES</p>
                                            <p className='footer-link'>VIDEOS</p>
                                            <p className='footer-link'>RESULTS</p>
                                            <p className='footer-link'>STATS</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} style={{ marginTop: "43px" }} xs="auto">
                                        <p></p>
                                        <p></p>
                                        <p className='footer-link'>ABOUT US</p>
                                        <p className='footer-link'>CONTACT US</p>
                                        <p className='footer-link'>TERMS & CONDITION</p>
                                        <p className='footer-link'>PRIVACY POLICY</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} style={{ marginTop: "23px" }} xs="auto">
                                <h3 style={{ marginTop: "23px" }} className='footer-heading'>FOLLOW US</h3>
                                {/* USE AS BUTTONS: */}
                                <p className='my-3 footer-link' style={{cursor:'pointer'}}><Button ><i className="bi bi-facebook" ></i></Button> FACEBOOK</p> 
                                <p className='my-3 footer-link' style={{cursor:'pointer'}}><Button ><i className="bi bi-twitter-x"></i></Button> TWITTER</p>
                                <p className='my-3 footer-link' style={{cursor:'pointer'}}><Button ><i className="bi bi-instagram"></i></Button> INSTAGRAM</p>                   
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "#001046" ,padding:"8px"}}>
                    <Col xs={6} md={{span:6,offset:1}} className='footer-bootom-text fw-bold'>ALL RIGHTS RESERVED. © COPYRIGHTS 2021. HARYANA CRICKET ASSOCIATION</Col>
                    <Col xs={6} md={5} className='footer-bootom-text fw-bold'>DESIGNED AND DEVELOPED BY <span style={{color:"#ADB407"}}> SPORTALYTICS PVT LTD</span></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer