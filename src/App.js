import React, { useState, useEffect }from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Wallet from "./Components/Wallet";

function App() {

  const [parent, setParent] = useState([]);
  const [coindata, setCoindata] = useState({});

  const handleCallback = (childData) => {
    setCoindata(childData);
    setParent([...parent, childData]);
  }
  
  
  const filteredWallet = parent.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
  
  useEffect(() => {
    getLocalWallet();
  }, [])

  useEffect(() => {
    const saveLocalWallet = () => {
      localStorage.setItem("wallet", JSON.stringify(filteredWallet));
    }
    saveLocalWallet();
  }, [parent])


  const getLocalWallet = () => {
    if(localStorage.getItem("wallet") == null) {
      localStorage.setItem("wallet", JSON.stringify([]));
    }
    else {
      let localWallet = JSON.parse(localStorage.getItem("wallet"));
      setParent(localWallet);
    }
  }

  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <Home parentcallback = {handleCallback}/>
        </Route>

        <Route exact path="/wallet">
          <Wallet filteredWallet = {filteredWallet} coindata = {coindata}/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
