import Vue from "vue";
import VueRouter from "vue-router";

import Form from "./components/Form.vue";
import UserList from "./components/UserList.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/form" },
    { path: "/form", component: Form },
    { path: "/usuarios", component: UserList },
  ],
});
