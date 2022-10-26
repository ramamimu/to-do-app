import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/data",
      name: "hmm",
      component: () => import("../views/BasedComponent.vue"),
    },
    {
      path: "/task/:id",
      name: "task",
      component: () => import("../views/DetailTask.vue"),
    },
  ],
});

export default router;
