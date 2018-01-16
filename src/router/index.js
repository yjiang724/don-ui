import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Banner from '@/components/banner'
import Button from '@/components/button'
import Breadcrumb from '@/components/breadcrumb'
import Checkbox from '@/components/checkbox'
import Cascader from '@/components/cascader'
import Dialog from '@/components/dialog'
import Header from '@/components/header'
import Loading from '@/components/loading'
import Messagebox from '@/components/messagebox'
import Notice from '@/components/notice'
import Pagination from '@/components/pagination'
import Select from '@/components/select'
import Switch from '@/components/switch'
import Table from '@/components/table'
import Tag from '@/components/tag'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/messagebox',
      name: 'messagebox',
      component: Messagebox
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: Cascader
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    }
  ]
})
