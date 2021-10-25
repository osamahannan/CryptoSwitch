import React, { useState, useEffect } from 'react';
import axios from "axios";
import LineChart from './LineChart';

const Coindata = ({parentcallback}) => {

    const [coins, setCoins] = useState([]);
    const [graph, setGraph] = useState({});
    const [price, setPrice] = useState(0);
    const [pricechange, setPricechange] = useState(0);
    const [id, setId] = useState("bitcoin");

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
                setGraph(res.data[0]);
                setPrice(res.data[0].current_price);
                setPricechange(res.data[0].price_change_percentage_24h);

            }).catch(error => {
                console.log(error);
            })
    }, [])

    const dataHandler = (coin) => {
        setId(coin.id);
        setGraph(coin);
        setPrice(coin.current_price);
        setPricechange(coin.price_change_percentage_24h);
    }

    const handleWallet = (coin) => {
        parentcallback(coin);
    }

    return (
        <>
            <h2 className="trending-coins">Trending Coins</h2>
            <div className="coin-main">

                <div className="coin-container">

                    <div className="coin-column">

                        {coins.map(coin => {
                            return (
                                <div className="coin-detail" key={coin.id} onClick={() => dataHandler(coin)}>

                                    <div className="coin-info">
                                        <img src={coin.image} className="coin-pic" alt="coin pic" />

                                        <div className="coin-data">
                                            <span className="coin-name">{coin.name}</span>
                                            <span>{coin.symbol}</span>
                                        </div>
                                    </div>

                                    <div className="coin-current">
                                        <span> &#x20B9; {coin.current_price.toLocaleString()}</span>
                                        <span className={coin.price_change_percentage_24h > 0 ? "green" : "red"}> {coin.price_change_percentage_24h > 0 ? `+${coin.price_change_percentage_24h.toFixed(2)}` : coin.price_change_percentage_24h.toFixed(2)}%</span>
                                    </div>

                                    <div className="wallet-button">
                                        <button type="submit" className="btn" onClick={ () => handleWallet(coin)}>Add to Wallet</button>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                    <div className="graph-container">
                        <div className="graph-coin">
                            <div className="graph-coin-detail" >

                                <div className="coin-info">
                                    <img src={graph.image} className="coin-pic" alt="coin pic" />

                                    <div className="coin-data">
                                        <span className="coin-name">{graph.name}</span>
                                        <span>{graph.symbol}</span>
                                    </div>
                                </div>

                                <div className="coin-current">
                                    <span> &#x20B9; {price.toLocaleString()}</span>
                                    <span className={pricechange > 0 ? "green" : "red"}> {pricechange > 0 ? `+${pricechange.toFixed(2)}` : pricechange.toFixed(2)}%</span>
                                </div>

                            </div>

                            <LineChart id={id} />
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Coindata
