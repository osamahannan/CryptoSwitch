import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Wallet = ({ filteredWallet, parent, setParent, setShowLink }) => {

    const increaseHandle = (wallet) => {
        setParent(parent.map((el) => (el.id === wallet.id && wallet.coinvolume > 0) ? { ...el, coinvolume: wallet.coinvolume + 1 } : el))
    }

    const decreaseHandle = (wallet) => {
        setParent(parent.map((el) => (el.id === wallet.id && wallet.coinvolume > 1) ? { ...el, coinvolume: wallet.coinvolume - 1 } : el))
    }

    const deleteHandle = (wallet) => {
        toast.success("Coin deleted successfully", {
            position: "top-center",
            autoClose: 2000
        })
        setParent(parent.filter((el) => el.id !== wallet.id))
    }

    return (

        <>
            <div className="main-container">
                <div className="wallet-container">

                    <div className="wallet-name">
                        <h2>Your Wallet</h2>
                    </div>

                    <div className="wallet">
                        {filteredWallet.length > 0 ? (filteredWallet.map(wallet => {
                            return (
                                <div className="wallet-coin-detail" key={wallet.id}>

                                    <div className="wallet-coin-container">

                                        <div className="wallet-info">
                                            <img src={wallet.image} className="coin-pic" alt="coin pic" />

                                            <div className="coin-data">
                                                <span className="coin-name">{wallet.name}</span>
                                                <span>{wallet.symbol}</span>
                                            </div>
                                        </div>

                                        <div className="wallet-current">
                                            <span> &#x20B9; {wallet.current_price.toLocaleString()}</span>
                                            <span className={wallet.price_change_percentage_24h > 0 ? "green" : "red"}> {wallet.price_change_percentage_24h > 0 ? `+${wallet.price_change_percentage_24h.toFixed(2)}` : wallet.price_change_percentage_24h.toFixed(2)}%</span>
                                        </div>
                                    </div>

                                    <div className="wallet-edit">
                                        <div className="dec-inc">
                                            <i className="fas fa-minus" onClick={() => decreaseHandle(wallet)}></i>
                                            <span>{wallet.coinvolume}</span>
                                            <i className="fas fa-plus" onClick={() => increaseHandle(wallet)}></i>
                                        </div>

                                        <div className="delete" onClick={() => deleteHandle(wallet)}>
                                            <i className="fas fa-trash"></i>
                                        </div>
                                    </div>

                                </div>
                            )
                        })) :
                            (
                                <div className="empty">
                                    <h1>Oops! your wallet is empty</h1>
                                    <button><Link to="/" className="back-button" onClick={()=>setShowLink(1)}>Add Coin</Link></button>
                                </div>
                            )}
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Wallet
