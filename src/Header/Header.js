import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Jemputsaya from '../Jemputsaya/Jemputsaya';
import Profilangkot from '../Profilangkot/Profilangkot';
import Seputarangkot from '../Seputarangkot/Seputarangkot';


export default class Header extends Component {
    render() {
        return (
            <nav 
            className="navbar" 
            role="navigation"
            aria-label="main-navigation"
          >
            <div className="navbar-brand">
              <Link 
                className="navbar-item"
                to="/"
              >
                <h1 className="title">
                  Smart Angkot
                </h1>
              </Link>
              <a 
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasic"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
    
            <div
              id="navbarBasic"
              className="navbar-menu"
            >
              <div className="navbar-end">

                    <a href="/jemputsaya/" className="navbar-item button is-primary" id="jemputsaya">
                    Jemput Saya
                    </a>
                    <a href="/profilangkot/" className="navbar-item">
                    Profil Angkot
                    </a>
                    <a href="/seputarangkot/" className="navbar-item">
                    Seputar Angkot
                    </a>

              </div>
            </div>
          </nav>
        );
    }
}