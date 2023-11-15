import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import './Stats.css';
import { NavLink, Outlet } from 'react-router-dom';


function Stats() {
  return (
    <div>
        <Container>
          <div className='my-4 border rounded p-2 navBarHead'>
            <Row>
              <Col xs={12} lg={6}>
                <Row>
                  <Col xs={{ span: 2 }} lg={2}>
                    <NavLink className='nav-bar-link' to='batting' style={{ textDecoration: 'none' }}> <h5 style={{ fontWeight: '500', fontSize: '14px', lineHeight: 2.5 }} className='me-auto navLink'>BATTING</h5></NavLink>
                  </Col>
                  <Col xs={{ span: 2 }} lg={2}>
                    <NavLink className='nav-bar-link' to='bowling' style={{ textDecoration: 'none' }}><h5 style={{ fontWeight: '500', fontSize: '14px', lineHeight: 2.5 }} className='me-auto navLink'>BOWLING</h5></NavLink>
                  </Col>
                  <Col xs={{ span: 2 }} lg={2}>
                    <NavLink className='nav-bar-link' to='fielding' style={{ textDecoration: 'none' }}><h5 style={{ fontWeight: '500', fontSize: '14px', lineHeight: 2.5, marginLeft: '10px' }} className='me-auto navLink'>FIELDING</h5></NavLink>
                  </Col>
                </Row>
                
              </Col>
              <Col xs={12} lg={6}>
                <Row>
                  <Col lg={6}>
                    <Form.Select aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', marginBottom: '6px', minWidth: '100%' }}>
                      <option value="1">ALL CATEGORY</option>
                      <option value="2">MEN SENIOR</option>
                      <option value="3">WOMEN</option>
                    </Form.Select>
                  </Col>
                  <Col lg={6}>
                    <Form.Select aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', minWidth: '100%' }}>
                      <option value="1">ALL FORMAT</option>
                      <option value="2">TEST</option>
                      <option value="3">LIMITED OVERS</option>
                      <option value="4">T20</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
            <Outlet />
        </Container>
    
    </div>
  )
}

export default Stats