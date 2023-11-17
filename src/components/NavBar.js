import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { NavLink, Outlet } from 'react-router-dom';
function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='Navbar' sticky="top" style={{ zIndex: 5, backgroundColor: 'white' }} >
                <Container className='Container zIndexAlign'>
                    <Image style={{ width: "90px", height: "85px", marginRight: "14px" }} src={require('../assets/logo.png')} className='image' roundedCircle></Image>
                    <Navbar.Brand className='navBrand' >HARYANA CRICKET ASSOCIATION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='nav-bar-link nonarchive' to="live" style={{ textDecoration: 'none' }}><i style={{ fontSize: "12px" }} className="bi bi-circle-fill iconCust"></i><span className='a  navLink'>LIVE <span style={{ color: 'black' }}>(9)</span></span> </NavLink>
                            <NavLink className='nav-bar-link nonarchive' to="tournaments" style={{ textDecoration: 'none' }}><span className='a navLink' >TOURNAMENTS</span></NavLink>

                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={<span className='a navLink '>ARCHIVE <i className="bi bi-chevron-down dropdownIconCust"></i></span>}

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

                            <NavLink className='nav-bar-link nonarchive' to="teams" style={{ textDecoration: 'none' }}><span className='a navLink'>TEAMS</span></NavLink>
                            <NavLink className='nav-bar-link nonarchive' to="bccimatches" style={{ textDecoration: 'none' }}><span className='a navLink'>BCCI MATCHES</span></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default NavBar