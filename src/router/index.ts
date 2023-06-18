// ルーティング設定を行うファイル
// src/main.ts に import されている
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import AppTop from "@/views/AppTop.vue";
// import HomeView from "../views/HomeView.vue";

const routeSettings: RouteRecordRaw[] = [{ path: "/", name: "AppTop", component: AppTop }];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // routes: [
    //     {
    //         path: "/",
    //         name: "home",
    //         component: HomeView
    //     },
    //     {
    //         path: "/about",
    //         name: "about",
    //         // route level code-splitting
    //         // this generates a separate chunk (About.[hash].js) for this route
    //         // which is lazy-loaded when the route is visited.
    //         component: () => import("../views/AboutView.vue")
    //     }
    // ]
    routes: routeSettings
});

export default router;
