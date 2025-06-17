import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage.vue";
import SignIn from "@/views/access/SignIn.vue";
import SignUp from "@/views/access/SignUp.vue";
import AppContent from "@/views/app/AppContent.vue";
import MainPage from "@/views/app/MainPage.vue";
import Search from "@/views/app/Search.vue";
import SavedOffers from "@/views/app/SavedOffers.vue";
import UserConfig from "@/views/app/UserConfig.vue";
import JobDetails from "@/views/app/JobDetails.vue";

const routes = [
  { path: "/", name: "home", component: Homepage },
  { path: "/signin", name: "sign-in", component: SignIn },
  { path: "/signup", name: "sign-up", component: SignUp },
  {
    path: "/app",
    name: "app",
    component: AppContent,
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
      {
        path: "/app/jobdetails/:id",
        name: "job-details",
        component: JobDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
