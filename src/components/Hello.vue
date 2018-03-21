<template lang="pug">
    .important
        h1(@click='test').hello {{msg}}
        a 所有的都得保护在大div下面
        router-link(to='/testRouter')
            a About
        .testB v-for 中的index 变为显示声明 x in 10 为 1-10 而非原来的 0-9
        ul
            li(v-for='(x, index) in menu', @click='showIndex(x,index)') {{x}}+{{index}}
        toast
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Hello',
    components: {

    },
    computed: {
        ...mapGetters([
            'count',
            'test',
            'router'
        ])
    },
    methods: {
        ...mapActions([
            'increatment',
            'testtest'
        ]),
        showIndex(value, index) {
            console.log(index)
            console.log(value)
        },
        Atest() {
            console.log(this.a_test)
        },
        testA() {
            const a = 1
            if (a === 2) {
                console.log(123)
                console.log(this.msg)
            }
            const b = () => {
                console.log(132)
            }
        }
    },
    data() {
        return {
            msg: 'vue2.0CLI 组件中，最外层的div只能有一个！',
            menu: [11, 12, 13, 14, 15, 16],
            a_test: 1,
            par_a: 0
        }
    },
    mounted() {
        this.BTest()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
