<template>
  <div>
      <ul>
          <li>
            <img src="../../assets/images/logicon01.png" alt="">
            <input type="text" name="" v-model="LUserPhone"  placeholder="请输入手机号">
          </li>
          <li class="yzm">
            <img src="../../assets/images/logicon02.png" alt="">
            <input type="text" name="" v-model="picLyanzhengma" placeholder="请输入验证码">
            <img v-bind:src="imgcode" alt="" class="imgyzm" @click="imgcodes">
          </li>
          <li>
            <img src="../../assets/images/logicon03.png"/>
            <input type="text" placeholder="请输入短信验证码" v-model="duanxingyz">
            <input type="button" value="获取验证码" v-show="show" @click="getphonecode">
            <div class="daojishi" v-show="!show">{{count}}秒后重新获取</div>
          </li>
      </ul>
      <div class="user_login" @click="Login">登录</div>
      <p>
        第一次登录即是注册<br>
        *我已阅读并同意 <router-link to="/module/webuserxy">《用户服务协议》</router-link>
      </p>
  </div>
</template>
<script>
  import qs from 'qs'
  import http from '../../config/http1'
  export default {
    data () {
      return {
        imgcode:'',
        imgdatacode:'',
        uuid:parseInt(10000000*Math.random()),
        LUserPhone:'',
        picLyanzhengma:'',
        show:true,
        count: '',
        timer: null,
        duanxingyz:''
      }
    },
    methods:{
      //验证码倒计时60秒
      getCode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      //切换图形验证码
      imgcodes(){
        this.imgcode = this.imgdatacode + '&v=' + parseInt(100000*Math.random());
      },
      //获取手机验证码
      getphonecode(){
        if(this.$checkLPhone(this.LUserPhone)==true && this.$checkLpicma(this.picLyanzhengma)){
          http.post('/api/public/send-sms',
              qs.stringify({
                  imguuid:this.uuid,
                  imgcode:this.picLyanzhengma,
                  mobile:this.LUserPhone,
                  type:'login'
                }))
            .then((res)=>{
                this.getCode();
            })
            .catch((error)=>{
              $('.tishi #tstext').text(error.response.data.message);
              $('.tishi').show().delay(1000).fadeOut();
            })
        }
      },
      //登录验证
      Login(){
        if(this.$checkLPhone(this.LUserPhone)==true && this.$checkLpicma(this.picLyanzhengma)){
          http.post('/api/public/fast-login',
            qs.stringify({
              username:this.LUserPhone,
              smscode:this.duanxingyz,
            }))
            .then((res)=>{
              this.$local.save("shanbiao",res.data.data.access_token);
              http.defaults.headers.accessToken = res.data.data.access_token;
              let redirect = this.$route.query.redirect
              if(!redirect){
                redirect = 'app'
              }
              if(redirect == 'sellform'){
                this.$router.push({path: '/module/sellform',query: {istrue:true,registration:this.$route.query.registration,parsblblist:this.$route.query.parsblblist,money:this.$route.query.money,name:this.$route.query.name}});
                return;
              }
              if(redirect == 'batchissue'){
                this.$router.push({path: '/module/batchissue',query: {vals:this.$route.query.query}});
                return;
              }
              //分享名片收藏
              if(redirect == 'collectapp'){
                 http.post('/v1/brand/namecard-collect',
                  qs.stringify({
                    nc_id:this.$route.query.id
                  }))
                  .then((res)=>{
                    if(res.status==200){
                      this.$router.push({
                        path: '/module/app'
                      })
                    }
                  })
                  .catch((error)=>{
                    console.log(error)
                  })
                return;
              }
              //分享名片关注
              if(redirect == 'attentionapp'){
                http.put('v1/member/follow/'+this.$route.query.userid+'')
                  .then((res)=>{
                    if(res.status==200){
                      $('.tishi #tstext').text('您已关注成功');
                      $('.tishi').show().delay(2000).fadeOut();
                      this.$router.push({
                        path: '/module/app'
                      })
                    }
                  })
                  .catch((error)=>{
                    $('.tishi #tstext').text(error.response.data.message);
                    $('.tishi').show().delay(2000).fadeOut();
                    this.$router.push({
                      path: '/module/app'
                    })
                  })
                return;
              }

              this.$router.push({
                path: '/module/'+redirect
              })
              this.$buryData('fastlogin');
            })
            .catch((error)=>{
              console.log(error)
              $('.tishi #tstext').text(error.response.data.message);
              $('.tishi').show().delay(1000).fadeOut();
            })
        }

      }
    },
    created(){
        //默认获取验证码
        http.get('/api/captcha/index',{
          params:{
            uuid:this.uuid,
          }
        })
        .then((res)=>{
           this.imgcode = res.request.responseURL;
           this.imgdatacode = res.request.responseURL
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  }
</script>
<style lang="scss" scoped>
    ul{
      padding: 0 0.25rem;
      box-sizing: border-box;
      width: 100%;
      li{
        @include wh(100%,1.1rem);
        line-height: 1.1rem;
        border-bottom: 1px solid #{$borcolor};
        position: relative;
        img{
          width:percentage(42/700);
          height:.42rem;
          vertical-align:middle;
        }
        input[type="text"]{
          width:percentage(600/700);
          height:90%;
          font-size:.26rem;
          padding-left:.3rem;
          box-sizing: border-box;
          color:#{$fontcolor};
        }
        input[type="button"]{
          width:percentage(180/700);
          height:.7rem;
          background:#{$actcolor};
          color: #fff;
          border-radius: 0.5rem;
          font-size: 0.28rem;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
        }
        .daojishi{
          width:percentage(240/700);
          height:.7rem;
          background:#ccc;
          line-height: .7rem;
          text-align: center;
          color: #fff;
          border-radius: 0.5rem;
          font-size: 0.28rem;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          z-index: 2;
        }
        .imgyzm{
          display: block;
          width: 1.6rem;
          height: 0.7rem;
          position: absolute;
          right: 0;top: 0;bottom: 0;
          margin: auto;
        }
      }
    }
    .user_login{
      background: #406ff4;
      width: 5.9rem;
      height: .88rem;
      border-radius: 1rem;
      text-align: center;
      line-height: .88rem;
      color: #fff;
      font-size: 0.32rem;
      margin: .5rem auto;
    }
    p{
      text-align: center;
      color: #c0c3cc;
      font-size: 0.28rem;
      line-height: 0.5rem;
      a{
        color: #95affa;
      }
    }
</style>
