import { ref, computed } from "vue";
import { defineStore } from "pinia"; // defineStore() 関数をインポート

interface State {
    counter: number;
}

// useCounterStore(use + ストア名 + Store のキャメル記法) を export
export const useCounterStore = defineStore({
    id: "counter", // ストア名(ファイル名と同一)

    state: (): State => {
        // データ本体(オブジェクト)
        return {
            counter: 0
        };
    },

    getters: {
        // データの出力時の加工処理
        doubleCount: (state): number => {
            return state.counter * 2;
        }
    },

    actions: {
        // 保持データの変更処理
        incrementCount(): void {
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
