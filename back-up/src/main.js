// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
// js
import './assets/js/flexible.js'
// css
import './assets/css/bootstrap.css'
import './assets/css/comm.css'
import './assets/css/common.css'
import './assets/css/end_verson.css'
import './assets/css/swict.css'
/* eslint-disable no-new */
// /消息模板
import toastRegistry from './msg/index'

Vue.use(toastRegistry)
// 
router.beforeEach((to,from,next)=>{
  var Rou = localStorage.getItem('Hide') || '',
   ontlist= ['Home','Follow','Regulate','myCircle','User'];
  if ( ontlist.includes(to.name) == true){    
    localStorage.setItem('Hide', '')
  }else{
    localStorage.setItem('Hide', 'OK')
  }
  Vue.prototype.$rName = to.name; //拿全局路由方便判断
  document.title = to.meta.title
  next()
})
function returnPage (){
  history.go(-1);
}
Vue.prototype.$returnPage = returnPage;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
