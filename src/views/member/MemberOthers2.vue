<script setup lang="ts">
// import { inject } from "vue";
import { RouterLink, useRoute } from "vue-router";
// import type { Member } from "@/types";
// const memberList = inject("memberList") as Map<number, Member>;
const route = useRoute();
</script>

<template>
    <h1>会員管理</h1>
    <nav id="breadcrumbs">
        <ul>
            <li><RouterLink v-bind:to="{ name: 'AppTop' }"> TOP </RouterLink></li>
            <li>会員リスト</li>
        </ul>
    </nav>
    <section id="section">
        <ul>
            <li>{{ route.name }}</li>
            <li>{{ route.fullPath }}</li>
            <li>{{ route.path }}</li>
            <li>{{ route.hash }}</li>
            <li>{{ route.query }}</li>
            <li>{{ route.params }}</li>
        </ul>
    </section>
</template>
