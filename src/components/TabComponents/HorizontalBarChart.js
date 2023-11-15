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
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    indexAxis: 'y',
    // layout:{
    //     padding:30,
    // },
    plugins:{
        legend:{
            position:'bottom'
        },
        title:{
            display: true,
            text: 'DISMISSAL MODE',
        }
    }

};

const data = {
    labels: ['CATCH', 'BOWLEDOUT', 'RUNOUT', 'STUMPING', 'LBW'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [76,100,300,67,124],
            backgroundColor: '#09248C',
        },
    ]
}
function HorizontalBarChart() {

    return (
        <div>
            <Bar options={options} data={data}/>
        </div>
    )
}

export default HorizontalBarChart