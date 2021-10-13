import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    return (
        <div className="chart">
            <Line
                data={{
                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
                    datasets: [
                        {
                            label: '# of votes',
                            data: [12, 19, 3, 4, 2, 3, 6, 14, 10, 17, 18, 1, 5, 16, 15],
                            borderColor: 'rgb(75, 192, 192)'
                        }
                    ]
                }}
                width={600}
                height={400}
                options={{ 
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: {
                            beginAtZero: true,
                            grid: {
                                display: false,
                                borderColor: 'rgb(250 250 250)'
                            }
                        },
                        xAxes: {
                            beginAtZero: true,
                            grid: {
                                display: false
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default LineChart
