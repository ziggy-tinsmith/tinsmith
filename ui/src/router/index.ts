import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/welcome",
    name: "Welcome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "welcome" */ "@/views/ViewWelcome.vue")
  },
  {
    path: "/information",
    name: "Information",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "information" */ "@/views/ViewInformation.vue")
  }
];

const router = new VueRouter({
  mode: "abstract",
  routes
});

router.push("/welcome");

export default router;
