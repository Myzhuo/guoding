import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import User from '@/components/user'
import Follow from '@/components/follow'
import myCircle from '@/components/Circle'
import Login from '@/components/login'
import TimeAxis from '@/components/Timeaxis'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/dist',
      name: 'dist',
      component:Login,
      meta:{
        title:'起始页'
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component:Home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/TimeAxis',
      name: 'TimeAxis',
      component:TimeAxis,
      meta:{
        title:'My时光轴'
      }
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      meta:{
        title:'个人中心'
      }
    },
    {
      path: '/Follow',
      name: 'Follow',
      component: Follow,
      meta:{
        title:'我的关注'
      }
    },
    {
      path: '/myCircle',
      name: 'myCircle',
      component: myCircle,
      meta:{
        title:'我的圈子'
      }
    },
    {
      path: '/Subdetail',
      name: 'Subdetail',  //项目条详情
      component: resolve => require(['@/view/Subject/sub_detail.vue'], resolve),
      meta:{
        title:'详情'
      }
    },
    {
      path: '/Experie',
      name: 'Experie',  //经验详情
      component: resolve => require(['@/view/Experience/expre_detail.vue'], resolve),
      meta: {
        title: '经验详情'
      }
    },
    {
      path: '/fgrounp',
      name: 'fgrounp',  //选择小组
      component: resolve => require(['@/view/onground.vue'], resolve),
      meta: {
        title: '启动页'
      }
    },
   
  ]
})
