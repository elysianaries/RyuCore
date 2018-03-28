<template lang="pug">
    .index-content
        head-nav
        .swiper-wrap
            swiper-content
</template>

<script>

import headNav from './layouts/headNav.vue'
import swiperContent from './layouts/swiperContent.vue'

import store from '../vuex/store'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'index',
    components: {
      headNav,
      swiperContent
    },
    store,
    computed: {
        ...mapGetters([

        ])
    },
    methods: {
        ...mapActions([

        ])
    },
    data() {
        return {
        }
    },
    props: {

    },
    watch: {

    },
    events: {

    },
    // beforeCompile 用created代替
    created() {

    },
    mounted() {

    }

}
</script>

<style lang="sass" scoped>
.head-nav
    width: 100%
    height: 60px
    background-color: green
.swiper-wrap
    margin-top: 60px
</style>
