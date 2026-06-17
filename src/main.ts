import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "@app/App.vue";
import { componentRoutes } from "./pages/components/routes";
import ComponentsIndex from "./pages/components/Index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/components" },
    { path: "/components", component: ComponentsIndex },
    ...componentRoutes,
    { path: "/:pathMatch(.*)*", redirect: "/components" },
  ],
});

createApp(App).use(router).mount("#app");
