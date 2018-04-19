<template>
 <div>
   <div class="header">
     <a class="fhicn" @click="backHandle"></a>
     <div class="title">专利申请</div>
     <div class="miue"></div>
   </div>
   <div class="banner"></div>
   <div class="price">
     <h6>发明申请</h6>
     <span>优惠价：￥0</span>
     <i>市场价：<span>￥200</span></i>
   </div>
   <ul class="form">
     <h6>类型</h6>
     <li class="active"> 代办官费减免手续</li>
     <li>发明申请</li>
     <li>特殊领域发明申请</li>
     <li>实用新型申请 </li>
     <li>实用新型担保申请</li>
     <li>外观设计申请</li>
     <li>外观设计担保申请    </li>
     <li>专利权评价报告</li>
     <li> 专利变更</li>
     <li>年费代缴</li>
   </ul>
   <div class="serve">
     <h6>服务介绍</h6>
     <div class="font active">
       一、费减比例<br>
       1、	申请人为单个个人或单个公司：减缓85%。<br>
       2、	申请人为两个：减缓70%。<br>
       二、可减缴项目：<br>
       申请费、发明专利实审费、前六年年费、复审费<br>
       三、费减资格要求及证明资料<br>
       （一）个人：月收入低于3500元，年收入低于42000元；<br>
       1、	身份证复印件；<br>
       2、	加盖单位公章的收入证明原件；<br>
       无固定工作的，提交户籍所在地或者经常居住地县级民政部门或乡镇人民政府（街道办事处）出具的关于其经济困难情况的证明-盖章）；<br>
       （二）本年度新成立公司：营业执照副本复印件加盖公章（仅限本年度办理费减可行）<br>
       （三）本年度前成立的公司：上一年度全年应纳税所得额（收入）低于30万元。<br>
       1、营业执照、组织机构代码证复印件，或者印有组织机构代码、统一社会信用代码的营业执照（副本）复印件；<br>
       2、上年度企业所得税年度纳税申报表复印件。<br>
       （四）事业单位、社会团体、非营利性科研机构：<br>
       1、法人证书加盖公章；<br>
       2、组织机构代码证复印件。<br>
       （五）在校学生：<br>
       1、身份证复印件；<br>
       2、学校出具的在读证明。<br>
     </div>
     <ul class="er">
       <li>
         <span>服务内容 </span>
         <div class="right">发明专利申请  </div>
       </li>
       <li>
         <span>服务地区</span>
         <div class="right">全国</div>
       </li>
       <li>
         <span>服务时间  </span>
         <div class="right">18个月以上</div>
       </li>
       <li>
         <span>费用说明</span>
         <div class="right">
           <p>官费 :</p>
           申请费：全额￥950一个人申请人减免后￥185两个申请人减免后￥350<br>
           实质审查费：全额：￥2500一个人申请人减免后￥375两个申请人减免后￥750<br>
           授权办理登记费：￥255<br>
           年费：（1~3年） 全额￥900/年一个人申请人减免后￥135/年两个申请人减免后￥270/年
           <p>服务费 :</p>
           （包括实质审查阶段意见答复）普通领域￥3998特殊领域￥4998（电子通信计算机生物医药等）
         </div>
       </li>
       <li>
         <span>需准备材料  </span>
         <div class="right">
           <span>1.技术交底资料（重要）</span><br>
           2.申请人与发明人 证明材料（营业执照、身份证等）</div>
       </li>
     </ul>
     <ul class="si">
       <li>
         <span>服务内容 </span>
         <div class="right">实用新型专利申请  </div>
       </li>
       <li>
         <span>服务地区</span>
         <div class="right">全国</div>
       </li>
       <li>
         <span>服务时间  </span>
         <div class="right"> 6-12个月</div>
       </li>
       <li>
         <span>费用说明</span>
         <div class="right">
           <p>官费 :</p>
           申请费：全额￥500 一个人申请人减免后￥75两个申请人减免后￥150<br>
           授权办理登记费：￥205<br>
           年费：（1~3年） 全额￥600/年一个人申请人减免后￥90/年两个申请人减免后￥180/年
           <p>服务费 :</p>
           普通申请￥1998担保申请￥2998（不成功退全款）
         </div>
       </li>
       <li>
         <span>需准备材料  </span>
         <div class="right">
           <span>1.技术交底资料（重要）</span><br>
           2.申请人与发明人 证明材料（营业执照、身份证等）</div>
       </li>
     </ul>
     <ul class="liu">
       <li>
         <span>服务内容 </span>
         <div class="right">外观设计申请  </div>
       </li>
       <li>
         <span>服务地区</span>
         <div class="right">全国</div>
       </li>
       <li>
         <span>服务时间  </span>
         <div class="right"> 6-12个月</div>
       </li>
       <li>
         <span>费用说明</span>
         <div class="right">
           <p>官费 :</p>
           申请费：全额￥500 一个人申请人减免后￥75两个申请人减免后￥150<br>
           授权办理登记费：￥205<br>
           年费：（1~3年） 全额￥600/年一个人申请人减免后￥90/年两个申请人减免后￥180/年
           <p>服务费 :</p>
           普通申请￥598担保申请￥1098（不成功退全款）
         </div>
       </li>
       <li>
         <span>需准备材料  </span>
         <div class="right">
           1.产品图片或照片 ； 以及产品简介<br>
           2.申请人与发明人证明材料(营业执照，身份证等)
         </div>
       </li>
     </ul>
     <div class="fontqi">
       1.专利权评价报告：<br>
       国家知识产权局根据专利权人或者利害关系人的请求，在实用新型或者外观设计被授予专利权后对相关实用新型或外观设计专利进行检索，并就该专利是否符合专利法及其实施细则规定的授权条件进行分析和评价，作出专利权评价报告，这是一种官方出具的较权威专利质量评价。
       <br>2.作用：<br>
       因实用新型和外观设计专利申请在审查时仅通过初步审查程序即可授权，因此，实用新型或者外观设计被授予专利权后，并不表示专利权状态稳定。国家知识产权局应专利权人或者相关利害关系人请求进一步做出的专利权评价报告，相当于国家知识产权局对获权实用新型或外观设计专利的专利性和专利权稳定性的进一步核查。
       作为专利权人在获得授权后，要求国家知识产权局作出专利权评价报告，是对实用新型或外观设计专利的价值再次进行官方的“评估性评价”。在专利权的效力受到质疑时，专利权评价报告可以作为证明专利权具有新颖性和创造性的证据，也是日后解决专利侵权必要的资料储备，在专利侵权诉讼和专利行政投诉等过程中具有重要作用。在海关备案，各种展会，专利权转化、商业推广和交易包括专利权许可、质押、转让与入股等方面也可以作为证明专利含金量的有效依据。
       <br>	3.时间与费用：<br>
       官费2400元，办理时间一般在两个月左右。
     </div>
   </div>
   <div class="flow"></div>
   <div class="flow4"></div>
   <div class="flow6"></div>
   <div class="flow9"></div>
   <div class="flow10"></div>
   <div class="certificate"></div>
   <div class="certificate4"></div>
   <div class="benefit"></div>
   <div class="know"></div>
   <div class="distinction"></div>
   <div class="fotop"></div>
   <a href=""  class="footer">在线咨询</a>

 </div>
</template>
<script>
  import http from '../../config/http'
  import  '../../config/patent'
  export default {
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/patent.scss";
</style>
