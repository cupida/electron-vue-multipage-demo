import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ComponentOne from '@/components/ComponentOne'
import ComponentTwo from '@/components/ComponentTwo'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/one'
    }, {
      path: '/one',
      component: ComponentOne
    }, {
      path: '/two',
      component: ComponentTwo
    }
  ]
})
