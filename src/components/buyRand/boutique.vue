<template>
  <div class="boutique">
    <div class="bheader">
      <div class="input">
        <div class="selete" @click="isActive = !isActive">{{secrchval}}
          <ul v-show="isActive">
            <li @click="secrchval='按行业产品'">按行业产品</li>
            <li @click="secrchval='按商标名称'">按商标名称</li>
          </ul>
        </div>
        <input type="text" placeholder="请输入行业产品名称" v-model="val">
      </div>
       <span @click="search">搜索</span>
    </div>
    <scroller
      class="my-scroller"
      ref="myScroller"
      :on-refresh="refresh"
      :on-infinite="infinite"
      snappingHeight="60"
      style="top:1.2rem"
      v-show="scrisShow"
    >
     <ul class="bsblist">
       <router-link tag="li" v-for="item,index in sblist" :key="index" :to="{path:'/module/sbdetails',query:{sblb:item.sbbigclassid,zch:item.sbid,isshow:true,zhineng:false}}">
          <img :src="item.sbpic" alt="">
          <div class="font">
            <h6>{{item.sbbigclassid}}类 {{item.sbname}}</h6>
            <div class="ppai">品牌寓意</div>
            <p>{{item.sbdescription}}</p>
          </div>
       </router-link>
     </ul>
    </scroller>
    <div class="null" v-show="!scrisShow">
      <img src="../../assets/images/what.png" alt="">
      暂无相关数据
      <div class="all" @click="all">查询全部</div>
    </div>
  </div>
</template>
<script>
  import http from '../../config/http'
  let firstLoaded = false;
  export default{
      data(){
          return{
            isActive:false,
            secrchval:'按行业产品',
            pages:1,
            val:'',
            sblist:[],
            scrisShow:true
          }
      },
      methods:{
          http(){
            this.pages = 1;
            var typenumber;
            if(this.secrchval=="按行业产品"){
              typenumber = 2
            }else {
              typenumber = 1
            }
              http.get('v1/market/quality',{
                params:{
                  type:typenumber,    //类型
                  page:this.pages,    //页数
                  name:this.val,     //搜索词
                }
              })
              .then((res)=>{
                this.sblist = [];
               if(res.data.data.count==0){
                 this.scrisShow = false
               }else {
                 this.scrisShow = true;
                 this.sblist = res.data.data.list;
                 this.$refs.myScroller.finishPullToRefresh();
                 firstLoaded = true;
               }
              })
              .catch((error)=>{
                console.log(error);
              })
          },
        //上拉加载
        infinite(){
          if (!firstLoaded) {
            this.$refs.myScroller.finishInfinite();
            return;
          }
          this.pages+=1;
          var typenumber;
          if(this.type=="按行业产品"){
            typenumber = 2
          }else {
            typenumber = 1
          }
          http.get('v1/market/quality',{
            params:{
              type:typenumber,    //类型
              page:this.pages,    //页数
              name:this.val,     //搜索词
            }
          })
            .then((res)=>{
              if(res.data.data.list==''){
                this.$refs.myScroller.finishInfinite(2);
                $('.loading-layer').css({'height':'60px'})
                $('.no-data-text').css({'line-height':'40px'})
              }else {
                var datalist = res.data.data.list;
                this.sblist = this.sblist.concat(datalist);
                this.$refs.myScroller.finishInfinite();
              }
            })
            .catch((error)=>{
              console.log(error);
            })
        },
        //下拉刷新
        refresh(){
            this.val = '';
            this.secrchval = '按行业产品';
          this.http();
        },
        //搜索
        search(){
          this.http();
        },
        //all
        all(){
          this.val = '';
          this.secrchval = '按行业产品';
          this.http();
        }
      },
      created(){
        this.http();
      },
    // 记录上次滚动的位置
    beforeRouteLeave(to,form,next){
      let scrolltop = this.$refs.myScroller && this.$refs.myScroller.getPosition() && this.$refs.myScroller.getPosition().top;
      form.meta.scrolltops = scrolltop;
      next();
    },
    // 滚动到上次的位置
    beforeRouteEnter(to,from,next){
      next(vm => {
        setTimeout(function () {
          vm.$refs.myScroller.scrollTo(0, to.meta.scrolltops, false);
        },0)//同步转异步操作
      })
    },
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss";
</style>
