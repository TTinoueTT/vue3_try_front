<script setup lang="ts">
import { reactive, provide, computed } from "vue";
import { RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import type { Member } from "@/types";
import { useCounterStore } from "@/stores/counter"; // export された counter ストアの利用
// import { useMembersStore } from "@/stores/members"; // export された members ストアの利用
import type { Member } from "./types";

// const memberList = new Map<number, Member>();
// memberList.set(33456, { id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "初回入会特典あり" });
// memberList.set(47783, { id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53 });
// provide("memberList", reactive(memberList));

// 11.1 Piniaの基本 ******************************************************************************
// storeを利用した変数を定義
const counterStore = useCounterStore(); // use を抜いた変数名にする。これがストアオブジェクトそのものになる

// 以下で取得したストアオブジェクトを使用して各種値をメソッドを利用して出力
// const count = counterStore.counter とすると、リアクティブシステムが動かなくなる
const count = computed((): number => {
    return counterStore.counter;
});

const doubleCount = computed((): number => {
    return counterStore.doubleCount;
});

const onIncrementClick = () => {
    counterStore.incrementCount();
};

const resetCount = () => {
    counterStore.$reset();
};
// *********************************************************************************************

// // 11.2 引数を使う一歩進んだPiniaの利用方法 *********************************************************
// const membersStore = useMembersStore();
// membersStore.initList();
// // *********************************************************************************************
</script>

<template>
    <header>
        <h1>Piniaサンプル</h1>
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
        <p>現在のポイント: {{ count }}(counterの値)</p>
        <p>現在のポイントさらに倍: {{ doubleCount }}(getterを利用したdoubleCountの値)</p>
        <button @click="onIncrementClick">加算(actionsを利用したonIncrementClickを発火)</button>
        <button @click="resetCount">リセット(ストアオブジェクトの値を初期値に戻す)</button>
        <RouterView />
        <RouterView name="sub" />
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
