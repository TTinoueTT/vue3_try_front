// ルーティング設定を行うファイル
// src/main.ts に import されている
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import AppTop from "@/views/AppTop.vue";
// import HomeView from "../views/HomeView.vue";

const routeSettings: RouteRecordRaw[] = [
    { path: "/", name: "AppTop", component: AppTop },
    {
        path: "/member/memberList",
        name: "MemberList",
        component: () => {
            return import("@/views/member/MemberList.vue"); //dynamic imports(動的インポート)
        }
    },
    {
        path: "/member/add",
        name: "MemberAdd",
        component: () => {
            return import("@/views/member/MemberAdd.vue"); //dynamic imports(動的インポート)
        }
    },
    {
        path: "/member/detail/:id",
        name: "MemberDetail",
        component: () => {
            return import("@/views/member/MemberDetail.vue"); //dynamic imports(動的インポート)
        },
        props: (routes) => {
            const idNum = Number(routes.params.id);
            return {
                id: idNum
            };
        }
    }
];

// ルーティングに関する設定をオブジェクトとして渡す
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
