/**
 * Created by jaeyoung on 8/5/17.
 */
const firebase = require("firebase");


const init = function() {
    const config = require('./firebaseauth.json');
    // console.log('config=',config);
    firebase.initializeApp(config);
};

module.exports = init;