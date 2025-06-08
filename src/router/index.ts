import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import App from "@/views/App.vue";

const routes = [
  { path: "/", name: "home", component: Homepage },
  { path: "/signin", name: "sign-in", component: SignIn },
  { path: "/signup", name: "sign-up", component: SignUp },
  { path: "/app", name: "app", component: App },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
