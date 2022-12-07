
# 前端测试quankunjs的Base项目

## Vue 3 + Typescript + Vite + qiankun + VueX + Vue-router


## 开发前请仔细进行阅读

1. 项目默认使用的是`main.ts`作为项目的主入口启动，如果你是开发子应用那你应该删除它，并把 `main-child.ts`手动更改为`main.ts`
2. `src`下`api`为请求的案例，项目开始前你应该拿到后端的接口文档，优先对项目接口进行统一封装、类型声明
3. `src`下`qiankun` 为加载子应用的配置，你可以在这里进行路由规则的匹配封装
4. `src`下`components` 这里用来存放全局组件，统一index进行导出，案例中展示了`setup` `props传值` `vue2的写法`
5. `src`下`style`的`componet.scss` 为项目预加载的通用scss文件，在`vite.config`配置,你应该在这里使用`$`定义的通用的主题色
