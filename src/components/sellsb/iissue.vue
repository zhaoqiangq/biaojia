  <template>
    <div class="iissue">
        <div class="header">我的发布</div>
      <scroller
        class="my-scroller"
        ref="myScroller"
        :on-refresh="refresh"
        :on-infinite="infinite"
        snappingHeight="60"
        style="top:1rem"
      >
        <ul class="sblist">
            <router-link tag="li" v-for="item,index in sblist" :key="index" :to="{path:'/module/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
            <img :src="item.tm_img" alt="">
            <div class="font">
              <h6>{{item.tm_name}} </h6>
              <p><span>商标类别 ：{{item.tm_bigtype}} </span><span></span>注册号：{{item.reg_num}}</p>
              <p>申请人：{{item.apply_name}}</p>
              <p>商标状态：{{item.current_status}}</p>
            </div>
          </router-link>
        </ul>
        <ul class="sblist" v-if="jiazailist.length">
          <router-link tag="li"v-for="item,index in jiazailist" :key="index" :to="{path:'/module/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
            <img :src="item.tm_img" alt="">
            <div class="font">
              <h6>{{item.tm_name}} </h6>
              <p><span>商标类别 ：{{item.tm_bigtype}} </span><span></span>注册号：{{item.reg_num}}</p>
              <p>申请人：{{item.apply_name}}</p>
              <p>商标状态：{{item.current_status}}</p>
            </div>
          </router-link>
        </ul>
      </scroller>
      <div class="advertising" v-show="imgshow">
         <a :href="href"></a>
        <div @click="close"></div>
      </div>
      <ul class="sellfooter">
        <router-link tag="li"  :to="{path:'/module/sellform'}">
          <img src="../../assets/images/sellicon03.png" alt="">发布商标
        </router-link>
        <router-link tag="li"  :to="{path:'/module/iissue'}">
          <img src="../../assets/images/sellicon06.png" alt="">我的发布
        </router-link>
        <li @click="ishref = !ishref"
        ><img src="../../assets/images/sellicon07.png" alt="">关注我们</li>
      </ul>
      <ul class="footlist" v-if="ishref">
        <li   v-clipboard:copy="message"
              v-clipboard:success="onCopy">微信公众号</li>
        <li><a :href="href">下载APP</a></li>
      </ul>
    </div>
  </template>
  <script>
    import qs from 'qs'
    import http from '../../config/http'
    let firstLoaded = false;
    export default {
        data(){
          return{
              sblist:'',               //我的发布数据
            imgshow:true,             //开关：是否关闭是否下载APP广告
            message:this.$wx(),   //微信公众号
            pages:1,                  //请求的页数
            jiazailist:[],             //后加载的数据
            href:'',
            ishref:false
          }
        },
      methods:{
//            关闭下载APP广告
        close(){
            this.imgshow =false
        },
        //关注公众号
        onCopy:function (e) {
          $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
          $('.tishi').show().delay(1500).fadeOut();
        },
        //请求数据函数
        https:function () {
          http.get('/v1/biz/trademark-storage/0',{
            params:{
              page:this.pages,    //页数
            }
          })
            .then((res)=>{
              this.sblist = res.data.data.data.data;
              this.$refs.myScroller.finishPullToRefresh();
              this.jiazailist = [];
              firstLoaded = true;
            })
            .catch((error)=>{
              console.log(error)
            })
        },
        //上拉加载
        infinite() {
          if (!firstLoaded) {
            this.$refs.myScroller.finishInfinite();
            return;
          }
          this.pages+= 1 ;
          http.get('/v1/biz/trademark-storage/0',{
            params:{
              page:this.pages,    //页数
            }
          })
            .then((res)=>{
              if(res.data.data.data.data==''){
                this.$refs.myScroller.finishInfinite(2);
                $('.loading-layer').css({'height':'160px'})
                $('.no-data-text').css({'line-height':'40px'})
              }else {
                var datalist = res.data.data.data.data;
                this.jiazailist = this.jiazailist.concat(datalist)
                this.$refs.myScroller.finishInfinite();
              }
            })
            .catch((error)=>{
              console.log(error)
            })
        },
        //下拉刷新
        refresh(){
          this.pages = 1;
          this.https()
        },
      },
        created(){
          this.pages = 1;
          this.https()
          this.$buryData('Iissue');
          http.get('/v1/biz/version/1',{
          })
            .then((res)=>{
              this.href = res.data.data.url;
            })
            .catch((error)=>{
              console.log(error);
            })
        },
    }
  </script>
  <style lang="scss" scoped>
    @import "../../assets/css/sellsb.scss"
  </style>
