<script setup lang="ts">
import { reactive, provide } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import type { Member } from "@/types";

const memberList = new Map<number, Member>();
memberList.set(33456, { id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "初回入会特典あり" });
memberList.set(47783, { id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53 });
provide("memberList", reactive(memberList));
</script>

<template>
    <header>
        <h1>Vue Routerサンプル</h1>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You got it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div> -->
    </header>
    <main>
        <RouterView />
    </main>
</template>

<style lang="scss">
main {
    border: blue 1px solid;
    padding: 10px;

    & #breadcrumbs {
        margin-left: 0px;

        & ul {
            padding-left: 0px;

            & li {
                display: inline;
                list-style-type: none;

                &::before {
                    content: ">";
                }

                &:first-child::before {
                    content: none;
                }
            }

            & .current {
                color: red;
            }
        }
    }
}
</style>
