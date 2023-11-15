import React from 'react';
import Card from 'react-bootstrap/Card';
import './VerticalBarChart.css';

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        y: 
          {
            ticks:{
            display:false,
        },
            grid:{
                color:'white'
            }
          },
          x: 
          {
            grid:{
                color:'white'
            }
          }
        
      },
    plugins: {
        legend: {
            display: false
        },
        // title: {
        //     display: true,
        // },
    },
};

const labels = ['AVG', 'SR', 'DIS'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [46.5, 135.25, 6],
            backgroundColor: ['#496DE7', '#46C8A8', '#F456A6'],

        },
    ],
};

function VerticalBarChart1() {
    return (
        <div>
            <Card className='Card'>
                <Card.Body style={{ width: '90%', height: '330px', paddingBottom: '50px',paddingLeft:'20px' }}>
                    <h5 className='text-center' style={{ textDecoration: 'underline', fontSize: '15px', color: '#A3A3A3' }}><span style={{ color: 'black' }}>PACE</span></h5>
                    <Bar options={options} data={data} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default VerticalBarChart1