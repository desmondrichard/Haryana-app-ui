import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';
import './Insights.css';
function Insights() {
  return (
    <div>
      <Container>
        <div className='my-4 border rounded p-2 navBarHead'>
          <Row>
            <Col xs={12} lg={6}>
              <Row>
                <Col xs={{ span: 2 }} lg={2}>
                  <NavLink className='nav-bar-link' to='insightsbatting' style={{ textDecoration: 'none' }}> <h5 style={{ fontWeight: '500', fontSize: '14px', lineHeight: 2.5 }} className='me-auto navLink'>BATTING</h5></NavLink>
                </Col>
                <Col xs={{ span: 2 }} lg={2}>
                  <NavLink className='nav-bar-link' to='insightsbowling' style={{ textDecoration: 'none' }}> <h5 style={{ fontWeight: '500', fontSize: '14px', lineHeight: 2.5 }} className='me-auto navLink'>BOWLING</h5></NavLink>
                </Col>
              </Row>

            </Col>
            <Col xs={12} lg={6}>
              <Row>
                <Col lg={6}>
                  <Form.Select aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', marginBottom: '6px', minWidth: '100%' }}>
                    <option value="1">FILTER BY CATEGORY</option>
                    <option value="2">MEN SENIOR</option>
                    <option value="3">WOMEN</option>
                  </Form.Select>
                </Col>
                <Col lg={6}>
                  <Form.Select aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', minWidth: '100%' }}>
                    <option value="1">FILTER BY MATCH TYPE</option>
                    <option value="2">MULTI DAY</option>
                    <option value="3">LIMITED OVERS</option>
                    <option value="4">T20</option>
                    <option value="5">TTEN</option>
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

export default Insights