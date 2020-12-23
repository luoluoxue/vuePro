import Vue from "vue";
import Router from "vue-router";
import index from "../view/index/index.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../view/main/main.vue")
  }
];
const router = new Router({
  routes
});
export default router;
