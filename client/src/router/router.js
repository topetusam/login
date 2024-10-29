import { createRouter, createWebHistory } from "vue-router";
import CreateAccount from '../views/CreateAccount.vue';
import Login from '../views/Login.vue';

// Definición de las rutas
const routes = [
  { path: '/login', component: Login },
];

// Creación del router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
