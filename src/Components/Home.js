import React, { useState, useEffect } from 'react';
import axios from "axios";

const Coindata = () => {

    const [coins, setCoins] = useState([]);
    // const [name, setName] = useState("");

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
                console.log(coins[0].id);
            }).catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <>
            <h2 className="trending-coins">Trending Coins</h2>
            <div className="coin-main">

                <div className="coin-container">

                    {coins.map(coin => {
                        return (
                            <div className="coin-detail">

                                <div className="coin-info">
                                    <img src={coin.image} className="coin-pic" alt="coin pic" />

                                    <div className="coin-data">
                                        <span className="coin-name">{coin.name}</span>
                                        <span>{coin.symbol}</span>
                                    </div>
                                </div>

                                <div className="coin-current">
                                    <span>{coin.current_price}</span>
                                    <span>{coin.price_change_percentage_24h}</span>
                                </div>

                                <div className="wallet-button">
                                    <button className="btn">Add to Wallet</button>
                                </div>

                            </div>
                        )
                    })}


                </div>
            </div>
        </>

    )
}

export default Coindata
