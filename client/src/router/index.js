import Hello from '@/components/Hello'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
  ],
  mode: 'history'
})
