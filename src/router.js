import Vue from 'vue'
import AppPosts from './pages/AppPosts.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts }
]

export const router = new VueRouter ({
  routes
})