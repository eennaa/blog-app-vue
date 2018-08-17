import Vue from 'vue'
import AppPosts from './pages/AppPosts.vue'
import VueRouter from 'vue-router'
import SinglePost from './pages/SinglePost.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts },
  { path: '/post/:id', component: SinglePost, name: 'single-post' }
]

export const router = new VueRouter ({
  routes
})