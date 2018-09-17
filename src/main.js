// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import { config } from './config'
require("firebase/firestore");


Vue.config.productionTip = false

var firebaseConfig = {
  config
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
}).then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
}).catch(function(error) {
  console.error("Error adding document: ", error);
});

db.collection("users").add({
  first: "Alan",
  middle: "Mathison",
  last: "Turing",
  born: 1912
}).then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
}).catch(function(error) {
  console.error("Error adding document: ", error);
});

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
