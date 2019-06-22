import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




Vue.use(ElementUI);
Vue.config.productionTip = false;
let app = '';
var config = {
  apiKey: "AIzaSyBFnplJdyZ2agLIHnjgF4mr8Iy7XsoBP80",
  authDomain: "pogoda-902f2.firebaseapp.com",
  databaseURL: "https://pogoda-902f2.firebaseio.com",
  projectId: "pogoda-902f2",
  storageBucket: "pogoda-902f2.appspot.com",
  messagingSenderId: "404655748762",
  appId: "1:404655748762:web:f1642c3f8eb27062"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
