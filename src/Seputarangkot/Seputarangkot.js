import React, { Component } from 'react';
import queryString from 'query-string';
import firebase from 'firebase';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default class Seputarangkot extends Component {

    // Add a class contructor
    constructor () {
        super();
        
        this.state = {
            keadaanBahaya: 0,
            berbahayaCuk: '<br />',
            ngaranAngkot: 'null'
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
        var jumlah = 0;
        let url = this.props.location.search;
        let params = queryString.parse(url);
        console.log(params.id);
        db.collection('angkot').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().berbahaya) {
                    this.setState({ keadaanBahaya: jumlah });
                    var lit = this.state.berbahayaCuk;
                    this.setState({ berbahayaCuk: lit + params.id + " dalam keadaan berbahaya.<br />" });
                    jumlah++;
                } else {
                    
                }
            })
        })
    }

    render () {
        return (
            <div className="container">
                <div className="notification">
                    {this.state.keadaanBahaya} angkot dalam keadaan bahaya.
                    {ReactHtmlParser(this.state.berbahayaCuk)}
                </div>
            </div>
        );
    }
}