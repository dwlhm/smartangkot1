import React from 'react';

import Header from './Header/Header';
import Angkotdisekitar from './Angkotdisekitar/Angkotdisekitar';

export default class Home extends React.Component {
    render () {
        return (

                <div className="container">
                    <div className="hero">
                    <div className="hero-body">
                        <Angkotdisekitar />
                    </div>
                    </div>
                </div>

        );
    }
}
