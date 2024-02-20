import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (*.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const routes: RouteConfig[] = [
  {
    path: "/welcome",
    name: "Welcome",
    component: () =>
      import(/* webpackChunkName: "welcome" */ "@/views/ViewWelcome.vue")
  },
  {
    path: "/feature01",
    name: "Feature01",
    component: () =>
      import(/* webpackChunkName: "feature01" */ "@/views/ViewFeature01.vue")
  },
  {
    path: "/information",
    name: "🛈",
    component: () =>
      import(/* webpackChunkName: "information" */ "@/views/ViewInformation.vue")
  },
];

const router = new VueRouter({
  mode: "abstract",
  routes
});

router.push("/welcome");

export default router;
