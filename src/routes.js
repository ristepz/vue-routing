import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Users from './pages/Users.vue';
import UserDetails from "./pages/UserDetails.vue";
import Contact from './pages/Contact.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/users/:username',
    name: 'userdetails',
    component: UserDetails
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

export const Router = createRouter({
  history: createWebHashHistory(),
  routes
});