import { createRouter, createWebHistory } from "vue-router";

import Auth from "../layouts/Auth.vue"; 

import Login from "../views/auth/login.vue";


const routes = [
    {
      path: "/auth",
      redirect: "/auth/login", // Redirection par défaut
      component: Auth, // Utilise le layout Auth.vue
      children: [
        {
          path: "login", // Route pour la page Login
          component: Login,
        },
      ],
    },
    { path: "/", redirect: "/auth/login" }, // Redirection par défaut
    { path: "/:pathMatch(.*)*", redirect: "/auth/login" }, // Page 404
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
