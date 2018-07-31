import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SearchableTable from '@/components/SearchableTable'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/grid',
      name: 'Grid',
      component: SearchableTable
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/root',
      name: 'Demo',
      component: Demo
    }
  ]
})
