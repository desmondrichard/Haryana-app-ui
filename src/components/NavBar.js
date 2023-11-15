import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import { Navbar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
function NavBar() {
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" data-bs-theme="light" className='Navbar' sticky="top">
                <Container className='.Container'>
                    <Image style={{ width: "90px", height: "85px", marginRight: "14px" }} src={require('../assets/logo.png')} className='image' roundedCircle></Image>
                    <Navbar.Brand className='navBrand' >HARYANA CRICKET ASSOCIATION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#live" ><i style={{ fontSize: "12px" }} className="bi bi-circle-fill iconCust"></i><span className='a  navLink'>LIVE</span> (9)</Nav.Link>
                            <Nav.Link href="#tournaments"><span className='a navLink' >TOURNAMENTS</span></Nav.Link>
                            {/* <Nav.Link href="#archive" >ARCHIVE</Nav.Link> */}
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={<span className='a navLink'>ARCHIVE <i className="bi bi-chevron-down dropdownIconCust"></i></span>}

                            >
                                <NavDropdown.Item href="#action/3.1">2020-2021</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    2019-2020
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">2018-2019</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    2017-2018
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#teams"><span className='a navLink'>TEAMS</span></Nav.Link>
                            <Nav.Link href="#matches"><span className='a navLink'>BCCI MATCHES</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar