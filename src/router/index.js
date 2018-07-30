import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SearchableTable from '@/components/SearchableTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchableTable',
      component: SearchableTable
    }
    // {
    //   path: '/grid',
    //   name: 'Grid',
    //   component: SearchableTable
    // }
  ]
})
