<template>
  <div class="brseach">
    <div class="headerseach">
      <div class="return" @click="backHandle"></div>
      <input type="text" v-model="val" style="background-color: #f7f7f8">
      <div class="seek" @click="seach">搜索</div>
    </div>
    <div class="borders"></div>
    <ul class="brand" v-if="isshow">
      <li v-for="item in mgslist">
        <img :src="item.title" alt="">
        <span>{{item.name}}</span><p><i>{{item.items}}</i>件</p>
      </li>
    </ul>
    <div class="click" @click="click">深度了解品牌情况</div>
    <ul class="brfooter">
      <li>
        <a :href="href">
          <img src="../../assets/images/buyicon03.png" alt="">
          <span>下载APP</span>
        </a>
      </li>
      <li
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
      >
        <img src="../../assets/images/buyicon04.png" alt="">
        <span>关注微信公众号</span>
      </li>
    </ul>
    <div class="null" v-if="!isshow">
      <img src="../../assets/images/deng.png" alt="">
      <span>温馨提示</span>
      <p>您搜索的关键词未被系统收录，请留下您的联系方式和你输入的
        关键词名称，我们将会在24小时内以短信形式发送给您。</p>
      <ul>
        <li><span>查询关键词:</span> <input type="text" v-model="val" placeholder="请输入您要查询的关键词"></li>
        <li><span>联系方式：</span><input type="text" v-model="phone" placeholder="请输入您接收短信的手机号码"></li>
      </ul>
      <i>注意：联系方式只能留一次，请谨慎填写。</i>
      <div class="sumber" @click="sumbet">提交</div>
    </div>
    <div class="Save" v-show="isalert" >
      <div class="shade"  @click="isalert = false"></div>
      <div class="alert">
        <input type="text" placeholder="请输入手机号" v-model="ipone">
        <p>
          <span>提示：</span>系统会在1小时后品牌报告以短信的形式发送给您。
        </p>
        <div class="button">
          <span @click="isalert = false">取消</span>
          <span @click="submit">确认</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
  import http from '../../config/http'
  export default{
    data(){
      return{
        val:this.$route.query.vals,
        message:this.$wx(),
        isalert:false,
        mgslist:'',
        ipone:'',
        href:'',
        isshow:true,
        phone:'',
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
      http:function () {
          this.$buryData('brandseach')
        http.get('/v1/tool/brand',{
          params:{
            type:'brand',
            keyword: this.val
          }
        })
          .then((res)=>{
            if(res.data.data[1].items == 0){
                this.isshow = false
            }else {
              this.isshow = true
               this.mgslist= res.data.data;
            }
          })
          .catch((error)=>{
            console.log(error);
          })
      },
      seach:function () {
        this.http();
      },
      submit:function () {
        if(this.$checkLPhone(this.ipone)){
          this.$crm(this.ipone,'货架品牌维权','测试');
          $('.tishi #tstext').text('您的申请已提交，我们客服会在1小时内联系您');
          $('.tishi').show().delay(1500).fadeOut();
          this.$buryData('brandsubmit')
          this.isalert = false;
        }
      },
      click:function () {
        this.isalert = true;
        this.$buryData('brandclick')
      },
      sumbet:function () {
        if(this.val == ''){
          $('.tishi #tstext').text('请输入您要查询的关键词');
          $('.tishi').show().delay(1000).fadeOut();
        }
        if(this.$checkLPhone(this.phone)){
          this.$crm(this.phone,'货架品牌维权',this.val+'测试');
          $('.tishi #tstext').text('您的申请已提交，我们客服会在1小时内联系您');
          $('.tishi').show().delay(1000).fadeOut();
        }
      }
    },
    created(){
     this.http();
      http.get('/v1/biz/version/1',{
      })
        .then((res)=>{
          this.href = res.data.data.url;
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/industrybrand.scss"
</style>
