import {createApp} from 'vue'

import './qiankun'
import App from './App.vue'
import store, {Key} from './store'
import {routeHash} from './router'
import Components from './components'
import apiList from './api/request'

const router = routeHash('/')


const app = createApp(App)
app.config.globalProperties.$api = apiList
app.use(router)
  .use(store, Key)
  .use(Components)
  .mount('#app')
