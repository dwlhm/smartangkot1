import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import firebase from 'firebase';
export default class Profilangkot extends Component {

    // Add a class contructor
    constructor () {
        super();
        this.state = {
            judul: "Profil Angkot",
            profil: "<span></span>"
        }
        const firebaseConfig = {
			apiKey: "AIzaSyD0TP7PnIPGSl2yEl_plnnsHT7-lNk2gjw",
			authDomain: "smartangkot.firebaseapp.com",
			databaseURL: "https://smartangkot.firebaseio.com",
			projectId: "smartangkot",
			storageBucket: "smartangkot.appspot.com",
			messagingSenderId: "1052207778717",
			appId: "1:1052207778717:web:553fafdd3044fe3f"
		  };
		firebase.initializeApp(firebaseConfig);
    }
    
    componentWillMount() {
        let db = firebase.firestore();

        db.collection("angkot").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ profil: this.state.profil + "<li><strong>" + doc.data().nama + "</strong> dengan supir bernama <strong>" + doc.data().supir + "</strong></li>" })
            })
        })
    }

    render () {
        return (
            <div className="container">
                <h3>{this.state.judul}</h3>
                <div className="information">
                    <ul>
                        {ReactHtmlParser(this.state.profil)}
                    </ul>
                </div>
            </div>
        );
    }
}