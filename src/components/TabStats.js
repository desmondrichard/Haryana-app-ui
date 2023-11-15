import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';

function TabStats() {
    return (
        <div>
        
                <Container>
                    <Navbar bg="primary" data-bs-theme="dark" style={{ borderRadius: "5px", paddingLeft: "15px" }}>
                        <Nav>
                            <Row >
                                <Col xs={6} md={2}>
                                    <Nav.Link href="#batting">BATTING</Nav.Link>
                                </Col>
                                <Col xs={6} md={2} >
                                    <Nav.Link className='ms-auto' href="#bowling">BOWLING</Nav.Link>
                                </Col>

                                {/* Dropdown:1 */}

                                <Col xs={{ span: 8 }}>
                                    <Row className='ms-auto'>
                                        <Col md={6}>
                                            <NavDropdown
                                                id="nav-dropdown-light-example"
                                                title={<span className='a'>FILTER BY CATEGORY <i className="bi bi-chevron-down dropdownIconCust"></i></span>}
                                                style={{ backgroundColor: "grey" }}
                                            >
                                                <NavDropdown.Item href="#action/3.1">MEN SENIOR</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    WOMEN
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Col>
                                        {/* Dropdown:2 */}
                                        <Col md={6}>
                                            <NavDropdown
                                                id="nav-dropdown-light-example"
                                                title={<span className='a'>FILTER BY MATCH TYPE <i className="bi bi-chevron-down dropdownIconCust"></i></span>}
                                                style={{ backgroundColor: "grey" }}
                                            >
                                                <NavDropdown.Item href="#action/3.1">MULTIDAY</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    LIMITED OVERS
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    TWENTY 20
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    TTEN
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>

                        </Nav>
                    </Navbar>
                </Container >

        </div>
    )
}

export default TabStats