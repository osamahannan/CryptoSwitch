import React from 'react'

const Wallet = () => {
    return (
        <div className="main-container">
            <div className="wallet-container">
                <div className="wallet">
                    <div className="wallet-coin-detail" >

                        <div className="wallet-info">
                            <img src="" className="coin-pic" alt="coin pic" />

                            <div className="coin-data">
                                <span className="coin-name">Bitcoin</span>
                                <span>btc</span>
                            </div>
                        </div>

                        <div className="coin-current">
                            <span> &#x20B9;251000</span>
                            <span>+2.25%</span>
                        </div>

                        <div className="wallet-edit">
                            <div className="dec-inc">
                                <p>change</p>
                            </div>

                            <div className="delete">
                                <p>delete</p>
                            </div>
                        </div>

                    </div>
                    <div className="wallet-coin-detail" >

                        <div className="wallet-info">
                            <img src="" className="coin-pic" alt="coin pic" />

                            <div className="coin-data">
                                <span className="coin-name">Bitcoin</span>
                                <span>btc</span>
                            </div>
                        </div>

                        <div className="coin-current">
                            <span> &#x20B9;251000</span>
                            <span>+2.25%</span>
                        </div>

                        <div className="wallet-edit">
                            <div className="dec-inc">
                                <p>change</p>
                            </div>

                            <div className="delete">
                                <p>delete</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet
