import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './MenSenior.css';
import Image from 'react-bootstrap/Image';

function Under19() {
  return (
    <div>
       <Container>
                <Card className='mt-3 mb-3' style={{ borderBottom: '6px solid #203EA1' }}>
                    <Card.Header style={{ backgroundColor: 'white' }} className='header'>
                        <Row className='py-2'>
                            <Col lg={6}>
                                <Row>
                                    <Col xs='auto' style={{ color: '#D50D12', fontSize: '13px', fontWeight: '700', marginLeft: '12px' }}>12 AUG 14:30</Col>
                                    <Col xs="auto" style={{ fontSize: '13px', fontWeight: '700' }}>MATCH 199</Col>
                                    <Col xs='auto' style={{ fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap' }}>GROUP A</Col>
                                    <Col xs='auto' style={{ fontSize: '13px', fontWeight: '700' }}>UNDER 19 ONE DAY TROPHY 2022-23</Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <Row style={{ paddingRight: '13px' }}>
                                    <Col xs='auto' lg={8} style={{ fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap' }} className='text-end'>CH BANSI LAL CRICKET STADIUM LAHLI, ROHTAK</Col>
                                    <Col className='d-none d-lg-block' lg={3} style={{ fontSize: '13px', fontWeight: '500', backgroundColor: '#109600', borderRadius: '6px', paddingTop: '5px', color: 'white', textAlign: 'center', Width: '70px', height: '30px' }} >LIMITED OVERS</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col lg={6}>
                                <Row style={{ fontSize: '13px', backgroundColor: '#BADEC8' }}>
                                    <Col xs={6} md={8}><p style={{ color: '#D20D12', fontWeight: '500' }}>MATCH IN PROGRESS</p></Col>
                                    <Col xs={6} md={4}><p className='text-end'>MIN OV REM 89.5</p></Col>
                                    <Col xs={6} md={8} style={{ marginTop: '-11px', lineHeight: '0.8' }}><p>GUYANA AMAZON WARRIORS TRAIL BY 123 RUNS</p></Col>
                                    <Col xs={6} md={4} style={{ marginTop: '-11px', lineHeight: '0.8' }}><p className='text-end'>DAY 3, SESSION 2</p></Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <Image src={require('../../assets/logo.png')} fluid roundedCircle style={{ height: "90px", width: "90px", marginTop: '5px', marginLeft: '40px' }}></Image>
                                    </Col>
                                    <Col lg={6}>
                                        <Row>
                                            <Col lg={12}><p style={{ fontWeight: '500' }}>ST KITTS & NEVIS PATRIOTS <span style={{ fontSize: '10px' }}>🟢</span></p></Col>
                                            <Col lg={12} style={{ marginTop: '-17px' }}><h5>150/8</h5></Col>
                                            <Col lg={12} style={{ marginTop: '-9px' }}><p>(18.2 Ov)</p></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} style={{ fontSize: '14px' }}>
                                <Row>
                                    <Col lg={{ span: 7, offset: 5 }}><p>ST KITTS & NEVIS PATRIOTS <span style={{ fontWeight: '600', fontStyle: 'italic' }}>OPTED TO FIELD</span></p></Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <Image src={require('../../assets/logo.png')} fluid roundedCircle style={{ height: "90px", width: "90px", marginTop: '15px', marginLeft: '40px' }}></Image>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col lg={12}><p></p></Col>
                                            <Col lg={12}><p style={{ fontWeight: "600" }}>GUYANA AMAZON WARRIORS</p></Col>
                                            <Col lg={12} style={{ marginTop: '-10px' }}><p >INNINGS YET TO BEGIN</p></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '-21px' }}>
                            <Col xs={{offset:5}} sm={{span:4,offset:5}} md={{span:3,offset:5}} lg={{ span: 3, offset: 5}} style={{ backgroundColor: '#203EA1', width: '20%', borderTopLeftRadius: '400px', borderTopRightRadius: '400px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', fontWeight: '600',paddingTop:'8px',cursor:'pointer' }} className='box'><p className='text-center pt-1 text-white hover' style={{fontSize:'1.2vw'}}>MATCH CENTRE</p></Col>
                            <Col className='d-none col-md-3 offset-md-1 d-md-block col-lg-3 d-lg-block offset-lg-1' style={{lineHeight:'2.5'}}><p style={{ backgroundColor: '#DDE5FF', fontWeight: '500' }} className='text-center'>DAY MATCH</p></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
    </div>
  )
}

export default Under19