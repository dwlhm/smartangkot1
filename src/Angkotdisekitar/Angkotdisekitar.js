import React, { Component } from 'react';
import './Angkotdisekitar.css';
import firebase from 'firebase';

class Angkotdisekitar extends Component {

	// Add a class consturctor that assigns the initial state value:
	constructor(props) {
		super(props); 
		this.state = {
			jumlahAngkot: 0,
			latAngkot: 0,
			lonAngkot: 0
		};
		  try {
			firebase.initializeApp({
				
			apiKey: "AIzaSyD0TP7PnIPGSl2yEl_plnnsHT7-lNk2gjw",
			authDomain: "smartangkot.firebaseapp.com",
			databaseURL: "https://smartangkot.firebaseio.com",
			projectId: "smartangkot",
			storageBucket: "smartangkot.appspot.com",
			messagingSenderId: "1052207778717",
			appId: "1:1052207778717:web:553fafdd3044fe3f"
		  }
			);	
		  } catch (error) {
			  alert(error);
		  }
		

	}

	// This is called when a instance of a component is being created and
	// inserted into the DOM.
	componentWillMount () {
		var jumlah = 1;
		var db = firebase.firestore();
		var pi = Math.PI;
		var latitude, longitude;

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				//alert("we can " + position.coords.latitude + " - " + position.coords.longitude);
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;
				this.setState({ latAngkot: latitude });
				this.setState({ lonAngkot: longitude });
			});

			
			

			db.collection("angkot").get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					
					var lat1 = latitude * (pi/180);
					var lat2 = doc.data().lat * (pi/180);
					var lon2 = Number(doc.data().lon);
					var lon = longitude - (doc.data().lon);
					var lon1 = lon * (pi/180);
					var jarak = 
						(
							Math.sin(lat1) 
							* Math.sin(lat2)
						)  
							+ 
						(
							Math.cos(lat1) 
							* Math.cos(lat2) 
							* Math.cos(lon1)
						)* 1.609344; 
					console.log(jarak);
					if (jarak < 0.4) {
						this.setState({ jumlahAngkot: jumlah })
					}
					jumlah++;
				});
			})

		} else {
			alert("Geolocation api tidak diaktifkan")
		}


		
			
		
		

	}

	

	render () {
		return (
			<article className="message is-primary">
			  	<div className="message-header">
    				<p>Informasi</p>
			    	<button className="delete" aria-label="delete"></button>
				</div>
				<div className="message-body">
	  				<h3>Terdapat {this.state.jumlahAngkot} unit angkot beroperasi disekitar anda. Silakan tekan tombol Jemput Saya untuk mendapatkan penemputan.</h3>
					<br />
					<a 
						className="button is-primary"
						href="/jemputsaya"
					>
						Jemput Saya
					</a>
	  			</div>
			</article>
		)
	}
}

export default Angkotdisekitar;