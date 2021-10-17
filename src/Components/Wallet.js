import React from 'react'

const Wallet = (parent) => {

    // const wallet = props.parent;

    console.log(parent);

    return (
        <div className="main-container">
            <div className="wallet-container">
                <div className="wallet">
                    {parent.parent.map(wallets => {
                        return (
                            <div className="wallet-coin-detail" key ={wallets.id}>

                                <div className="wallet-info">
                                    <img src={wallets.image} className="coin-pic" alt="coin pic" />

                                    <div className="coin-data">
                                        <span className="coin-name">{wallets.name}</span>
                                        <span>{wallets.symbol}</span>
                                    </div>
                                </div>

                                <div className="coin-current">
                                    <span> &#x20B9;251000</span>
                                    <span>+2.25%</span>
                                </div>

                                <div className="wallet-edit">
                                    <div className="dec-inc">
                                        <i className="fas fa-plus"></i>
                                        <span>10</span>
                                        <i className="fas fa-minus"></i>
                                    </div>

                                    <div className="delete">
                                        <i className="fas fa-trash"></i>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Wallet
