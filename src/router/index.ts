// ルーティング設定を行うファイル
// src/main.ts に import されている
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import AppTop from "@/views/AppTop.vue";
import SubTop from "@/views/SubTop.vue";
// import HomeView from "../views/HomeView.vue";

const routeSettings: RouteRecordRaw[] = [
    // { path: "/", name: "AppTop", component: AppTop },
    {
        path: "/",
        name: "AppTop",
        components: {
            default: AppTop,
            sub: SubTop
        }
        // ルーティングごとのガード、各ルーティングにbeforeEnterプロパティで設定できる
    },
    {
        path: "/member/memberList",
        name: "MemberList",
        component: () => {
            return import("@/views/member/MemberList.vue"); //dynamic imports(動的インポート)
        },
        children: [
            {
                path: "detail/:id",
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
            },
            {
                path: "add",
                name: "MemberAdd",
                component: () => {
                    return import("@/views/member/MemberAdd.vue"); //dynamic imports(動的インポート)
                }
            }
        ]
    },
    // {
    //     path: "/member/add",
    //     name: "MemberAdd",
    //     component: () => {
    //         return import("@/views/member/MemberAdd.vue"); //dynamic imports(動的インポート)
    //     }
    // },
    // {
    //     path: "/member/detail/:id",
    //     name: "MemberDetail",
    //     component: () => {
    //         return import("@/views/member/MemberDetail.vue"); //dynamic imports(動的インポート)
    //     },
    //     props: (routes) => {
    //         const idNum = Number(routes.params.id);
    //         return {
    //             id: idNum
    //         };
    //     }
    // },
    {
        // path: "/member/others/:category/:point?", //複数パラメータの実践 (:point? で省略可能パラメータ)
        path: "/member/others/:category/:point(\\d{5})?", //正規表現チェック 5桁以下を受け付けない
        name: "MemberOthers",
        component: () => {
            return import("@/views/member/MemberOthers.vue"); //dynamic imports(動的インポート)
        }
    },
    {
        // path: "/member/others2/:id*", //可変長パラメータの実践 (:id* で可変長パラメータとなり、例えば、/member/others2/ でも /member/others2/35/46/37)
        path: "/member/others2/:id+", //可変長パラメータの実践 (:id+ で可変長パラメータ、必ず一つは指定しなければならない必須パラメータとなる)
        name: "MemberOthers2",
        component: () => {
            return import("@/views/member/MemberOthers2.vue"); //dynamic imports(動的インポート)
        }
    },

    {
        path: "/member/go", // うまくいかないのでリダイレクト処理はあとで考える。
        name: "MemberGo",
        redirect: (to) => {
            return {
                name: "MemberGo"
            };
        }
    },

    {
        path: "/:pathMatch(.*)*", //正規表現、可変長パラメータを利用して、存在するルーティング情報以外の全てのURLを受け付ける
        name: "NotFound",
        component: () => {
            return import("@/views/NotFound.vue"); //dynamic imports(動的インポート)
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

// ナビゲーションガードのグローバルガードはここで定義される

export default router;
