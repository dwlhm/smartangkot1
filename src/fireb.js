import firebase from 'firebase';

export default class fireb {
    constructor() {
        super();
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
}
