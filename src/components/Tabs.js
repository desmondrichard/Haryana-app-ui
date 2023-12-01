import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './Tabs.css';
import { Col, Container, Row } from 'react-bootstrap';

function Tabs() {
    return (
        <Container className='a'>
        <Row className='justify-content-center'>
            <Col xs={12} sm={12} lg={12} >
                <Nav style={{ backgroundColor: "white",width:'100%',marginTop:'-30px',padding:'8px'}} className='navs' >
                    <NavLink className='nav-bar-link' to="/">BIO</NavLink>
                    <NavLink className='nav-bar-link' to="/stats">STATS</NavLink>
                    <NavLink className='nav-bar-link' to="/insights">INSIGHTS</NavLink>
                    <NavLink className='nav-bar-link' to="/matches">MATCHES</NavLink>
                    <NavLink className='nav-bar-link' to="/awards">AWARDS</NavLink>
                    <NavLink className='nav-bar-link' to="/photos">PHOTOS</NavLink>
                    <NavLink className='nav-bar-link' to="/videos">VIDEOS</NavLink>
                
                </Nav>
            </Col>
        </Row>
        </Container>


    )
}

export default Tabs