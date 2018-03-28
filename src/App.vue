<template lang="pug">
    #app
        keep-alive
            router-view
</template>

<script>
import store from './vuex/store'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'App',
    components: {

    },
    store,
    computed: {
        ...mapGetters([
            'apiUrl'
        ])
    },
    methods: {
        ...mapActions([

        ]),
        makeSureAlert(to, next) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    },
    data() {
        return {
            transitionName: 'slide-left',
            to: '',
            next: '',
            keep_alive: false,
            inclued_name: ['itemList', 'depositList', 'purchaseRecords', 'saleRecords', 'seekManage', 'stockRecords', 'myCoupon'],
            exclued_name: ['mine', 'bagList']
        }
    },
    props: {

    },
    events: {

    },
    created() {

    },
    mounted() {

    }
}
</script>

<style lang="sass" scoped>
        // transition: all .5s ease
</style>
