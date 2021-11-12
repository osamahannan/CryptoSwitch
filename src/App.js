import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import LineChart from "./Components/LineChart";
import Navbar from "./Components/Navbar";
import Wallet from "./Components/Wallet";

function App() {

  const [parent, setParent] = useState([]);
  const [graph, setGraph] = useState({});
  const [price, setPrice] = useState(0);
  const [pricechange, setPricechange] = useState(0);
  const [id, setId] = useState("bitcoin");
  const [showLink, setShowLink] = useState(1);

  const handleCallback = (childData) => {
    setParent([...parent, { ...childData, coinvolume: 1 }]);
  }

  const graphCallback = (graph, price, pricechange, id) => {
    setGraph(graph);
    setPrice(price);
    setPricechange(pricechange);
    setId(id);
  }

  const filteredWallet = parent.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)

  useEffect(() => {
    getLocalWallet();
  }, [])

  useEffect(() => {
    const saveLocalWallet = () => {
      localStorage.setItem("wallet", JSON.stringify(filteredWallet));
    }
    saveLocalWallet();
  }, [filteredWallet, parent])


  const getLocalWallet = () => {
    if (localStorage.getItem("wallet") == null) {
      localStorage.setItem("wallet", JSON.stringify([]));
    }
    else {
      let localWallet = JSON.parse(localStorage.getItem("wallet"));
      setParent(localWallet);
    }
  }

  return (

    <Router>
      <Navbar showLink = {showLink} setShowLink = {setShowLink} />

      <Switch>
        <Route exact path="/">
          <Home
            parentcallback={handleCallback}
            filteredWallet={filteredWallet}
            graphCallback = {graphCallback}
            id = {id}
            setId = {setId}
            graph = {graph}
            setGraph = {setGraph}
            price = {price}
            setPrice = {setPrice}
            pricechange = {pricechange}
            setPricechange = {setPricechange}
          />
        </Route>

        <Route exact path="/wallet">
          <Wallet
            filteredWallet={filteredWallet}
            parent={parent}
            setParent={setParent}
            setShowLink = {setShowLink}
          />
        </Route>

        <Route exact path="/LineChart">
          <LineChart 
            id = {id}
            graph = {graph}
            price = {price}
            pricechange = {pricechange}
          />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
