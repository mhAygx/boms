import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home.vue'

import 'jointjs/dist/joint.min.css'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})
