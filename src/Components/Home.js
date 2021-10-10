import React, { useState, useEffect } from 'react';
import axios from "axios";

const Coindata = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <>
            <h2 className="trending-coins">Trending Coins</h2>
            <div className="coin-main">

                <div className="coin-container">

                    <div className="coin-detail">

                        <div className="coin-info">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className="coin-pic" alt="coin pic" />

                            <div className="coin-data">
                                <span className="coin-name">Bitcoin</span>
                                <span>BTC</span>
                            </div>
                        </div>

                        <div className="coin-current">
                            <span>Rs 42,89,918.15</span>
                            <span>+1.64%</span>
                        </div>

                        <div className="wallet-button">
                            <button className="btn">Add to Wallet</button>
                        </div>

                    </div>
                    <div className="coin-detail">

                        <div className="coin-info">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className="coin-pic" alt="coin pic" />

                            <div className="coin-data">
                                <span className="coin-name">Bitcoin</span>
                                <span>BTC</span>
                            </div>
                        </div>

                        <div className="coin-current">
                            <span>Rs 42,89,918.15</span>
                            <span>+1.64%</span>
                        </div>

                        <div className="wallet-button">
                            <button className="btn">Add to Wallet</button>
                        </div>

                    </div>
                    <div className="coin-detail">

                        <div className="coin-info">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className="coin-pic" alt="coin pic" />

                            <div className="coin-data">
                                <span className="coin-name">Bitcoin</span>
                                <span>BTC</span>
                            </div>
                        </div>

                        <div className="coin-current">
                            <span>Rs 42,89,918.15</span>
                            <span>+1.64%</span>
                        </div>

                        <div className="wallet-button">
                            <button className="btn">Add to Wallet</button>
                        </div>

                    </div>
                    <div className="coin-detail">

                        <div className="coin-info">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className="coin-pic" alt="coin pic" />

                            <div className="coin-data">
                                <span className="coin-name">Bitcoin</span>
                                <span>BTC</span>
                            </div>
                        </div>

                        <div className="coin-current">
                            <span>Rs 42,89,918.15</span>
                            <span>+1.64%</span>
                        </div>

                        <div className="wallet-button">
                            <button className="btn">Add to Wallet</button>
                        </div>

                    </div>
                    <div className="coin-detail">

                        <div className="coin-info">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className="coin-pic" alt="coin pic" />

                            <div className="coin-data">
                                <span className="coin-name">Bitcoin</span>
                                <span>BTC</span>
                            </div>
                        </div>

                        <div className="coin-current">
                            <span>Rs 42,89,918.15</span>
                            <span>+1.64%</span>
                        </div>

                        <div className="wallet-button">
                            <button className="btn">Add to Wallet</button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Coindata
