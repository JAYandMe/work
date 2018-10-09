import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Input from '@/components/Child/Input'
import CheckBox from '@/components/Child/CheckBox'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path : '/',
      name : 'Input',
      component: Input
    },
    {
      path : '/checkbox',
      name : 'CheckBox',
      component : CheckBox
    }
  ]
})
