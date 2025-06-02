import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/signin", name: "sign-in", component: SignIn },
  { path: "/signup", name: "sign-up", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
