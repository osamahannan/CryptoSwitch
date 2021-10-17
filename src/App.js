import React, { useState }from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Wallet from "./Components/Wallet";

function App() {

  const [parent, setParent] = useState([]);

  const handleCallback = (childData) => {
    setParent([...parent, childData]);
    // console.log(parent);
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
          <Wallet parent = {parent}/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
