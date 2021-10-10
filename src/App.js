import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Wallet from "./Components/Wallet";


function App() {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/wallet">
          <Wallet />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
