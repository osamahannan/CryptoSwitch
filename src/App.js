import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Wallet from "./Components/Wallet";

function App() {

  // const [Parent, setParent] = useState({});

  // const handleCallback = (childData) => {
  //   setParent(childData);
  // }

  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
          {/* <Home parentcallback = {handleCallback}/> */}
        </Route>

        <Route exact path="/wallet">
          <Wallet />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
