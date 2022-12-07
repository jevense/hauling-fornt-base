import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
]

const routeHash = (hash: string) => {
  const router = createRouter({
    history: createWebHistory(hash),
    routes
  })
  router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
  })
  return router
}
export {
  routeHash
}
