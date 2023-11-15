import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Fielding() {
  return (
    <div>
      <h1>Fielding Stats:</h1>
      <div className='my-2'>
        <Container>
          {/* card:1,Table:1 */}
          <Card>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>OVERALL</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
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
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>

              </tbody>
            </Table>
          </Card>

          {/* card2,table2 */}
          <Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>BATTING POSITION</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>1ST POSITION</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>2ND POSITION</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>3RD POSITION</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>4TH POSITION</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>5TH POSITION</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>

              </tbody>
            </Table>
          </Card>

          {/* card3,table3 */}
          <Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>TEAM INNINGS</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>1ST TEAM INNINGS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>2ND TEAM INNINGS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>
          {/* CARD4,TABLE4 */}
          <Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>MATCH INNINGS</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>1ST MATCH INNINGS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>2ND MATCH INNINGS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>3RD MATCH INNINGS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>

{/* CARD5,TABLE5 */}
<Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>MATCH RESULTS</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>WON MATCHES</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>LOST MATCHES</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>DRAWN MATCHES</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>TIED MATCHES</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>

{/* CARD6,TABLE6 */}
<Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>SEASON</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>2018-19</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>2019-20</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>

                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>2020-21</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>

                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>2021-22</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>

          {/* CARD7,TABLE7 */}
          <Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>CITY</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>CHANDIGARH</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>KRUSHETRA</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>ROHTAK</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>PANCHKULA</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>

{/* CARD8,TABLE8 */}
<Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>BOWLER TYPE</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>PACE</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>RIGHT ARM PACE</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>LEFT ARM PACE</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>SPIN</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>OFF SPIN</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>LEG SPIN</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>ORTHODOX</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>CHINAMAN</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                
              </tbody>
            </Table>
          </Card>

{/* CARD9,TABLE9 */}
<Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>OVER PHASE</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
              <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>1 TO 20 OVERS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>21 TO 60 OVERS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>61 TO 80 OVERS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>81 TO 100 OVERS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>100+ OVERS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>

{/* CARD10,TABLE10 */}
<Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>INNINGS PROGRESSION</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>1 TO 20 BALLS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>

                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>21 TO 40 BALLS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>

                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>41 TO 60 BALLS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>

                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>61 TO 80 BALLS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>

                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>80+ BALLS</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>

                </tr>
              </tbody>
            </Table>
          </Card>

{/* CARD11,TABLE11 */}
<Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>MATCH DAYS</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>DAY 1</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>DAY 2</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>DAY 3</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>DAY 4</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>DAY 5</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>

{/* CARD12,TABLE12 */}
<Card className='my-2'>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '19px', fontWeight: '700', paddingTop: '15px', paddingLeft: '9px' }}>MATCH SESSION</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{ fontSize: '11px' }}>
                <tr style={{ whiteSpace: 'nowrap' }}>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}></th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>30'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>0'S</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4S</th>
                  <th>B6S</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>CHANDIGARH</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>KRUSHETRA</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>ROHTAK</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
                <tr style={{ fontSize: '11px' }} className='textColor'>
                  <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} className='py-2'>PANCHKULA</td>
                  <td className='py-2'>27.SEP.2021</td>
                  <td className='py-2'>265</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>-</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>2</td>
                  <td className='py-2'>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Container>

      </div>

    </div>
  )
}

export default Fielding