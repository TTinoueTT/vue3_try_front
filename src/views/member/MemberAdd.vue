<script setup lang="ts">
import { reactive } from "vue";
// import { inject, reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import type { Member } from "@/types";
import { useMembersStore } from "@/stores/members"; // export された members ストアの利用

const router = useRouter();
const membersStore = useMembersStore();
// const memberList = inject("memberList") as Map<number, Member>;
const member: Member = reactive({
    id: 0,
    name: "",
    email: "",
    points: 0,
    note: ""
});

// 入力データを会員リストデータに追加する
// リスト画面に遷移する
// const onAdd = (): void => {
//     console.log(member);
//     memberList.set(member.id, member);
//     // router.push({ name: "MemberList" }); // ここでページ遷移を実行する(会員リスト)
//     // パラメータ付きでの遷移を行うには router.push({ name: "MemberDetail", params: { id: member.id } }) みたいにする
//     router.push({ name: "MemberDetail", params: { id: member.id } }); // 会員詳細に遷移
// };

// 11.2.6 引数付きのアクションの利用 *****************************************************************************
const onAdd = (): void => {
    membersStore.addMember(member);
    router.push({ name: "MemberList" });
};
// ***********************************************************************************************************
</script>

<template>
    <h1>会員管理</h1>
    <nav id="breadcrumbs">
        <ul>
            <li><RouterLink v-bind:to="{ name: 'AppTop' }"> TOP </RouterLink></li>
            <li>会員リスト</li>
            <li>会員情報追加</li>
        </ul>
    </nav>
    <section>
        <h2>会員情報追加</h2>
        <p>情報を入力し、登録ボタンをクリックしてください。</p>

        <!-- prevent 修飾子でform本来のsubmit処理をキャンセルさせる -->
        <form v-on:submit.prevent="onAdd">
            <dl>
                <dt>
                    <label for="addId">ID&nbsp;</label>
                </dt>
                <dd>
                    <!-- number修飾子で数値型に変換する -->
                    <input type="number" id="addId" v-model.number="member.id" required />
                </dd>

                <dt>
                    <label for="addName">名前&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="addName" v-model="member.name" required />
                </dd>

                <dt>
                    <label for="addEmail">メールアドレス&nbsp;</label>
                </dt>
                <dd>
                    <input type="email" id="addEmail" v-model="member.email" required />
                </dd>

                <dt>
                    <label for="addPoints">保有ポイント&nbsp;</label>
                </dt>
                <dd>
                    <input type="number" id="addPoints" v-model.number="member.points" required />
                </dd>

                <dt>
                    <label for="addNote">備考</label>
                </dt>
                <dd>
                    <textarea id="addNote" v-model="member.note"></textarea>
                </dd>
            </dl>
            <button type="submit">登録</button>
        </form>
    </section>
</template>
