import React, { Component } from 'react';
import firebase from 'firebase';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import randtoken from 'rand-token';

export default class Jemputsaya extends Component {

        
    // Add a class contructor
    constructor () {
        super();
        this.state = {
            status: "Mencari...",
            lat: 0,
            lon: 0,
            naik: false,
            turun: false,
            button: "<span></span>"
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

    componentWillMount () {
        var db = firebase.firestore();
        var db1 = firebase.firestore();
        var db2 = firebase.firestore();
        var longitude, latitude;
        var randToken = randtoken.generate(16);
        

        if (navigator.geolocation) {
            var data;
            navigator.geolocation.getCurrentPosition((position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                
                try {
                    var lat = Number(latitude);
                    var lon = Number(longitude);
    
                    db.collection("penumpang").doc(randToken).set({
                        id: randToken,
                        lat: lat,
                        lon: lon,
                        status: this.state.status,
                        naik: this.state.naik,
                        turun: this.state.turun,
                        angkot: "none"
                    });
                } catch (error) {
                    alert(error);
                }
                this.menungguID = setInterval(() => {
                    try {
                        var angkotRef = db1.collection("penumpang").doc(randToken);
                        var getDoc = angkotRef.get()
                            .then(doc => {
                                if (!doc.exists) {
                                    console.log('No such document!');
                                } else {
                                    console.log(doc.data().naik + " -- " + doc.data().turun);
                                    
                                    if (doc.data().naik) {
                                        this.setState({ status: "Satu angkot menemput anda kelokasi..."});
                                        angkotRef.update({ naik: true });
                                        this.setState({ button: "Biaya yang dibebankan kepada anda: <strong>5000</strong><br /><a href='/seputarangkot?id=" + doc.data().angkot + "'>Keadaan bahaya</a>" });
                                        if (doc.data().turun) {
                                            this.setState({ status: "Terimakasih telah menggunakan jasa kami :)" });
                                            angkotRef.update({ turun: true });
                                            clearInterval(this.menungguID);
                                        } else {
                                            
                                        }
                                    } else {
                                        console.log("Please wait...");
                                    }
                                }
                            })
                    } catch (error) {
                        console.log(error);
                    }
                }, 1000)

                this.setState({ lat: latitude });
                this.setState({ lon: longitude });
            });

            

            
        }
        

    }

    render () {
        return (
            <div className="container">
                <div className="notification">
                    {this.state.status}
                    <br />
                    {ReactHtmlParser(this.state.button)}

                </div>
            </div>
        );
    }
}
