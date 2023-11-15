import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import './Bio.css';


function Bio() {
  return (
    <div>
      <div>
        <Container className='my-3'>
          <Card style={{ width: '100%' }}>
            <Card.Header style={{ fontWeight: '700', fontSize: '17px' }}>PLAYER BIO</Card.Header>
            <ListGroup variant="flush">
              <Row style={{ padding: '10px' }}>
                <Col lg={4} style={{ marginTop: '13px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>FULL NAME</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '0.7', cursor: 'pointer' }}>ABHISHEK SANJEEV CHAUDHARY</p>
                  <hr />
                </Col>
                <Col lg={4} style={{ marginTop: '13px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>BORN</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '0.7', cursor: 'pointer' }}>NAINITAL, UTTARANCHAL</p>
                  <hr />
                </Col>
                <Col lg={4} style={{ marginTop: '13px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>AGE</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '0.7', cursor: 'pointer' }}>16 YEAR 17 DAYS</p>
                  <hr />
                </Col>
                <Col lg={4} >
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>ROLE</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '0.7', cursor: 'pointer' }}>ALL ROUNDER</p>
                  <hr />
                </Col>
                <Col lg={4} >
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>BATTING STYLE</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '0.7', cursor: 'pointer' }}>RIGHT HAND BAT</p>
                  <hr />
                </Col>
                <Col lg={4} >
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>BOWLING STYLE</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '0.7', cursor: 'pointer' }}>RIGHT ARM OFF SPIN</p>
                  <hr />
                </Col>
                <Col lg={4} >
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>MULTI DAY DEBUT</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '1.1', cursor: 'pointer' }}>26TH DEC,2015 - FARIDABAD VS KRUSHETRA (UNDER 19 MULTI DAY TROPHY) AT PANCHKULA</p>
                  <hr />
                </Col>
                <Col lg={4} >
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>LIMITED OVER DEBUT</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '1.1', cursor: 'pointer' }}>26TH DEC 2015 - FARIDABAD VS KRUSHETRA (UNDER 19 MULTI DAY TROPHY) AT PANCHKULA</p>
                  <hr />
                </Col>
                <Col lg={4} >
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>TWENTY 20 DEBUT</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#007BE7', lineHeight: '1.1', cursor: 'pointer' }}>26TH DEC,2015 - FARIDABAD VS KRUSHETRA (UNDER 19 MULTI DAY TROPHY) AT PANCHKULA</p>
                  <hr />
                </Col>
              </Row>


              <Row style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <Col xs={12}>
                  <p style={{ fontSize: '14px', fontWeight: '600', lineHeight: '0.1' }}>TEAM PRESENTED (14)</p>
                </Col>
                <Col md={6} xl={3}>
                  <p style={{ fontSize: '14px' }}> <Button style={{ backgroundColor: '#203EA3', borderRadius: "22px", whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}><Image src={require('../../assets/logo.png')} fluid style={{ height: '35px' }}></Image> FARIDABAD SENIOR MEN(45)</Button></p>
                </Col>
                {/* ../TabComponents/components/assets/logo.png */}
                <Col md={6} xl={3}>
                  <p style={{ fontSize: '14px' }}><Button style={{ backgroundColor: '#203EA3', borderRadius: "22px", whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}><Image src={require('../../assets/logo.png')} fluid style={{ height: '35px' }}></Image> KRUSHETRA SENIOR MEN(45)</Button></p>
                </Col>
                <Col md={6} xl={3}>
                  <p><Button style={{ backgroundColor: '#203EA3', borderRadius: "22px", whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}><Image src={require('../../assets/logo.png')} fluid style={{ height: '35px' }}></Image> FARIDABAD UNDER 23 MEN(16)</Button></p>
                </Col>
                <Col md={6} xl={3}>
                  <p><Button style={{ backgroundColor: '#203EA3', borderRadius: "22px", whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}><Image src={require('../../assets/logo.png')} fluid style={{ height: '35px' }}></Image> KRUSHETRA UNDER MEN(12)</Button></p>
                </Col>
                <Col md={6} xl={3}>
                  <p><Button style={{ backgroundColor: '#203EA3', borderRadius: "22px", whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}><Image src={require('../../assets/logo.png')} fluid style={{ height: '35px' }}></Image> FARIDABAD UNDER 23 MEN</Button></p>
                </Col>
                <Col md={6} xl={3}>
                  <p><Button style={{ backgroundColor: '#203EA3', borderRadius: "22px", whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}><Image src={require('../../assets/logo.png')} fluid style={{ height: '35px' }}></Image> FARIDABAD UNDER 19 MEN</Button></p>
                </Col>
                <Col md={6} xl={3}>
                  <p><Button style={{ backgroundColor: '#203EA3', borderRadius: "22px", whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}><Image src={require('../../assets/logo.png')} fluid style={{ height: '35px' }}></Image> FARIDABAD UNDER 14 MEN</Button></p>
                </Col>
                <Col md={6} xl={3}>
                  <p><Button style={{ backgroundColor: '#203EA3', borderRadius: "22px", whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}><Image src={require('../../assets/logo.png')} fluid style={{ height: '35px' }}></Image> KRUSHETRA UNDER 23 MEN</Button></p>
                </Col>

              </Row>
            </ListGroup>
          </Card>

          {/*Card:2 */}
          <Card style={{ width: '100%', marginTop: '16px', lineHeight: '1.4'}}>
            <ListGroup variant="flush">
              <Card.Header><p style={{ fontWeight: '700', fontSize: '17px', padding: '0', lineHeight: '0.4', paddingTop: '12px' }}>PLAYER STORY</p></Card.Header>
              <ListGroup.Item style={{ fontSize: '14px' }}>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries.<hr /></ListGroup.Item>
            </ListGroup>
          </Card>


        </Container>
      </div>

      {/* <Card style={{ width: '100%', marginTop: '16px', lineHeight: '1.4', zIndex: '-1' }}>*/}
     
      {/* Card:3 */}
      <div>
      
          <Container>
          <Card>
            <div style={{ width: '100%' }}>
              <h2 style={{fontSize:'19px',fontWeight:'700',paddingTop:'15px',paddingLeft:'9px'}}>BATTING STATISTICS</h2>
              <hr />
            </div>
            <Table responsive hover className='mx-2'>
              <thead className='tableHead ' style={{fontSize:'14px'}}>
                <tr>
                  <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>FORMAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>NO</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>HS</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>100s</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>50s</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B4s</th>
                  <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>B6s</th>
                  <th>CT</th>
                  <th style={{ textAlign: 'right' }}>ST</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{fontSize:'14px'}}>
                  <td style={{ textAlign: 'left' }} className='py-2'>MULTIDAY</td>
                  <td className='py-2'>45</td>
                  <td className='py-2'>41</td>
                  <td className='py-2'>5</td>
                  <td className='py-2'>1546</td>
                  <td className='py-2'>2364</td>
                  <td className='py-2'>236*</td>
                  <td className='py-2'>236.6</td>
                  <td className='py-2'>105.23</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>45</td>
                  <td className='py-2'>231</td>
                  <td className='py-2'>453</td>
                  <td className='py-2'>45</td>
                  <td style={{ textAlign: 'right' }} className='py-2'>65</td>

                </tr>
                <tr style={{fontSize:'14px'}}>
                  <td style={{ textAlign: 'left',whiteSpace:'nowrap' }} className='py-2' >LIMITED OVERS</td>
                  <td className='py-2' >45</td>
                  <td className='py-2' >41</td>
                  <td className='py-2' >5</td>
                  <td className='py-2' >1546</td>
                  <td className='py-2' >2364</td>
                  <td className='py-2' >236*</td>
                  <td className='py-2' >236.6</td>
                  <td className='py-2' >105.23</td>
                  <td className='py-2' >4</td>
                  <td className='py-2' >45</td>
                  <td className='py-2' >231</td>
                  <td className='py-2' >453</td>
                  <td className='py-2'>45</td>
                  <td style={{ textAlign: 'right' }} className='py-2'>65</td>
                </tr>
                <tr style={{fontSize:'14px'}}>
                  <td style={{ textAlign: 'left' }} className='py-2'>TWENTY 20</td>
                  <td className='py-2'>45</td>
                  <td className='py-2'>41</td>
                  <td className='py-2'>5</td>
                  <td className='py-2'>1546</td>
                  <td className='py-2'>2364</td>
                  <td className='py-2'>236*</td>
                  <td className='py-2'>236.6</td>
                  <td className='py-2'>105.23</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>45</td>
                  <td className='py-2'>231</td>
                  <td className='py-2'>453</td>
                  <td className='py-2'>45</td>
                  <td style={{ textAlign: 'right' }} className='py-2'>65</td>
                </tr>
                <tr style={{fontSize:'14px'}}>
                  <td style={{ textAlign: 'left' }} className='py-2'>TTEN</td>
                  <td className='py-2'>45</td>
                  <td className='py-2'>41</td>
                  <td className='py-2'>5</td>
                  <td className='py-2'>1546</td>
                  <td className='py-2'>2364</td>
                  <td className='py-2'>236*</td>
                  <td className='py-2'>236.6</td>
                  <td className='py-2'>105.23</td>
                  <td className='py-2'>4</td>
                  <td className='py-2'>45</td>
                  <td className='py-2'>231</td>
                  <td className='py-2'>453</td>
                  <td className='py-2'>45</td>
                  <td style={{ textAlign: 'right' }} className='py-2'>65</td>
                </tr>
              </tbody>
            </Table>
            </Card>
          </Container>
        
      </div>


      {/* Card:4 */}
      <div>
      
      <Container>
      <Card className='my-3'>
        <div style={{ width: '100%' }}>
          <h2 style={{fontSize:'19px',fontWeight:'700',paddingTop:'15px',paddingLeft:'9px'}}>BOWLING STATISTICS</h2>
          <hr />
        </div>
        <Table responsive hover className='mx-2'>
          <thead className='tableHead ' style={{fontSize:'14px'}}>
            <tr>
              <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>FORMAT</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>MAT</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>INNS</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>OVERS</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>RUNS</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BALLS</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>WKTS</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BBI</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BBM</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>AVG</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>ECO</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>SR</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>3W</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>5W</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{fontSize:'14px'}}>
              <td style={{ textAlign: 'left' }} className='py-2'>MULTIDAY</td>
              <td className='py-2'>45</td>
              <td className='py-2'>41</td>
              <td className='py-2'>5</td>
              <td className='py-2'>1546</td>
              <td className='py-2'>2364</td>
              <td className='py-2'>236</td>
              <td className='py-2'>236.6</td>
              <td className='py-2'>105.23</td>
              <td className='py-2'>4</td>
              <td className='py-2'>45</td>
              <td className='py-2'>231</td>
              <td className='py-2'>453</td>
              <td className='py-2'>45</td>
             

            </tr>
            <tr style={{fontSize:'14px'}}>
              <td style={{ textAlign: 'left',whiteSpace:'nowrap' }} className='py-2' >LIMITED OVERS</td>
              <td className='py-2' >45</td>
              <td className='py-2' >41</td>
              <td className='py-2' >5</td>
              <td className='py-2' >1546</td>
              <td className='py-2' >2364</td>
              <td className='py-2' >236</td>
              <td className='py-2' >236.6</td>
              <td className='py-2' >105.23</td>
              <td className='py-2' >4</td>
              <td className='py-2' >45</td>
              <td className='py-2' >231</td>
              <td className='py-2' >453</td>
              <td className='py-2'>45</td>
            
            </tr>
            <tr style={{fontSize:'14px'}}>
              <td style={{ textAlign: 'left' }} className='py-2'>TWENTY 20</td>
              <td className='py-2'>45</td>
              <td className='py-2'>41</td>
              <td className='py-2'>5</td>
              <td className='py-2'>1546</td>
              <td className='py-2'>2364</td>
              <td className='py-2'>236</td>
              <td className='py-2'>236.6</td>
              <td className='py-2'>105.23</td>
              <td className='py-2'>4</td>
              <td className='py-2'>45</td>
              <td className='py-2'>231</td>
              <td className='py-2'>453</td>
              <td className='py-2'>45</td>
            
            </tr>
            <tr style={{fontSize:'14px'}}>
              <td style={{ textAlign: 'left' }} className='py-2'>TTEN</td>
              <td className='py-2'>45</td>
              <td className='py-2'>41</td>
              <td className='py-2'>5</td>
              <td className='py-2'>1546</td>
              <td className='py-2'>2364</td>
              <td className='py-2'>236</td>
              <td className='py-2'>236.6</td>
              <td className='py-2'>105.23</td>
              <td className='py-2'>4</td>
              <td className='py-2'>45</td>
              <td className='py-2'>231</td>
              <td className='py-2'>453</td>
              <td className='py-2'>45</td>
           
            </tr>
          </tbody>
        </Table>
        </Card>
      </Container>
    
  </div>

  {/* Card:5 */}

  <div>
      
      <Container>
      <Card className='my-3'>
        <div style={{ width: '100%' }}>
          <h2 style={{fontSize:'19px',fontWeight:'700',paddingTop:'15px',paddingLeft:'9px'}}>RECENT 10 MATCHES</h2>
          <hr />
        </div>
        <Table responsive hover className='mx-2'>
          <thead className='tableHead ' style={{fontSize:'14px'}}>
            <tr>
              <th style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>MATCHES</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>DATE</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BATTING</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>BOWLING</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>CATCHES</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px',whiteSpace:'nowrap' }}>RUN OUTS</th>
              <th style={{ paddingTop: '8px', paddingBottom: '8px' }}>STUMPINGS</th>

            </tr>
          </thead>
          <tbody>
            <tr style={{fontSize:'14px'}}>
              <td style={{ textAlign: 'left',whiteSpace:'nowrap' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  

            </tr>
            <tr style={{fontSize:'14px'}}>
            <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  
            
            </tr>
            <tr style={{fontSize:'14px'}}>
            <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  
            
            </tr>
            <tr style={{fontSize:'14px'}}>
            <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  
            </tr>
            <tr style={{fontSize:'14px'}}>
            <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  
            </tr>
            <tr style={{fontSize:'14px'}}>
            <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  
            </tr>
            <tr style={{fontSize:'14px'}}>
            <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  
            </tr>
            <tr style={{fontSize:'14px'}}>
            <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  
            </tr>
            <tr style={{fontSize:'14px'}}>
            <td style={{ textAlign: 'left' }} className='py-2'>TEAM VS OPP TEAM</td>
              <td className='py-2'>27.SEP.2021</td>
              <td className='py-2'>41*</td>
              <td className='py-2'>3/43</td>
              <td className='py-2'>15</td>
              <td className='py-2'>2</td>
              <td className='py-2'>-</td>  
            </tr>
          </tbody>
        </Table>
        </Card>
      </Container>
    
  </div>

    </div>
  )
}

export default Bio;