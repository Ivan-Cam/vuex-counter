<template>
    <div>
      <h1>vue counter</h1>
      <span>
        <button @click="decrement">&lt; {{ previousCount }}</button>
        {{ currentCount }}
        <button @click="increment">&gt; {{ nextCount }}</button>
      </span>
    </div>
  </template>
  
  <script lang="ts">
  import { StateType } from "@/types";
  import { Component, Vue } from "vue-property-decorator";
  import { ActionContext } from "vuex";
  import { Getter, Action} from 'vuex-class'
  
  @Component
  export default class Counter extends Vue {
    // getters
    @Getter currentCount!: number;
    @Getter previousCount!: number;
    @Getter nextCount!: number;
  
    // actions
    @Action increment!: ActionContext<StateType, StateType>;
    @Action decrement!: ActionContext<StateType, StateType>;
  }
  </script>
  
  
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
  