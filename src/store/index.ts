import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { StateType } from '@/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    currentCount(state: StateType): number {
      return state.count;
    },
    previousCount(state: StateType): number {
      return state.count - 1;
    },
    nextCount(state: StateType): number {
      return state.count + 1;
    },
  },
  mutations: {
    increment(state: StateType): void {
      state.count++;
    },
    decrement(state: StateType): void {
      state.count--;
    },
  },
  actions: {
    increment(ctx: ActionContext<StateType, StateType>): void {
      ctx.commit("increment");
    },
    decrement(ctx: ActionContext<StateType, StateType>): void {
      ctx.commit("decrement");
    },
  },
  modules: {
  }
})
