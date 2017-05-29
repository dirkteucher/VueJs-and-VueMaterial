import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TabExample from '@/components/TabExample'
import FormsExample from '@/components/FormsExample'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/TabExample',
      name: 'TabExample',
      component: TabExample
    },
    {
      path: '/FormsExample',
      name: 'FormsExample',
      component: FormsExample
    }
  ]
})
