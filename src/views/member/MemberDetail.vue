<script setup lang="ts">
import { inject, computed, watchEffect, ref } from "vue";
import { RouterLink, onBeforeRouteUpdate, useRoute } from "vue-router";
import type { Member } from "@/types";

const route = useRoute();

// interface Props {
//     id: number;
// }
// const props = defineProps<Props>();
let id = Number(route.params.id);

const memberList = inject("memberList") as Map<number, Member>;
// const member = computed((): Member => {
//     return memberList.get(props.id) as Member;
// });

const member = ref(memberList.get(id) as Member);

// watchEffect(() => {
//     id = Number(route.params.id);
//     member.value = memberList.get(id) as Member;
// });

onBeforeRouteUpdate((to, from) => {
    // to と from は RouteLocationNormalized オブジェクト
    id = Number(to.params.id);
    member.value = memberList.get(id) as Member;
    console.log(to); // 遷移元での RouteLocationNormalized オブジェクト
    console.log(from); // 遷移先での RouteLocationNormalized オブジェクト
});

const localNote = computed((): string => {
    let localNote = "--";
    if (member.value.note != undefined) {
        localNote = member.value.note;
    }
    // if (member.value.note != undefined) {
    //     localNote = member.value.note;
    // }
    return localNote;
});
</script>
<template>
    <h1>会員管理</h1>
    <nav>
        <ul>
            <li>
                <RouterLink v-bind:to="{ name: 'AppTop' }"> TOP </RouterLink>
            </li>
            <li>
                <RouterLink v-bind:to="{ name: 'MemberList' }"> 会員リスト </RouterLink>
            </li>
            <li>会員詳細情報</li>
        </ul>
    </nav>
    <section>
        <h2>会員詳細情報</h2>
        <dl>
            <dt>ID</dt>
            <dd>{{ member.id }}</dd>
            <dt>名前</dt>
            <dd>{{ member.name }}</dd>
            <dt>メールアドレス</dt>
            <dd>{{ member.email }}</dd>
            <dt>保有ポイント</dt>
            <dd>{{ member.points }}</dd>
            <dt>備考</dt>
            <dd>{{ localNote }}</dd>
        </dl>
    </section>
</template>
