import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BattingInsight.css';
// Bar chart:
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import PieChart from './PieChart';
import HorizontalBarChart from './HorizontalBarChart';
import DoughnutChart from './DoughnutChart';
import VerticalBarChart from './VerticalBarChart';
import VerticalBarChart1 from './VarticalBarchart-comfortlevel/VerticalBarChart1';
import VerticalBarChart2 from './VarticalBarchart-comfortlevel/VerticalBarChart2';
import VerticalBarChart3 from './VarticalBarchart-comfortlevel/VerticalBarChart3';
import VerticalBarChart4 from './VarticalBarchart-comfortlevel/VerticalBarChart4';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    scales: {
        y: {
            max: 120,
            min: 0,
            //grid lines:

            // grid: {
            //     drawTicks: true,
            //     drawBorder: true,
            //     color: 'yellow'
            // },

            //dashed grid lines:

            // border: { dash: [4, 4] }, // for the grid lines
            // grid: {
            //     color: '#aaa', // for the grid lines
            //     tickColor: '#000', // for the tick mark
            //     tickBorderDash: [2, 3], // also for the tick, if long enough
            //     tickLength: 10, // just to see the dotted line
            //     tickWidth: 2,
            //     offset: true,
            //     drawTicks: true, // true is default 
            //     drawOnChartArea: true // true is default 
            // },

            // stepper count:
            ticks: {
                display: true,
                stepSize: 15
            },
            title: {
                display: true,
                text: 'RUNS',
            }

        },
        x: {
            title: {
                display: true,
                text: 'YEARS'
            }
        }
    },
    plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Performance Trend',
        },
    },
};


//Creating Data:
const data = {
    labels: [2017, 2018, 2019, 2020, 2022],
    datasets: [
        {
            label: '<30 Runs',
            data: [1, 32, 65, 11, 40],
            backgroundColor: '#6F7690'
        },
        {
            label: '30+ Runs',
            data: [61, 32, 64, 12, 33],
            backgroundColor: '#23193B'
        },
        {
            label: '50+ Runs',
            data: [50, 12, 1, 67, 66],
            backgroundColor: '#E10C08'
        },
        {
            label: '100+ Runs',
            data: [19, 34, 66, 44, 76],
            backgroundColor: '#0D60E2'
        },
        {
            label: '150+ Runs',
            data: [67, 88, 34, 22, 45],
            backgroundColor: '#03B78A'
        },
    ],
};



function BattingInsights() {
    return (
        <div>
            <Container>
                <div>
                    <Card className='my-3'>
                        <Card.Header style={{ backgroundColor: 'white' }}><h2 style={{ fontSize: '17px' }}>PERFORMANCE TREND</h2></Card.Header>
                        <Card.Body>
                            <div>
                                <Bar options={options} data={data} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='my-3'>
                        <Card.Header style={{ backgroundColor: 'white' }}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <h2 style={{ fontSize: '17px' }}>BATTING INSIGHTS</h2>
                                </Col>
                                <Col xs={12} md={{ span: 4, offset: 2 }}>
                                    <Form.Select aria-label="Default select example" style={{ backgroundColor: '#F3F3F3', fontSize: '14px', fontWeight: '500', border: 'none' }}>
                                        <option value="1">SELECT OVER PHASE</option>
                                        <option value="2">ALL</option>
                                        <option value="3">1-20 OVERS</option>
                                        <option value="4">21-40 OVERS</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Row>
                                    <Col lg={3}>
                                        <PieChart />
                                    </Col>
                                    <Col lg={5} style={{ width: '500px' }}>
                                        <HorizontalBarChart />
                                    </Col>
                                    <Col lg={3}>
                                        <DoughnutChart />
                                    </Col>
                                    <Col xs={10} lg={{ span: 6, offset: 3 }}>
                                        <VerticalBarChart />
                                    </Col>
                                </Row>
                            </div>
                            <hr />
                            <Container className='py-1'>
                                <Row className='justify-content-center'>
                                    <Tabs justify variant='pills' defaultKey='tab-1' className="mb-3 p-0 tab">
                                        <Tab eventKey='tab-1' title='ODI'>
                                            Tab 1 content
                                        </Tab>
                                        <Tab eventKey='tab-2' title='T20'>
                                            Tab 2 content
                                        </Tab>
                                        <Tab eventKey='tab-3' title='Test'>
                                            Tab 3 content
                                        </Tab>
                                    </Tabs>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>

                    <Card className='my-2'>
                        <Card.Header style={{ fontWeight: '700', backgroundColor: 'white' }}>COMFORT LEVEL-ADVANCED</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={3}>
                                    <VerticalBarChart1 />
                                </Col>
                                <Col xs={12} md={8}>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <VerticalBarChart2 />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <VerticalBarChart3 />
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                            <hr />
                            <Row>
                                <Col xs={12} md={3}>
                                    <VerticalBarChart4 title='PACE'/>
                                </Col>
                                <Col xs={12} md={3}>
                                <VerticalBarChart4 title='OFF SPIN'/>
                                </Col>
                                <Col xs={12} md={3}>
                                <VerticalBarChart4 title='LEG SPIN'/>
                                </Col>
                                <Col xs={12} md={3}>
                                <VerticalBarChart4 title='ORTHODOX'/>
                                </Col>
                                <Col xs={12} md={3}>
                                <VerticalBarChart4 title='CHINAMAN'/>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header style={{backgroundColor:'white',fontSize:'15px',fontWeight:'700'}}>COMFORT LEVEL-SIMPLE</Card.Header>
                        <Card.Body >
                            <Row>
                                <Col md={{span:3,offset:3}}>
                                    <VerticalBarChart4 title='PACE'/>
                                </Col>
                                <Col md={3}>
                                    <VerticalBarChart4 title='SPIN'/>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

        </div>
    )
}

export default BattingInsights