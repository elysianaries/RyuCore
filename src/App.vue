<template lang="pug">
    #app
        //- alert-box(
        //-     v-if = 'show_alert',
        //-     :alert-mess = 'alert_mess',
        //-     v-on:makeSure = 'makeSureAlert(to, next)')
        //- transition(:name='transitionName')
        keep-alive
            router-view.all-absolute(v-cloak, v-if='keep_alive')
        router-view.all-absolute(v-cloak, v-if='!keep_alive')
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
            this.show_alert = 0
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
    .all-absolute
        width: 100%
        height: 100%
        position: absolute
        // transition: all .5s ease
</style>
