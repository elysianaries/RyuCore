<template lang="pug">
    .swiper-content
        swiper(:options="swiperOption" ref="mySwiper" @someSwiperEvent="test")
            swiper-slide(v-for='(x, index) in img_list' :key='index')
                img(:src='x.url')

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name: 'swiperContent',
    components: {
        swiper,
        swiperSlide
    },
    data() {
      return {
          swiperOption: {
            loop: true
          },
          img_list: [
            {url: require('../../assets/images/dm.jpeg')},
            {url: require('../../assets/images/dm2.jpeg')},
            {url: require('../../assets/images/timg.jpeg')},
            {url: require('../../assets/images/v.jpeg')}
          ]
      }
    },
    methods: {
        test() {
            console.log(123)
        }
    }
}
</script>

<style lang="sass">
  .swiper-content
      text-align: center
      img
          display: inline-block
          height: 500px
          width: auto
          max-width: 100%
</style>
