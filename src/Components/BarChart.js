import React from 'react'
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    return (
        <div className="chart">
            <Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: '# of votes',
                            data: [12, 19, 3, 4, 2, 3]
                        }
                    ]
                }}
                width={600}
                height={400}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}

export default BarChart
