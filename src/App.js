import React from "react";
import "./App.css";
import Comics from "./containers/Comics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comicbycharacter from "./containers/Comicbycharacter";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/:characterId/comics">
            <Comicbycharacter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
