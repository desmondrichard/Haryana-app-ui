import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Live.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { NavLink, Outlet } from 'react-router-dom';
function Live() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  function Sample1() {
    setShow1(false);
    setShow2(true);
  }

  function Sample2() {
    setShow2(false);
    setShow1(true);
  }

  return (
    <div>
      <Container fluid style={{ zIndex: '-1', backgroundColor: '#2E4EBE' }}>
        <Row style={{ minHeight: '180px' }} className='text-center'>
          <Col xs={12}>
            <h2 style={{ color: 'white', marginTop: '50px' }} >UNDER-19 ONE DAY TROPHY 2022-2023</h2>
          </Col>
          <Col xs={12}>
            <h5 style={{ color: 'white', marginBottom: '70px', fontSize: '13px' }} className='text-center borderAlign'>78 LIMITED OVER MATCHES</h5>
          </Col>
        </Row>
      </Container>
      <Container style={{ borderRadius: '5px', marginTop: '-35px' }} sticky="top">
        <Card className='boxShadow mb-4 justify-content-center' style={{ minHeight: '58px' }}>
          <Card.Body className='padding'>
            <Row>
              <Col xs={6} lg={8}>
                <Row style={{ paddingTop: '5px', whiteSpace: 'nowrap' }}>
                  <Col sm="auto"><NavLink className='nav-bar-link navLink' to='mensenior' style={{ textDecoration: 'none' }}> MEN SENIOR (9)</NavLink></Col>
                  <Col sm="auto"> <NavLink className='nav-bar-link navLink' to='under19' style={{ textDecoration: 'none' }}>UNDER-19 (5)</NavLink></Col>
                  <Col sm="auto"><NavLink className='nav-bar-link navLink' to='under16' style={{ textDecoration: 'none' }}>UNDER-16 (4)</NavLink></Col>
                  <Col sm="auto"><NavLink className='nav-bar-link navLink' to='under13' style={{ textDecoration: 'none' }}>UNDER-13 (2)</NavLink></Col>
                </Row>
              </Col>
              <Col lg={4}>
                <Row>
                  <Col xs={{ span: 12 }} lg={{ span: 9 }}>
                    {/* Form:1 search bar */}
                    {show1 ? <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search here..."
                        className="me-2"
                        aria-label="Search"
                      />
                    </Form> : null}
                    {/* Form:2 select fields */}
                    {show2 ? <Form className="d-flex">
                      <Form.Select aria-label="select1" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', width: '100%', marginRight: '4px', height: '30px' }}>
                        <option value="1">FILTER BY TEAM</option>
                        <option value="2">PANCHKULA</option>
                        <option value="3">FARIDABAD</option>
                        <option value="4">HARYANA</option>
                      </Form.Select>
                      <Form.Select aria-label="select2" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', width: '66%', height: '30px' }}>
                        <option value="1">FILTER BY</option>
                        <option value="2">CHANDIGARH</option>
                        <option value="3">HARYANA</option>
                        <option value="4">GURGAON</option>
                        <option value="5">KURUKSHEKTRA</option>
                      </Form.Select>
                    </Form> : null}
                  </Col>
                  <Col xs={1}><i className="bi bi-sliders" style={{ fontSize: '23px', cursor: 'pointer' }} onClick={() => Sample1()}></i></Col>
                  <Col xs={1}><i className="bi bi-search" style={{ fontSize: '22px', cursor: 'pointer' }} onClick={() => Sample2()}></i></Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Outlet />
      </Container>
    </div>
  )
}

export default Live


