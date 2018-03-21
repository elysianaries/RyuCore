import $ from 'jquery'

import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import router from './router'

import mixins from './mixins'
import Echarts from 'echarts'
import vueLazyload from 'vue-lazyload'
import Cookies from 'js-cookie'

Vue.use(vueLazyload)
Vue.mixin(mixins)
// mixin下面的方法会有影响全局，注意！！！

import filters from './filters'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.sass'

window.$ = $
// JQ挂在全局上

Vue.config.debug = true
// 开启debug模式
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.prototype.vueScrollTo = (x, y, animate) => {
    VueScroller.scrollTo(x, y, animate)
}

Vue.prototype.echarts = Echarts

Vue.config.productionTip = false
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

// 遍历过滤器暴露到vue上
for (const filter in filters) {
    Vue.filter(filter, filters[filter])
}
