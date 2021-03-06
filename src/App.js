import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'
import Home from './pages/Home'

import NavBar from './components/NavBar'

function App() {
  
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
