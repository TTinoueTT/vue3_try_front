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
            // 空のmemberListを用意
            let memberList = new Map<number, Member>();
            // セッションストレージからデータを取得、getItem("キー文字列")
            const memberListJSONStr = sessionStorage.getItem("memberList");
            // セッションストレージのデータが空じゃないなら
            if (memberListJSONStr != undefined) {
                // JSON文字列をJSONオブジェクトに変換
                const memberListJSON = JSON.parse(memberListJSONStr);
                // JSONオブジェクトを元にmemberListを生成
                memberList = new Map<number, Member>(memberListJSON);
            }
            // ステートにmemberListを格納
            this.memberList = memberList;
        }
    }
});
