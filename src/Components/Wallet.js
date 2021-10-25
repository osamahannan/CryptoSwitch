import React from 'react'

const Wallet = ({ filteredWallet, parent, setParent }) => {

    const increaseHandle = (wallets) => {
        const localvolume = wallets.coinvolume
        setParent(parent.map((el) => (el.id === wallets.id) ? {...el, coinvolume: localvolume+1} : el))
    }

    const decreaseHandle = (wallets) => {
        const localvolume = wallets.coinvolume
        setParent(parent.map((el) => (el.id === wallets.id) ? {...el, coinvolume: localvolume-1} : el))
    }

    const deleteHandle = (wallets) => {
        setParent(parent.filter((el) => el.id !== wallets.id))
    }

    return (
        <div className="main-container">
            <div className="wallet-container">
                <div className="wallet">
                    {filteredWallet.map(wallets => {
                        return (
                            <div className="wallet-coin-detail" key={wallets.id}>

                                <div className="wallet-info">
                                    <img src={wallets.image} className="coin-pic" alt="coin pic" />

                                    <div className="coin-data">
                                        <span className="coin-name">{wallets.name}</span>
                                        <span>{wallets.symbol}</span>
                                    </div>
                                </div>

                                <div className="coin-current">
                                    <span> &#x20B9; {wallets.current_price.toLocaleString()}</span>
                                    <span className={wallets.price_change_percentage_24h > 0 ? "green" : "red"}> {wallets.price_change_percentage_24h > 0 ? `+${wallets.price_change_percentage_24h.toFixed(2)}` : wallets.price_change_percentage_24h.toFixed(2)}%</span>
                                </div>

                                <div className="wallet-edit">
                                    <div className="dec-inc">
                                        <i className="fas fa-plus" onClick = {()=>increaseHandle(wallets)}></i>
                                        <span>{wallets.coinvolume}</span>
                                        <i className="fas fa-minus" onClick = {()=>decreaseHandle(wallets)}></i>
                                    </div>

                                    <div className="delete" onClick = {() => deleteHandle(wallets)}>
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
