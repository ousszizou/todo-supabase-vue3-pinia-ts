import {createRouter, createWebHistory} from "vue-router";

import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
