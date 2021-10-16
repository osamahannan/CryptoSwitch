import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import axios from "axios";

const LineChart = (id) => {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id.id}/market_chart?vs_currency=INR&days=15&interval=daily`)
            .then(res => {
                // setHistory(res.data.prices.filter(coindata => 
                //     coindata[1]
                // ))
                setHistory(res.data.prices);
            }).catch(error => {
                console.log(error);
            })
    }, [id.id])

    return (
        <div className="chart">
            <Line
                data={{
                    labels: ['16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                    datasets: [
                        {
                            label: 'price of coin',
                            data: [history[0], history[1], history[2], history[3], history[4], history[5], history[6], history[7], history[8], history[9], history[10], history[11], history[12], history[13], history[14], history[15]],
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
