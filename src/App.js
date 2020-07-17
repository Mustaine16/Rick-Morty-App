import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import CharactersList from "./pages/CharactersList"
import Character from "./pages/Character"

import EpisodesList from "./pages/EpisodesList"
import LocationsList from "./pages/LocationsList"


import "./styles.css"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/characters">
          <CharactersList />
        </Route>
        <Route exact path="/character/:id">
          <Character />
        </Route>
        <Route exact path="/episodes">
          <EpisodesList />
        </Route>
        <Route exact path="/locations">
          <LocationsList />
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default App;
