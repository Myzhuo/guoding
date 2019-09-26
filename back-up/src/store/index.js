import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'


// use是将Vuex注册为全局组件

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	modules: {
		index // 模块化设置状态，分类管理
	},
	strict: debug
})
