import React from 'react';
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
  
const labels = ['1S', '2S', '4S', '6S'];

const options={
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'SCORING REGION',
        },
    },
}

const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:[423,243,250,180],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  

function VerticalBarChart() {
  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  )
}

export default VerticalBarChart