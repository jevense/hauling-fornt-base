import {InjectionKey} from "vue";
import {createStore, Store} from "vuex";

export const Key: InjectionKey<Store<State>> = Symbol()
export type State = {
  count: number
}
export default createStore({
  state: {
    count: 0
  },
  mutations: {
    addCount(state) {
      state.count++
    }
  }
})
