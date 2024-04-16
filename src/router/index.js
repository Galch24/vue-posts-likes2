import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import PostsPage from "@/pages/PostsPage.vue";
import PostIdPage from "@/pages/PostIdPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
