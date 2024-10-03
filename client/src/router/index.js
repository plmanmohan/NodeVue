import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import AddProduct from '../components/AddProduct.vue';
import AddUser from '../components/AddUser.vue';
import Login from '../components/UserLogin.vue';
import Register from '../components/UserRegister.vue';
import Profile from '../views/UserProfile.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/add-product', component: AddProduct },
    { path: '/add-user', component: AddUser },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
