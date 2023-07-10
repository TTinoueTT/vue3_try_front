<script setup lang="ts">
import { RouterLink } from "vue-router";
// コンポーネントごとのガードはここで
</script>
<template>
    <h1>SubTop</h1>
    <!-- <nav id="breadcrumbs">
        <ul>
            <li>TOP</li>
        </ul>
    </nav> -->
    <section>
        <ul>
            <li><RouterLink v-bind:to="{ name: 'MemberList' }"> 会員登録はこちら </RouterLink></li>
            <li><RouterLink v-bind:to="{ name: 'MemberOthers', hash: '#section', query: { name: 'billy' }, params: { category: 'love', point: 37078 } }"> Vue Router のその他の機能 -実践- 1</RouterLink></li>
            <li><RouterLink v-bind:to="{ name: 'MemberOthers', hash: '#section', query: { name: 'billy' }, params: { category: 'love' } }"> Vue Router のその他の機能 -実践- 2</RouterLink></li>
            <!-- <li><RouterLink v-bind:to="{ name: 'MemberOthers2', hash: '#section', query: { name: 'billy' } }"> Vue Router のその他の機能 -実践- 2 可変長なし(:id+ の場合は Uncaught (in promise) Error: Missing required param "id" でエラーになる)</RouterLink></li> -->
            <li><RouterLink v-bind:to="{ name: 'MemberOthers2', hash: '#section', query: { name: 'billy' }, params: { id: [36, 67, 897886] } }"> Vue Router のその他の機能 -実践- 2 可変長あり</RouterLink></li>
        </ul>
    </section>
</template>
