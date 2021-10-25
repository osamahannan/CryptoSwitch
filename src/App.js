import React, { useState, useEffect }from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Wallet from "./Components/Wallet";

function App() {

  const [parent, setParent] = useState([]);

  const handleCallback = (childData) => {
    setParent([...parent, {...childData, coinvolume: 1}]);
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
  }, [filteredWallet, parent])


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
          <Home parentcallback = {handleCallback}/>
        </Route>

        <Route exact path="/wallet">
          <Wallet 
            filteredWallet = {filteredWallet}
            parent = {parent}
            setParent = {setParent}
          />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
