import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import login from './views/login.vue';
import signup from './views/signup.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) next('home');
  else next();
});

export default router;