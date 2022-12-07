/// <reference types="vite/client" />

declare module '*.vue' {
  import {DefineComponent} from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
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
