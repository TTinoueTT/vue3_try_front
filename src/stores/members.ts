import { defineStore } from "pinia";
import type { Member } from "@/types";

interface MemberList {
    memberList: Map<number, Member>;
}

export const useMembersStore = defineStore({
    id: "members",
    state: (): MemberList => {
        return {
            memberList: new Map<number, Member>()
        };
    },
    getters: {
        getById: (state) => {
            return (id: number): Member => {
                const member = state.memberList.get(id) as Member;
                console.log(member);

                return member;
            };
        },
        isMemberListEmpty: (state): boolean => {
            return state.memberList.size == 0;
        }
    },
    actions: {
        // initList(): void {
        //     this.memberList.set(33456, { id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "初回入会特典あり" });
        //     this.memberList.set(47783, { id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53 });
        // },
        // addMember(member: Member): void {
        //     this.memberList.set(member.id, member);
        // }
        prepareMemberList(): void {
            let memberList = new Map<number, Member>(); // 空のmemberListを用意
            const memberListJSONStr = sessionStorage.getItem("memberList"); // セッションストレージからデータを取得、getItem("キー文字列")
            // セッションストレージのデータが空じゃないなら
            if (memberListJSONStr != undefined) {
                const memberListJSON = JSON.parse(memberListJSONStr); // JSON文字列をJSONオブジェクトに変換
                memberList = new Map<number, Member>(memberListJSON); // JSONオブジェクトを元にmemberListを生成
            }
            // ステートにmemberListを格納
            this.memberList = memberList;
        },

        insertMember(member: Member): void {
            this.memberList.set(member.id, member); // ステートの memberList に引数の会員情報を追加
            const memberListJSONStr = JSON.stringify([...this.memberList]); // ステートの memberList をJSON文字列に変換
            // セッションストレージに格納
            sessionStorage.setItem("memberList", memberListJSONStr);
        }
    }
});
