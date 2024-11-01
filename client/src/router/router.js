import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

// Definición de las rutas
const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
];

// Creación del router
const router = createRouter({
  history: createWebHistory('/#/login'), // Usa '/login/' si es necesario
  routes,
});

export default router;
