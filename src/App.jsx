import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Provider from './components/Provider';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/ocean" component={Provider}/>
              <Route path="/air" component={Provider}/>
              <Route path="/customBroker" component={Provider}/>
            </Switch>
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;
