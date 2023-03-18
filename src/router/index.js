import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ReposView from "@/views/ReposView.vue";
import RepoView from "@/views/RepoView.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/repos",
    name: "repos",
    component: ReposView,
  },
  {
    path: "/repos/:id",
    name: "RepoView",
    component: RepoView,
  },
  {
    path: "/404",
    name: "404",
    component: PageNotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
