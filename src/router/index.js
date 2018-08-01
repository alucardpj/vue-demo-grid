import Vue from 'vue'
import Router from 'vue-router'
import SearchableTable from '@/components/SearchableTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Grid',
      component: SearchableTable
    }
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/root',
    //   name: 'Demo',
    //   component: Demo
    // }
  ]
})
