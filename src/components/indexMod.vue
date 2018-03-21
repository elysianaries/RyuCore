<template lang="jade">
    .index
        .test(@click='tt') nihao
        .test2(@click='proTest') hongse
        .test3(@click='proTest2') tests3
        .test4(@click='set') tests4
        input(@focus='changeInput', type='text', name='')
        div(@click='jsonpPost') 请求测试
</template>

<script>
import Tabbar from './Tabbar'
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

        ]),
        tt() {
            $('.test2').css('color', 'red')
        },
        proTest() {
            const timeout = (ms) => {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, ms, 'done')
                    // setTimeout(resolve('done'), ms)
                })
            }
            timeout(1000).then((value) => {
                console.log(value)
            })
        },
        proTest2() {
            // promise 对象
            const cb = (value) => {
                return 123
            }
            const promise = new Promise(function(resolve, reject) {
                const a = 'qqq'
                return require(['./Hello.vue'], reject)
                // resolve(a)
                // reject(a)
            })

            promise.then((value) => {
                console.log(value)
            }).catch((error) => {
                console.log(error)
            })
        },
        set() {
            const cb = (a) => {
                const b = a + 1
                console.log(b)
            }
            setTimeout(cb, 500, '1')
        },
        changeInput() {
            console.log('have changed')
        },
        jsonpPost(param) {
            // jsonp限制少，已经解决跨域也可以使用get或Post
            this.$http.jsonp(`https://www.c5game.com/api/product/sale.html`, {params: param})
            // this.$http.get(`http://localhost:4848/api/product/sale.html`, {params: param})
            .then(res => {
                this.response = res
                console.log(res)
            }, res => {
                alert('code: 500')
            })
            // console.log('用JQ也可以')
            // $.ajax({
            //     type: 'GET',
            //     url: 'http://localhost:4848/api/auction/nearest',
            //     success: function(res) {
            //         console.log(typeof res)
            //     }
            // })
        }
    },
    data() {
        return {
            page: 1,
            id: 1965144
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
    // 1.0的ready，compiled 都用mounted代替
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
