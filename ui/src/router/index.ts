import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (*.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const routes: RouteConfig[] = [
  {
    path: "/feature01",
    name: "Feature01",
    component: () =>
      import(/* webpackChunkName: "feature01" */ "@/views/ViewFeature01.vue")
  },
  {
    path: "/feature02",
    name: "Feature02",
    component: () =>
      import(/* webpackChunkName: "feature02" */ "@/views/ViewFeature02.vue")
  },
  {
    path: "/feature03",
    name: "Feature03",
    component: () =>
      import(/* webpackChunkName: "feature03" */ "@/views/ViewFeature03.vue")
  },
  {
    path: "/feature04a",
    name: "Feature04A",
    component: () =>
      import(/* webpackChunkName: "feature04a" */ "@/views/ViewFeature04A.vue")
  },
  {
    path: "/feature04b",
    name: "Feature04B",
    component: () =>
      import(/* webpackChunkName: "feature04b" */ "@/views/ViewFeature04B.vue")
  },
  {
    path: "/feature05",
    name: "Feature05",
    component: () =>
      import(/* webpackChunkName: "feature05" */ "@/views/ViewFeature05.vue")
  },
  {
    path: "/feature06",
    name: "Feature06",
    component: () =>
      import(/* webpackChunkName: "feature06" */ "@/views/ViewFeature06.vue")
  },
  {
    path: "/feature07",
    name: "Feature07",
    component: () =>
      import(/* webpackChunkName: "feature07" */ "@/views/ViewFeature07.vue")
  },
  {
    path: "/feature08a",
    name: "Feature08A",
    component: () =>
      import(/* webpackChunkName: "feature08a" */ "@/views/ViewFeature08A.vue")
  },
  {
    path: "/feature08b",
    name: "Feature08B",
    component: () =>
      import(/* webpackChunkName: "feature08b" */ "@/views/ViewFeature08B.vue")
  },
  {
    path: "/feature09a",
    name: "Feature09A",
    component: () =>
      import(/* webpackChunkName: "feature09a" */ "@/views/ViewFeature09A.vue")
  },
  {
    path: "/feature09b",
    name: "Feature09B",
    component: () =>
      import(/* webpackChunkName: "feature09b" */ "@/views/ViewFeature09B.vue")
  },
  {
    path: "/feature10",
    name: "Feature10",
    component: () =>
      import(/* webpackChunkName: "feature10" */ "@/views/ViewFeature10.vue")
  },
  {
    path: "/feature11",
    name: "Feature11",
    component: () =>
      import(/* webpackChunkName: "feature11" */ "@/views/ViewFeature11.vue")
  },
  {
    path: "/feature12",
    name: "Feature12",
    component: () =>
      import(/* webpackChunkName: "feature12" */ "@/views/ViewFeature12.vue")
  },
  {
    path: "/feature13",
    name: "Feature13",
    component: () =>
      import(/* webpackChunkName: "feature13" */ "@/views/ViewFeature13.vue")
  },
  {
    path: "/feature14",
    name: "Feature14",
    component: () =>
      import(/* webpackChunkName: "feature14" */ "@/views/ViewFeature14.vue")
  },
  {
    path: "/feature15",
    name: "Feature15",
    component: () =>
      import(/* webpackChunkName: "feature15" */ "@/views/ViewFeature15.vue")
  },
  {
    path: "/feature16",
    name: "Feature16",
    component: () =>
      import(/* webpackChunkName: "feature16" */ "@/views/ViewFeature16.vue")
  },
  {
    path: "/feature17",
    name: "Feature17",
    component: () =>
      import(/* webpackChunkName: "feature17" */ "@/views/ViewFeature17.vue")
  },
  {
    path: "/feature18",
    name: "Feature18",
    component: () =>
      import(/* webpackChunkName: "feature18" */ "@/views/ViewFeature18.vue")
  },
  {
    path: "/feature19",
    name: "Feature19",
    component: () =>
      import(/* webpackChunkName: "feature19" */ "@/views/ViewFeature19.vue")
  },
  {
    path: "/feature20",
    name: "Feature20",
    component: () =>
      import(/* webpackChunkName: "feature20" */ "@/views/ViewFeature20.vue")
  },
  {
    path: "/feature21",
    name: "Feature21",
    component: () =>
      import(/* webpackChunkName: "feature21" */ "@/views/ViewFeature21.vue")
  },
  {
    path: "/feature22",
    name: "Feature22",
    component: () =>
      import(/* webpackChunkName: "feature22" */ "@/views/ViewFeature22.vue")
  },
  {
    path: "/feature23",
    name: "Feature23",
    component: () =>
      import(/* webpackChunkName: "feature23" */ "@/views/ViewFeature23.vue")
  },
  {
    path: "/feature24",
    name: "Feature24",
    component: () =>
      import(/* webpackChunkName: "feature24" */ "@/views/ViewFeature24.vue")
  },
  {
    path: "/feature25",
    name: "Feature25",
    component: () =>
      import(/* webpackChunkName: "feature25" */ "@/views/ViewFeature25.vue")
  },
  {
    path: "/feature26",
    name: "Feature26",
    component: () =>
      import(/* webpackChunkName: "feature26" */ "@/views/ViewFeature26.vue")
  },
  {
    path: "/feature27",
    name: "Feature27",
    component: () =>
      import(/* webpackChunkName: "feature27" */ "@/views/ViewFeature27.vue")
  },
  {
    path: "/feature28",
    name: "Feature28",
    component: () =>
      import(/* webpackChunkName: "feature28" */ "@/views/ViewFeature28.vue")
  },
  {
    path: "/feature29",
    name: "Feature29",
    component: () =>
      import(/* webpackChunkName: "feature29" */ "@/views/ViewFeature29.vue")
  },
  {
    path: "/feature30",
    name: "Feature30",
    component: () =>
      import(/* webpackChunkName: "feature30" */ "@/views/ViewFeature30.vue")
  },
  {
    path: "/feature31",
    name: "Feature31",
    component: () =>
      import(/* webpackChunkName: "feature31" */ "@/views/ViewFeature31.vue")
  },
  {
    path: "/feature32",
    name: "Feature32",
    component: () =>
      import(/* webpackChunkName: "feature32" */ "@/views/ViewFeature32.vue")
  },
  {
    path: "/feature33",
    name: "Feature33",
    component: () =>
      import(/* webpackChunkName: "feature33" */ "@/views/ViewFeature33.vue")
  },
  {
    path: "/feature34",
    name: "Feature34",
    component: () =>
      import(/* webpackChunkName: "feature34" */ "@/views/ViewFeature34.vue")
  },
  {
    path: "/feature35",
    name: "Feature35",
    component: () =>
      import(/* webpackChunkName: "feature35" */ "@/views/ViewFeature35.vue")
  },
  {
    path: "/feature39",
    name: "Feature39",
    component: () =>
      import(/* webpackChunkName: "feature39" */ "@/views/ViewFeature39.vue")
  },
  {
    path: "/feature40",
    name: "Feature40",
    component: () =>
      import(/* webpackChunkName: "feature40" */ "@/views/ViewFeature40.vue")
  },
  {
    path: "/feature41",
    name: "Feature41",
    component: () =>
      import(/* webpackChunkName: "feature41" */ "@/views/ViewFeature41.vue")
  },
  {
    path: "/feature43",
    name: "Feature43",
    component: () =>
      import(/* webpackChunkName: "feature43" */ "@/views/ViewFeature43.vue")
  },
  {
    path: "/feature44",
    name: "Feature44",
    component: () =>
      import(/* webpackChunkName: "feature44" */ "@/views/ViewFeature44.vue")
  },
  {
    path: "/feature45",
    name: "Feature45",
    component: () =>
      import(/* webpackChunkName: "feature45" */ "@/views/ViewFeature45.vue")
  },
  {
    path: "/feature46",
    name: "Feature46",
    component: () =>
      import(/* webpackChunkName: "feature46" */ "@/views/ViewFeature46.vue")
  },
  {
    path: "/feature47",
    name: "Feature47",
    component: () =>
      import(/* webpackChunkName: "feature47" */ "@/views/ViewFeature47.vue")
  },
  {
    path: "/feature48",
    name: "Feature48",
    component: () =>
      import(/* webpackChunkName: "feature48" */ "@/views/ViewFeature48.vue")
  },
  {
    path: "/feature49",
    name: "Feature49",
    component: () =>
      import(/* webpackChunkName: "feature49" */ "@/views/ViewFeature49.vue")
  },
  {
    path: "/feature50",
    name: "Feature50",
    component: () =>
      import(/* webpackChunkName: "feature50" */ "@/views/ViewFeature50.vue")
  },
  {
    path: "/feature51",
    name: "Feature51",
    component: () =>
      import(/* webpackChunkName: "feature51" */ "@/views/ViewFeature51.vue")
  },
  {
    path: "/feature52",
    name: "Feature52",
    component: () =>
      import(/* webpackChunkName: "feature52" */ "@/views/ViewFeature52.vue")
  },
  {
    path: "/feature53",
    name: "Feature53",
    component: () =>
      import(/* webpackChunkName: "feature53" */ "@/views/ViewFeature53.vue")
  },
  {
    path: "/feature54",
    name: "Feature54",
    component: () =>
      import(/* webpackChunkName: "feature54" */ "@/views/ViewFeature54.vue")
  },
  {
    path: "/feature55",
    name: "Feature55",
    component: () =>
      import(/* webpackChunkName: "feature55" */ "@/views/ViewFeature55.vue")
  },
  {
    path: "/feature56",
    name: "Feature56",
    component: () =>
      import(/* webpackChunkName: "feature56" */ "@/views/ViewFeature56.vue")
  },
  {
    path: "/feature57",
    name: "Feature57",
    component: () =>
      import(/* webpackChunkName: "feature57" */ "@/views/ViewFeature57.vue")
  },
  {
    path: "/information",
    name: "ⓘ",
    component: () =>
      import(/* webpackChunkName: "information" */ "@/views/ViewInformation.vue")
  },
];

const router = new VueRouter({
  mode: "abstract",
  routes
});

router.push("/information");

export default router;
