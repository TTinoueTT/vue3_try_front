<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
    <h1>TOP</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>TOP</li>
        </ul>
    </nav>
    <section>
        <ul>
            <li><RouterLink v-bind:to="{ name: 'MemberList' }"> 会員登録はこちら </RouterLink></li>
            <li><RouterLink v-bind:to="{ name: 'MemberOthers', hash: '#section', query: { name: 'billy' }, params: { point: 30 } }"> Vue Router のその他の機能 -実践- </RouterLink></li>
        </ul>
    </section>
</template>
