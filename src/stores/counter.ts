import { ref, computed } from "vue";
import { defineStore } from "pinia"; // defineStore() 関数をインポート

// useCounterStore を export
export const useCounterStore = defineStore({
    id: "counter", // ストア名
    state: () => ({
        // データ本体(オブジェクト)
        counter: 0
    }),
    getters: {
        // データの出力時の加工処理
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        // 保持データの変更処理
        increment() {
            this.counter++;
        }
    }
});

// 元からある useCounterStore
// export const useCounterStore = defineStore("counter", () => {
//     const count = ref(0);
//     const doubleCount = computed(() => count.value * 2);
//     function increment() {
//         count.value++;
//     }

//     return { count, doubleCount, increment };
// });
