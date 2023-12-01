import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import './Awards.css';
import Table from 'react-bootstrap/Table';
import Tabs from '../Tabs';
import Box from '../Box';

function Awards() {
  return (
    <div>
       <Box />
      <Tabs className='position-absolute top-50' />
      <Container>
        {/* Nav: */}
        <div className='my-4 border rounded p-2 navBarHead'>
          <Row>
            <Col xs={12} lg={6}>
              <h5 style={{ fontWeight: '500' }} className='me-auto'>MATCH LOGS</h5>
            </Col>
            <Col xs={12} lg={6}>
              <Row>
                <Col lg={6}>
                <div style={{width: '180px'}}>
                  <Form.Select  menuPlacement="auto"
                    menuPosition="fixed" aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', marginBottom: '6px', minWidth: '100%' }}>
                    <option value="1">ALL CATEGORY</option>
                    <option value="2">MEN SENIOR</option>
                    <option value="3">UNDER-23</option>
                    <option value="1">UNDER-19</option>
                    <option value="2">UNDER-16</option>
                    <option value="3">UNDER-14</option>
                  </Form.Select>
                  </div>
                </Col>
                <Col lg={6}>
                <div style={{width: '180px'}}>
                  <Form.Select  menuPlacement="auto"
                    menuPosition="fixed" aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', minWidth: '100%' }}>
                    <option value="1">ALL FORMAT</option>
                    <option value="2">TEST</option>
                    <option value="3">LIMITED OVERS</option>
                    <option value="1">T20</option>
                  </Form.Select>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* Accordion:1 */}
        <Accordion defaultActiveKey="0" className='my-2 accordion1' flush >
          <Accordion.Item eventKey="0" className='my-3'>
            <Accordion.Header>TOP RUN GETTER OF THE MATCH (6)</Accordion.Header>
            <Accordion.Body>
              {/* Table1 */}
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* Accordion:2 */}
          <Accordion.Item eventKey="2" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>TOP WICKET TAKER OF THE MATCH (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* Accordion:3 */}
          <Accordion.Item eventKey="3" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>100's (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* Accordion:4 */}
          <Accordion.Item eventKey="4" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>50S (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* Accordion:5 */}
          <Accordion.Item eventKey="5" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>HIGHEST STRIKE RATE OF THE MATCH (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'center' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* Accordion:6 */}
          <Accordion.Item eventKey="6" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>BATTER OF THE MATCHS (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'right' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion flush className='accordion2'>
          {/* Accordion:7 */}
          <Accordion.Item eventKey="7" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>TOP WICKET TAKER OF THE MATCH (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* Accordion:8 */}
          <Accordion.Item eventKey="8" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>BEST ECONOMY OF THE MATCH (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* Accordion:9 */}

          <Accordion.Item eventKey="9" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>3+ WICKET IN A MATCH (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* Accordion:10 */}
          <Accordion.Item eventKey="10" className='my-3'>
            <Accordion.Header style={{whiteSpace:'nowrap'}}>5+ WICKET IN A MATCH (6)</Accordion.Header>
            <Accordion.Body>
              <Table responsive hover>
                <thead className='tableHead ' style={{ fontSize: '11px' }}>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUN OUTS</th>
                    <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>
                    <th style={{ textAlign: 'center' }}>GROUND NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                  <tr style={{ fontSize: '11px' }} className='textColor'>
                    <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
                    <td className='py-2'>27.SEP.2021</td>
                    <td className='py-2'>265</td>
                    <td className='py-2'>-</td>
                    <td className='py-2'>4</td>
                    <td className='py-2'>2</td>
                    <td className='py-2'>-</td>
                    <td style={{ textAlign: 'right' }} className='py-2'>RAVINDER PHAGNA CRICKET ACADEMY, FARIDABAD</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


      </Container>
    {/* <Footer /> */}
    </div>
  )
}

export default Awards