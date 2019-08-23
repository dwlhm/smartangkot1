import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Angkotdisekitar from './Angkotdisekitar/Angkotdisekitar';
import Home from './Home';
import Jemputsaya from './Jemputsaya/Jemputsaya';
import Profilangkot from './Profilangkot/Profilangkot';
import Seputarangkot from './Seputarangkot/Seputarangkot';
import Header from './Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />  
        <Route exact path="/" component={Home} />
        <Route path="/jemputsaya/" component={Jemputsaya} />
        <Route path="/profilangkot/" component={Profilangkot} />
        <Route path="/seputarangkot/" component={Seputarangkot} />
      </Router>
    </div>
  );
}

export default App;
