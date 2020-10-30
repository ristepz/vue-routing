import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Products from './pages/Products.vue';
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
    path: '/products',
    component: Products
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

