import {createApp} from 'vue'

import './qiankun'
import App from './App.vue'
import store, {Key} from './store'
import {routeHash} from './router'
import Components from './components'
import ElementPlus from 'element-plus'
import apiList from './api/request'
import 'element-plus/dist/index.css'

const router = routeHash('/')


const app = createApp(App)
app.config.globalProperties.$api = apiList
app.use(router)
  .use(store, Key)
  .use(Components)
  .use(ElementPlus,{size: 'small'})
  .mount('#app')
