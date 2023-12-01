import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './BcciMatches.css';
import Form from 'react-bootstrap/Form';
// import './Tournaments.css';
function Tournaments() {
    return (
        <div >
            <Container fluid className='bgImg '>
                <Row style={{ paddingTop: '16px', paddingBottom: '85px' }} >
                    <Col xs={12}>
                        <h1 style={{ color: 'white' }} className='text-center'>HARYANA CRICKET ASSOCIATION</h1>
                    </Col>
                    <Col xs={12}>
                        <h3 style={{ color: 'white' }} className='text-center'>BCCI DOMESTIC SEASON 2022-2023</h3>
                    </Col>
                </Row>
            </Container>
            <Container style={{ zIndex: '1', marginTop: '-70px' }} >
                <Card style={{ height: 'auto' }} className='shadow'>
                    <Row style={{ padding: '14px' }}>
                        <Col xs={12} lg={{ span: 3, offset: 9 }}>
                        <div style={{width: '180px'}}>
                            <Form.Select  menuPlacement="auto"
                    menuPosition="fixed" aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', marginBottom: '6px', minWidth: '100%' }}>
                                <option value="1">FILTER BY SEASON</option>
                                <option value="2">2019 - 2020</option>
                                <option value="3">2018 - 2019</option>
                                <option value="4">2017 - 2018</option>
                                <option value="5">2016 - 2017</option>
                            </Form.Select>
                            </div>
                        </Col>
                    </Row>
                    {/* Card:1 */}
                    <Container style={{ backgroundColor: '#775ADA', borderRadius: '5px', maxWidth: '1050px' }} className='cardStyle'>
                        <Card style={{ borderRadius: '0px', marginRight: '-13px' }} >
                            <Row>
                                <Col lg={9}>
                                    <Row>
                                        <Col xs="auto"> <Card.Header style={{ backgroundColor: 'white', fontWeight: '700', fontSize: '16px' }}>LATE.RIAZZUDDIN MEMORIAL U-19 INTER DISTRICT ELITE GROUP TOURNAMENT 2019-2020</Card.Header></Col>
                                    </Row>
                                    <Row className='mx-3 mt-2'>
                                        <Col xs="auto"><p style={{ color: '#F4314F', fontSize: '12px', whitespace: 'nowrap', border: '1px solid gray', padding: '4px', borderRadius: '4px', fontWeight: '700' }}>ON GOING</p></Col>
                                        <Col xs="auto"><p style={{ fontSize: '12px', paddingTop: '4px' }}>21 MAY 2021 - 31 JUN 2021</p></Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col><p style={{ fontSize: '14px', fontWeight: '600' }}>MENS UNDER 19</p>
                                        </Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col xs='auto'><p style={{ color: 'white', fontSize: '12px', backgroundColor: '#3FB68B', borderRadius: '4px', padding: '5px', whiteSpace: 'nowrap' }}>LIMITED OVERS</p></Col>
                                        <Col xs='auto'><p style={{ fontSize: '12px', paddingTop: '4px' }}>45 MATCHES</p></Col>
                                    </Row>

                                </Col>
                                <Col lg={3} className='d-none d-lg-block px-5'>
                                    <div>
                                        <Row>
                                            <Col xs="auto"> <Card.Text style={{ backgroundColor: 'white', fontWeight: '400' }} className='py-2 text-center'>QUICK LINKS</Card.Text></Col><hr />
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>OVERVIEW</p></Col>
                                            <Col><p>STANDINGS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>UPCOMING</p></Col>
                                            <Col><p>STATISTICS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>LIVE</p></Col>
                                            <Col><p>TEAMS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>RESULTS</p></Col>

                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Container>

                    {/* CARD:2 */}
                    <Container style={{ backgroundColor: '#032651', borderRadius: '5px', maxWidth: '1050px' }} className='cardStyle my-3'>
                        <Card style={{ borderRadius: '0px', marginRight: '-13px' }} >
                            <Row>
                                <Col lg={9}>
                                    <Row>
                                        <Col xs="auto"> <Card.Header style={{ backgroundColor: 'white', fontWeight: '700', fontSize: '16px' }}>SENIOR INTER DISTRICT PLATE GROUP TOURNAMENT 2020-21</Card.Header></Col>
                                    </Row>
                                    <Row className='mx-3 mt-2'>
                                        <Col xs="auto"><p style={{ color: '#F4314F', fontSize: '12px', whitespace: 'nowrap', border: '1px solid gray', padding: '4px', borderRadius: '4px', fontWeight: '700' }}>ON GOING</p></Col>
                                        <Col xs="auto"><p style={{ fontSize: '12px', paddingTop: '4px' }}>21 MAY 2021 - 31 JUN 2021</p></Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col><p style={{ fontSize: '14px', fontWeight: '600' }}>MENS UNDER 19</p>
                                        </Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col xs='auto'><p style={{ color: 'white', fontSize: '12px', backgroundColor: '#3FB68B', borderRadius: '4px', padding: '5px', whiteSpace: 'nowrap' }}>LIMITED OVERS</p></Col>
                                        <Col xs='auto'><p style={{ fontSize: '12px', paddingTop: '4px' }}>45 MATCHES</p></Col>
                                    </Row>

                                </Col>
                                <Col lg={3} className='d-none d-lg-block px-5'>
                                    <div>
                                        <Row>
                                            <Col xs="auto"> <Card.Text style={{ backgroundColor: 'white', fontWeight: '400' }} className='py-2 text-center'>QUICK LINKS</Card.Text></Col><hr />
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>OVERVIEW</p></Col>
                                            <Col><p>STANDINGS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>UPCOMING</p></Col>
                                            <Col><p>STATISTICS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>LIVE</p></Col>
                                            <Col><p>TEAMS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>RESULTS</p></Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Container>

                    {/* card:3 */}
                    <Container style={{ backgroundColor: '#2F89FC', borderRadius: '5px', maxWidth: '1050px' }} className='cardStyle my-3'>
                        <Card style={{ borderRadius: '0px', marginRight: '-13px' }} >
                            <Row>
                                <Col lg={9}>
                                    <Row>
                                        <Col xs="auto"> <Card.Header style={{ backgroundColor: 'white', fontWeight: '700', fontSize: '16px' }}>SENIOR INTER DISTRICT PLATE GROUP TOURNAMENT 2020-21</Card.Header></Col>
                                    </Row>
                                    <Row className='mx-3 mt-2'>
                                        <Col xs="auto"><p style={{ color: '#F4314F', fontSize: '12px', whitespace: 'nowrap', border: '1px solid gray', padding: '4px', borderRadius: '4px', fontWeight: '700' }}>ON GOING</p></Col>
                                        <Col xs="auto"><p style={{ fontSize: '12px', paddingTop: '4px' }}>21 MAY 2021 - 31 JUN 2021</p></Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col><p style={{ fontSize: '14px', fontWeight: '600' }}>MENS UNDER 19</p>
                                        </Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col xs='auto'><p style={{ color: 'white', fontSize: '12px', backgroundColor: '#3FB68B', borderRadius: '4px', padding: '5px', whiteSpace: 'nowrap' }}>LIMITED OVERS</p></Col>
                                        <Col xs='auto'><p style={{ fontSize: '12px', paddingTop: '4px' }}>45 MATCHES</p></Col>
                                    </Row>

                                </Col>
                                <Col lg={3} className='d-none d-lg-block px-5'>
                                    <div>
                                        <Row>
                                            <Col xs="auto"> <Card.Text style={{ backgroundColor: 'white', fontWeight: '400' }} className='py-2 text-center'>QUICK LINKS</Card.Text></Col><hr />
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>OVERVIEW</p></Col>
                                            <Col><p>STANDINGS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>UPCOMING</p></Col>
                                            <Col><p>STATISTICS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>LIVE</p></Col>
                                            <Col><p>TEAMS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>RESULTS</p></Col>

                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Container>

                    {/* card:4 */}
                    <Container style={{ backgroundColor: 'red', borderRadius: '5px', maxWidth: '1050px' }} className='cardStyle my-3'>
                        <Card style={{ borderRadius: '0px', marginRight: '-13px' }} >
                            <Row>
                                <Col lg={9}>
                                    <Row>
                                        <Col xs="auto"> <Card.Header style={{ backgroundColor: 'white', fontWeight: '700', fontSize: '16px' }}>SENIOR INTER DISTRICT PLATE GROUP TOURNAMENT 2020-21</Card.Header></Col>
                                    </Row>
                                    <Row className='mx-3 mt-2'>
                                        <Col xs="auto"><p style={{ color: '#F4314F', fontSize: '12px', whitespace: 'nowrap', border: '1px solid gray', padding: '4px', borderRadius: '4px', fontWeight: '700' }}>ON GOING</p></Col>
                                        <Col xs="auto"><p style={{ fontSize: '12px', paddingTop: '4px' }}>21 MAY 2021 - 31 JUN 2021</p></Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col><p style={{ fontSize: '14px', fontWeight: '600' }}>MENS UNDER 19</p>
                                        </Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col xs='auto'><p style={{ color: 'white', fontSize: '12px', backgroundColor: '#3FB68B', borderRadius: '4px', padding: '5px', whiteSpace: 'nowrap' }}>LIMITED OVERS</p></Col>
                                        <Col xs='auto'><p style={{ fontSize: '12px', paddingTop: '4px' }}>45 MATCHES</p></Col>
                                    </Row>

                                </Col>
                                <Col lg={3} className='d-none d-lg-block px-5'>
                                    <div>
                                        <Row>
                                            <Col xs="auto"> <Card.Text style={{ backgroundColor: 'white', fontWeight: '400' }} className='py-2 text-center'>QUICK LINKS</Card.Text></Col><hr />
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>OVERVIEW</p></Col>
                                            <Col><p>STANDINGS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>UPCOMING</p></Col>
                                            <Col><p>STATISTICS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>LIVE</p></Col>
                                            <Col><p>TEAMS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>RESULTS</p></Col>

                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Container>

                    {/* card:5 */}
                    <Container style={{ backgroundColor: '#032651', borderRadius: '5px', maxWidth: '1050px' }} className='cardStyle my-3'>
                        <Card style={{ borderRadius: '0px', marginRight: '-13px' }} >
                            <Row>
                                <Col lg={9}>
                                    <Row>
                                        <Col xs="auto"> <Card.Header style={{ backgroundColor: 'white', fontWeight: '700', fontSize: '16px' }}>SENIOR INTER DISTRICT PLATE GROUP TOURNAMENT 2020-21</Card.Header></Col>
                                    </Row>
                                    <Row className='mx-3 mt-2'>
                                        <Col xs="auto"><p style={{ color: '#F4314F', fontSize: '12px', whitespace: 'nowrap', border: '1px solid gray', padding: '4px', borderRadius: '4px', fontWeight: '700' }}>ON GOING</p></Col>
                                        <Col xs="auto"><p style={{ fontSize: '12px', paddingTop: '4px' }}>21 MAY 2021 - 31 JUN 2021</p></Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col><p style={{ fontSize: '14px', fontWeight: '600' }}>MENS UNDER 19</p>
                                        </Col>
                                    </Row>
                                    <Row className='mx-3 ms-2'>
                                        <Col xs='auto'><p style={{ color: 'white', fontSize: '12px', backgroundColor: '#3FB68B', borderRadius: '4px', padding: '5px', whiteSpace: 'nowrap' }}>LIMITED OVERS</p></Col>
                                        <Col xs='auto'><p style={{ fontSize: '12px', paddingTop: '4px' }}>45 MATCHES</p></Col>
                                    </Row>

                                </Col>
                                <Col lg={3} className='d-none d-lg-block px-5'>
                                    <div>
                                        <Row>
                                            <Col xs="auto"> <Card.Text style={{ backgroundColor: 'white', fontWeight: '400' }} className='py-2 text-center'>QUICK LINKS</Card.Text></Col><hr />
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>OVERVIEW</p></Col>
                                            <Col><p>STANDINGS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>UPCOMING</p></Col>
                                            <Col><p>STATISTICS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer', lineHeight: '0.1' }}>
                                            <Col><p>LIVE</p></Col>
                                            <Col><p>TEAMS</p></Col>
                                        </Row>
                                        <Row style={{ fontSize: '12px', color: '#31ADF0', textDecoration: 'underline', cursor: 'pointer' }}>
                                            <Col><p>RESULTS</p></Col>

                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Container>



                </Card>
            </Container>
        </div>
    )
}

export default Tournaments