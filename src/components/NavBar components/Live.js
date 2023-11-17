import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Live.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
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
        <Card style={{ border: 'none' }} className='boxShadow mb-4'>
          <Card.Body className='padding'>
            <Navbar>
              <Container>
                <Nav style={{ fontSize: '14px', fontWeight: '600' }}>
                  <Row>
                    <Col xs="auto">
                      <Nav.Link href="#home" style={{ whitespace: 'nowrap' }} className='navLink'>MEN SENIOR (9)</Nav.Link>
                    </Col>
                    <Col xs="auto">
                      <Nav.Link href="#features" className='navLink'>UNDER-19 (5)</Nav.Link>
                    </Col>
                    <Col xs="auto">
                      <Nav.Link href="#pricing" className='navLink'>UNDER-16 (4)</Nav.Link>
                    </Col>
                    <Col xs="auto">
                      <Nav.Link href="#pricing" className='ms-auto navLink'>UNDER-13 (2)</Nav.Link>
                    </Col>
                  </Row>
                </Nav>
                <Nav className="ms-auto" style={{ fontSize: '14px', fontWeight: '600' }}>
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
                    <Form.Select aria-label="select1" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', marginRight: '8px', minWidth: '45%' }}>
                      <option value="1">FILTER BY TEAM</option>
                      <option value="2">PANCHKULA</option>
                      <option value="3">FARIDABAD</option>
                      <option value="4">HARYANA</option>
                    </Form.Select>
                    <Form.Select aria-label="select2" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', minWidth: '45%' }}>
                      <option value="1">FILTER BY</option>
                      <option value="2">CHANDIGARH</option>
                      <option value="3">HARYANA</option>
                      <option value="4">GURGAON</option>
                      <option value="5">KURUKSHEKTRA</option>
                    </Form.Select>
                  </Form> : null}

                  <Nav.Link href="#end1"><i className="bi bi-funnel" onClick={() => Sample1()}></i></Nav.Link>

                  <Nav.Link href="#end2"><i className="bi bi-search" onClick={() => Sample2()}></i></Nav.Link>
                </Nav>

              </Container>
            </Navbar>
          </Card.Body>
        </Card>
      </Container>

    </div>
  )
}

export default Live


