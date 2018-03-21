<template lang="pug">
    .index-content
        .index-head
            p  head
        .index-body
            p  body

</template>

<script>
import store from '../vuex/store'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'index',
    components: {

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
.web
    position: absolute
    background: rgba(0, 0, 0, 0.9)
    padding: 0.2rem 0.5rem
    color: #fff
    top: 0
    left: 0
    z-index: 1000
    a
        color: #fff
.index-tabbar
</style>
