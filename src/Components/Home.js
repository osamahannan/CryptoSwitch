import React, { useState, useEffect } from 'react';
import axios from "axios";
import LineChart from './LineChart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";
import walletpic from '../Assets/wallet.png';

const Coindata = ({ parentcallback, filteredWallet, graphCallback, graph, setGraph, price, setPrice, pricechange, setPricechange, id, setId }) => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=150&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
                setGraph(res.data[0]);
                setPrice(res.data[0].current_price);
                setPricechange(res.data[0].price_change_percentage_24h);

            }).catch(error => {
                console.log(error);
            })
    }, [setGraph, setPrice, setPricechange])

    const isTablet = useMediaQuery({ query: '(min-width: 1100px)' })
    const isMobile = useMediaQuery({ query: '(min-width: 450px)' })

    const dataHandler = (coin) => {
        setId(coin.id);
        setGraph(coin);
        setPrice(coin.current_price);
        setPricechange(coin.price_change_percentage_24h);
        graphCallback(coin, coin.current_price, coin.price_change_percentage_24h, coin.id);
    }


    const handleWallet = (coin, e) => {
        e.preventDefault();
        let i = 0;
        filteredWallet.forEach((el) => {
            if (el.id === coin.id) {
                toast.warn("Coin already present in the Wallet", {
                    position: "top-center",
                    autoClose: 2500
                })
                i++;
            }
        })

        if (i === 0) {
            toast.success("Coin added successfully", {
                position: "top-center",
                autoClose: 2000
            })
        }

        parentcallback(coin);
    }

    const TrendingCoins = ({ coin }) => {

        return (

            <div className="coin-detail noSelect" key={coin.id} onClick={() => dataHandler(coin)}>

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

                {isMobile ? <div className="wallet-button">
                    <button type="submit" className="btn noSelect" onClick={(e) => handleWallet(coin, e)}>Add to Wallet</button>
                </div> : <img src={walletpic} className="wallet-pic noSelect" alt="wallet pic" onClick={(e) => handleWallet(coin, e)} />}


            </div>
        )
    }

    return (
        <>
            <h2 className="trending-coins">Trending Coins</h2>
            <div className="coin-main">

                <div className="coin-container">

                    <div className="coin-column">

                        {coins.map(coin => {
                            return (
                                <>
                                    {!isTablet ?

                                        (<Link to="/LineChart" className="chart-link noSelect" key={coin.id}>
                                            <TrendingCoins coin={coin} /></Link>) :

                                        <TrendingCoins coin={coin} />}

                                </>

                            )
                        })}
                    </div>

                    {isTablet ? <LineChart
                        id={id}
                        graph={graph}
                        price={price}
                        pricechange={pricechange}
                    /> : ""}

                </div>

            </div>

            <ToastContainer />

        </>

    )
}

export default Coindata
