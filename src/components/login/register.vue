<template>
  <div>
    <div class="loginHader">
      <div class="retreat" @click="backHandle"></div>
      <img src="../../assets/images/head.png" alt="">
      <div class="kuaijie" v-show="isaccount">快捷登录</div>
    </div>
    <ul class="loginNav" v-show="!isaccount">
      <router-link to="/module/register" tag="li">快捷登录</router-link>
      <router-link to="/module/account" tag="li">账号登录</router-link>
    </ul>
    <router-view class="conten"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'register',
    data () {
      return {
        isaccount:this.$route.query.isaccount
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
    },
  }
</script>
<style lang="scss" scoped>
  .loginHader{
    width: 100%;
    height: 3.62rem;
    background: url(#{$backimg}logback.png)no-repeat;
    background-size: 7.5rem 3.62rem;
    position: relative;
    background-position: center center;
    .retreat{
      @include whs(.7rem);
      background: url(#{$backimg}icon01.png)no-repeat;
      background-size: .48rem .48rem;
      background-position: top left;
      position: absolute;
      top:.26rem;left: .25rem;
      margin: auto;
    }
    img{
      width: 1.6rem;
      @include tlrb;
    }
  }
  .loginNav{
    width: 100%;
    height: 1.3rem;
    border-bottom: 1px solid #{$borcolor};
    @include clear;
    li{
      width: 50%;
      height: 100%;
      float: left;
      color: #{$decolor};
      font-size: .32rem;
      text-align: center;
      position: relative;
      line-height: 1.3rem;
      &:after{
          content: "";
          @include wh(1.24rem,.04rem);
          position: absolute;
          bottom: -1px;left: 0;right: 0;
          margin: auto;
          background: #{$actcolor};
          display: none;
       }
      &.is-active{
          color: #{$actcolor};
          &:after{
            display: block;
          }
       }
    }
  }
  .kuaijie{
    width: 100%;
    position: absolute;
    left: 0;right: 0;bottom: 0.3rem;
    margin: auto;
    font-size: .32rem;
    color: #ffffff;
    text-align: center;
  }
</style>
