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
import PublishOffer from "@/views/app/PublishOffer.vue";

const routes = [
  { path: "/", name: "homepage", component: Homepage },
  { path: "/sign-in", name: "sign-in", component: SignIn },
  { path: "/sign-up", name: "sign-up", component: SignUp },
  {
    path: "/app",
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
        path: "saved-offers",
        name: "saved-offers",
        component: SavedOffers,
      },
      {
        path: "user-config",
        name: "user-config",
        component: UserConfig,
      },
      {
        path: "job-details/:id",
        name: "job-details",
        component: JobDetails,
        props: true, // Pass route params as props
      },
      {
        path: "publish-offer",
        name: "publish-offer",
        component: PublishOffer,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
