import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Matches.css';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function Matches() {
  return (
    <div>
      <Container>
        <div className='my-4 border rounded p-2 navBarHead'>
          <Row>
            <Col xs={12} lg={6}>
              <h5 style={{ fontWeight: '500' }} className='me-auto'>MATCH LOGS</h5>
            </Col>
            <Col xs={12} lg={6}>
              <Row>
                <Col lg={6}>
                  <Form.Select aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', marginBottom: '6px', minWidth: '100%' }}>
                    <option value="1">ALL CATEGORY</option>
                    <option value="2">MEN SENIOR</option>
                    <option value="3">UNDER-23</option>
                    <option value="1">UNDER-19</option>
                    <option value="2">UNDER-16</option>
                    <option value="3">UNDER-14</option>
                  </Form.Select>
                </Col>
                <Col lg={6}>
                  <Form.Select aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none', minWidth: '100%' }}>
                    <option value="1">ALL FORMAT</option>
                    <option value="2">TEST</option>
                    <option value="3">LIMITED OVERS</option>
                    <option value="1">T20</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>

      {/*card1:Table1  */}
      <div className='my-2'>
        <Container>
          <Card>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>UNDER 19 ONE DAY TROPHY 2021-22</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
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
          </Card>
        </Container>

      </div>

      {/* card2:Table2 */}
      <div className='my-2'>
        <Container>
          <Card>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>UNDER 19 ONE DAY TROPHY 2020-21</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
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
          </Card>
        </Container>

      </div>

      {/* Card3:Table3 */}
      <div className='my-2'>
        <Container>
          <Card>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>UNDER 19 ONE DAY TROPHY 2019-20</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
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
          </Card>
        </Container>

      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Matches