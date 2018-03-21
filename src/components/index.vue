<template lang="pug">
    .index-content(style='padding-bottom: 100px')
        //- 菜单头
        alert-box(
            v-if = 'show_alert',
            :alert-mess = 'alert_mess',
            v-on:makeSure = 'makeSureAlert')
        .index-head
            .search-header
                img.logo(src='../assets/images/v1.1/index-logo@2x.png')
                img.message-center(src='../assets/images/alert@2x.png')
                .main-search-bar
                    i.iconfont.icon-sousuo
                    input.main-serch-input(type='search', placeholder='搜索', v-model='search_keyword', @click='goSearch')
                    span
                        img(src='../assets/images/yuanjiaojuxing2@2x.png', style='width: 0.8rem;')
            .container
                //- .web(@click='goWeb')
                    a(href='https://www.c5game.com?from=app') 网页端
                .scroll-container
                    carousel(
                        :indicators="true",
                        :auto="3000",
                        :responsive="54",
                        :flick-threshold="0.8"
                    )
                        div(v-for= 'x in game_list')
                            a(:href='x.url')
                                img(:src='x.img', style='height: 53.33vw; width: 100vw')
            //- .search-title
                .search-bar.pull-left
                    i.iconfont.icon-sousuo.pull-left
                    input.pull-left.input-group(type='search', placeholder='搜索饰品、游戏、维基')

                .erweima.pull-left
                    a
                        img(src='../assets/images/saoyisao@2x.png' width='100%')
        .index-body()
            //- 菜单列表
            //- .index-container
            //-     .menu-list
            //-         .menu-cell(v-for='(x, index) in menu_data', :class="{'menu-bottom': index > 3 }")
            //-             img(:src='x.menu_url')
            //-             p {{x.name}}
            //- 闪拍
            //- .index-container
            //-     .flash-auction
            //-         .con-title
            //-             img(src='../assets/images/flashauction@2x.png')
            //-             span 挑战智慧
            //-                 img.youjiantou(:src='youjiantou')
            //-         .con-body
            //-             item-open.clearfix
            //-             .border-line
            //-             iteming.clearfix
            //- 热销饰品
            .menu-content
                .one-box.csgo(@click='MrouterJump("itemList", {"appid": 730, "from_index": 1})')
                    img(src='../assets/images/v1.1/CSGO@2x.png')
                    p CSGO
                .one-box.dota(@click='MrouterJump("itemList", {"appid": 570, "from_index": 1})')
                    img(src='../assets/images/v1.1/DOTA2@2x.png')
                    p DOTA2
                .one-box.h1z1(@click='MrouterJump("itemList", {"appid": 433850, "from_index": 1})')
                    img(src='../assets/images/v1.1/H1Z1@2x.png')
                    p 跳伞求生
                .one-box.pubg(@click='MrouterJump("itemList", {"appid": 578080, "from_index": 1})')
                    img(src='../assets/images/v1.1/PUBG@2x.png')
                    p 绝地求生
            .index-container(style='padding-bottom: 5rem')
                .shipin-sale(v-for='x in hot_list')
                    .con-title(@click='MrouterJump("itemList", {"appid": x.appid})')
                        h4 {{x.title}}
                            span 更多
                                img(:src='youjiantou')
                    .con-body
                        .sale-cell(v-for='(y, index) in x.list')
                            saleItem(:item = 'y', :tag-hide = 'true')
            //- 游戏推荐
            //- .index-container
            //-     .game-list
            //-         .con-title
            //-             img(src='../assets/images/tuijian@2x.png')
            //-             span 开启游戏大门
            //-                 img.youjiantou(:src='youjiantou')
            //-         .con-body
            //-             carousel(
            //-                 :indicators="true",
            //-                 :auto="30000",
            //-                 :responsive="35",
            //-                 :flick-threshold="0.8"
            //-             )
            //-                 div(v-for= 'i in game_list')
            //-                     a()
            //-                         img(:src='i.game_url', style='width: 100%')
            //- 饰品维基
            //- .index-container
            //-     .shipin-wiki
            //-         .con-title
            //-             img(src='../assets/images/wiki@2x.png')
            //-             span 知识就是力量
            //-                 img.youjiantou(:src='youjiantou')
            //-         .con-body
            //-             .parts
            //-                 .cell
            //-                     a
            //-                         img(src='https://i.c5game.com/economy/570/2016/08/13/0bcd18332b7daa1d03d17d74a6543d1e.png@250w.png')
            //-                 .cell.parts-2
            //-                     .cell-2
            //-                         a
            //-                             img(src='https://i.c5game.com/economy/570/2016/08/13/0bcd18332b7daa1d03d17d74a6543d1e.png@250w.png')
            //-                     .cell-padding
            //-                     .cell-2
            //-                         a
            //-                             img(src='https://i.c5game.com/economy/570/2016/08/13/0bcd18332b7daa1d03d17d74a6543d1e.png@250w.png')

        .index-tabbar
            .app-download(v-if='show_download')
                p
                    img.logo(src='../assets/images/webtoapp/c5.png')
                    span.message 下载C5GAME APP, 掌上交易更方便
                    span.download-btn(@click='downloadApp') 立即下载
                    img.close-btn(src='../assets/images/webtoapp/close.png', @click='closeDownload')
            .bottom-container
                tabbar(style='position: fixed; bottom: 0; width: 100%; z-index: 20',  :rest-tabber-index = '0')


</template>

<script>
import store from '../vuex/store'
import { mapGetters, mapActions } from 'vuex'
import tabbar from './layouts/tabbar'
import alertBox from './layouts/alertBox'
import itemOpen from './flashAuction/itemOpen'
import iteming from './flashAuction/iteming'
import saleItem from './itemList/saleItem'
import Carousel from 'vue-m-carousel'
export default {
    name: 'index',
    components: {
        tabbar,
        itemOpen,
        iteming,
        saleItem,
        Carousel,
        alertBox
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
        goBack() {
            this.$router.go(-1)
        },
        makeSureAlert() {
            this.show_alert = 0
        },
        async getIndexList() {
            const url = `${this.apiUrl}/v1/store/default/homepage`

            const res = await this.Mjsonp(url)

            if (res.body.status === 200) {
                const list = res.body.data.list
                this.hot_list = list

                this.game_list = res.body.data.banner
            }
        },
        closeDownload() {
            this.show_download = false
        },
        downloadApp() {
            const userAgent = navigator.userAgent
            const app = navigator.appVersion
            const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1
            const isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            if (isAndroid) {
                window.location.href = 'http://m.app.haosou.com/detail/index?pname=com.imbastar.c5game&id=3895301'
            } else if (isiOS) {
                window.location.href = 'https://itunes.apple.com/us/app/c5game-%E4%B8%AD%E5%9B%BD%E7%94%B5%E7%AB%9E%E9%A5%B0%E5%93%81%E4%BA%A4%E6%98%93%E5%B9%B3%E5%8F%B0/id1282936493?l=zh&ls=1&mt=8'
            }
        },
        goWeb() {
            window.location.href = 'https://www.c5game.com?from=app'
        },
        goSearch() {
            this.MrouterJump('itemList', {'from_index': 1})
        }
    },
    data() {
        return {
            input_value: 0,
            youjiantou: require('../assets/images/youjiantou@2x.png'),
            menu_data: [
                {'menu_url': require('../assets/images/qiandao@2x.png'), 'name': '签到'},
                {'menu_url': require('../assets/images/chongzhi@2x.png'), 'name': '充值'},
                {'menu_url': require('../assets/images/shipin-wiki@2x.png'), 'name': '饰品维基'},
                {'menu_url': require('../assets/images/freeshipin@2x.png'), 'name': '免费饰品'},
                {'menu_url': require('../assets/images/duobao@2x.png'), 'name': '娱乐'},
                {'menu_url': require('../assets/images/shanpai@2x.png'), 'name': '闪拍'},
                {'menu_url': require('../assets/images/youlechang@2x.png'), 'name': '游乐场'},
                {'menu_url': require('../assets/images/xiaogame@2x.png'), 'name': '小游戏'}
            ],
            game_list: [{}],
            hot_list: [],
            show_download: true,
            alert_mess: {
                'body_p1': ''
            },
            show_alert: 0
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
        // this.$nextTick(this.getIndexList)
    },
    // 1.0的ready，compiled 都用mounted代替
    mounted() {
        this.getIndexList()
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
    .app-download
        position: fixed
        bottom: 6rem
        width: 100%
        p
            position: relative
            background: rgba(0, 0, 0, 0.8)
            color: #fff
            padding: 0.5rem 3%
            font-weight: 400
            font-size: 1.2rem
            margin: 0
            img.logo
                width: 2.5rem
            span.message
            span.download-btn
                background-color: #f2bf5e
                padding: 0.2rem 1rem
                color: #000
                border-radius: 0.2rem
                font-weight: bold
                float: right
                margin-top: 0.3rem
                padding-top: 0.2rem
            img.close-btn
                position: absolute
                width: 1.6rem
                top: -0.6rem
                right: 1%
    .bottom-container
        height: 5rem
        width: 100%
        position: fixed
        bottom: 0
.menu-content
    overflow: hidden
    background-color: #fff
    .one-box
        position: relative
        margin-top: 1rem
        width: 25%
        float: left
        height: 5.5rem
        text-align: center
        // background: url('../assets/images/index/csgo-bg@2x.png') no-repeat bottom
        background-size: 100% 100%
        background-color: #fff
        img
            height: 3rem
            display: inline-block
            margin: 0 auto
        span
            color: #fff
            font-size: 1.8rem
            font-size: 1.8rem
            line-height: 4rem
            width: 6rem
            text-align: right
        p
            margin-bottom: 0
    // .csgo
    //     background: url('../assets/images/index/csgo-bg@2x.png') no-repeat bottom
    //     background-size: 100% 100%
    // .dota
    //     background: url('../assets/images/index/dota2-bg@2x.png') no-repeat bottom
    //     background-size: 100% 100%
    // .h1z1
    //     background: url('../assets/images/index/h1z1-bg@2x.png') no-repeat bottom
    //     background-size: 100% 100%
    // .pubg
    //     background: url('../assets/images/index/pubg-bg@2x.png') no-repeat bottom
    //     background-size: 100% 100%
@media screen and (max-width: 320px)
    .menu-content
        span
            font-size: 1.4rem!important
</style>
