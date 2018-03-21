<template lang="pug">
    .index

</template>

<script>
import store from '../vuex/store'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'indexMod',
    components: {
        Tabbar
        // searchBar,
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
    created() {

    },
    mounted() {

    }

}
</script>

<style lang="sass" scoped>
    .test
        width: 100px
        height: 100px
        background-color: red
</style>
