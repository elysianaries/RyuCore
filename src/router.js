import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.debug = true

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        const position = {}
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
          // cords will be used if no selector is provided,
          // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}

const router = new VueRouter({
    mode: 'history',
    // mode: 'hash',
    base: __dirname,
    scrollBehavior,
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['./components/index'], resolve),
            meta: {
                scrollToTop: true
            }
        }
    ]
})

export default router
