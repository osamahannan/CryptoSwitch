import React from 'react'

const Wallet = ({ filteredWallet, parent, setParent }) => {

    const increaseHandle = (wallet) => {
        // const localvolume = wallet.coinvolume
        setParent(parent.map((el) => (el.id === wallet.id && wallet.coinvolume > 0) ? {...el, coinvolume: wallet.coinvolume+1} : el))
    }

    const decreaseHandle = (wallet) => {
        // const localvolume = wallet.coinvolume
        setParent(parent.map((el) => (el.id === wallet.id && wallet.coinvolume > 1) ? {...el, coinvolume: wallet.coinvolume-1} : el))
    }

    const deleteHandle = (wallet) => {
        setParent(parent.filter((el) => el.id !== wallet.id))
    }

    return (
        <div className="main-container">
            <div className="wallet-container">
                <div className="wallet">
                    {filteredWallet.map(wallet => {
                        return (
                            <div className="wallet-coin-detail" key={wallet.id}>

                                <div className="wallet-info">
                                    <img src={wallet.image} className="coin-pic" alt="coin pic" />

                                    <div className="coin-data">
                                        <span className="coin-name">{wallet.name}</span>
                                        <span>{wallet.symbol}</span>
                                    </div>
                                </div>

                                <div className="coin-current">
                                    <span> &#x20B9; {wallet.current_price.toLocaleString()}</span>
                                    <span className={wallet.price_change_percentage_24h > 0 ? "green" : "red"}> {wallet.price_change_percentage_24h > 0 ? `+${wallet.price_change_percentage_24h.toFixed(2)}` : wallet.price_change_percentage_24h.toFixed(2)}%</span>
                                </div>

                                <div className="wallet-edit">
                                    <div className="dec-inc">
                                        <i className="fas fa-plus" onClick = {()=>increaseHandle(wallet)}></i>
                                        <span>{wallet.coinvolume}</span>
                                        <i className="fas fa-minus" onClick = {()=>decreaseHandle(wallet)}></i>
                                    </div>

                                    <div className="delete" onClick = {() => deleteHandle(wallet)}>
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
