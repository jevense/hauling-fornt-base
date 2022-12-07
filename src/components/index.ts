// 子组件使用父组件时调用
import demo from "@/components/demo.vue";

window.commonComponent = {demo}

export default {
  // @ts-ignore
  install: (app) => {
    app.component(demo.name, demo)
  }
}
