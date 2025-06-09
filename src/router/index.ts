import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import App from "@/views/App.vue";
import MainPage from "@/views/MainPage.vue";
import Search from "@/views/Search.vue";
import SavedOffers from "@/views/SavedOffers.vue";
import UserConfig from "@/views/UserConfig.vue";

const routes = [
  { path: "/", name: "home", component: Homepage },
  { path: "/signin", name: "sign-in", component: SignIn },
  { path: "/signup", name: "sign-up", component: SignUp },
  {
    path: "/app",
    name: "app",
    component: App,
    children: [
      {
        path: "",
        name: "main-page",
        component: MainPage,
      },
      {
        path: "search",
        name: "search",
        component: Search,
      },
      {
        path: "savedoffers",
        name: "saved-offers",
        component: SavedOffers,
      },
      {
        path: "userconfig",
        name: "user-config",
        component: UserConfig,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
