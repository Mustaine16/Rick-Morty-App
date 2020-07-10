import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CharactersContainer from "./components/character/CharactersContainer"
 import "./styles.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CharactersContainer />
        </Route>
        <Route exact path="/character/:id">Hey</Route>
      </Switch>
    </BrowserRouter>
  )

}

export default App;
