import React, { useState }from "react";
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

  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <Home parentcallback = {handleCallback}/>
        </Route>

        <Route exact path="/wallet">
          <Wallet parent = {parent} coindata = {coindata}/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
