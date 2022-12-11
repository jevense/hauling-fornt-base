/// <reference types="vite/client" />
import type {DefineComponent} from 'vue'
import {Store} from "vuex";
import {State} from "./store";

declare module '*.vue' {

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

// 环境变量
interface ImportMetaEnv {
  VITE_BASE_URL: string
}

// 定义window
declare interface Window {
  App: any;
  commonComponent: any
}
