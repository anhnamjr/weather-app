import React, { useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { LocationContext } from "./context/LocationContext";
import {Home, Location} from "./pages"
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [listLocation, setListLocation] = useState([]);
  return (
    <div className="App">
      <LocationContext.Provider value={{location, setLocation, listLocation, setListLocation}}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/:loc">
              <Location />
            </Route>
          </Switch>
        </Router>
      </LocationContext.Provider>
    </div>
  );
}

export default App;
