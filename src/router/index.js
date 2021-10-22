import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home.vue";
import Orders from "@/views/orders.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pedidos",
    name: "Orders",
    component: Orders,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
