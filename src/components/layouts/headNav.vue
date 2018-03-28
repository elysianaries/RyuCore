<template lang="pug">
    .head-nav-content
        .user-info
            img.avatar(src='https://gitee.com/uploads/66/1843466_arieske.png?1522207940')
            span.name AriesKe
        .right-btn-list
            span 首页
            span 市场
            span 我的
            span 备战房
            span 常见问题
            span more
</template>

<script>
export default {
  name: 'headNav'
}
</script>

<style lang="sass" scoped>
  .head-nav-content
      height: 60px
      background-color: #c5c5c5
      overflow: hidden
      width: 100%
      .user-info
          width: 30%
          float: left
          background-color: yellow
          font-size: 16px
          height: 100%
          .avatar
              vertical-align: middle
              width: 40px
              height: 40px
              border-radius: 20px
          span.name
              line-height: 60px
              margin-left: 20px
      .right-btn-list
          width: 70%
          float: right
          background-color: green
          font-size: 18px
          height: 100%
          text-align: right
          span
              line-height: 60px
              padding: 5px 12px
</style>
