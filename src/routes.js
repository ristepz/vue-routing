import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Users from './pages/Users.vue';
import UserDetails from "./pages/UserDetails.vue";
import Contact from './pages/Contact.vue';


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/users/:username',
    component: UserDetails
  },
  {
    path: '/contact',
    component: Contact
  }
];

export const Router = createRouter({
  history: createWebHashHistory(),
  routes
});