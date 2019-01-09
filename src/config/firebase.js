import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDovAnDE1vmgI6H0ZTbIhfJt_eijDNUPtI",
    authDomain: "currency-rate-5d04c.firebaseapp.com",
    databaseURL: "https://currency-rate-5d04c.firebaseio.com",
    projectId: "currency-rate-5d04c",
    storageBucket: "currency-rate-5d04c.appspot.com",
    messagingSenderId: "182613780192"
};
const fire = firebase.initializeApp(config)
export default fire