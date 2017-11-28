<template>
  <div class="detailWrap">
    <div class="modal" v-show="bol">
      <p class="show">确认购买此商品吗？</p>
      <div class="btnBox1">
        <input class="queren" type="button" value="确认" @click="buy">
        <input class="quxiao" type="button" value="取消" @click="notBuy">
      </div>

    </div>
    <div v-show="bol" class="mengban"></div>

    <Headbar txt="商品详情">
      <i class="icon iconfont icon-fanhui lefticon" slot="lefticon" @click="back"></i>
    </Headbar>
    <banner swiperid="detailbanner">
     <div slot="swiper-con" class="swiper-slide">
       <img :src="detail[0]" alt="">
     </div>
     <div slot="swiper-con" class="swiper-slide">
       <img :src="detail[1]" alt="">
     </div>
     <div slot="swiper-con" class="swiper-slide">
       <img :src="detail[2]" alt="">
     </div>
     <div slot="swiper-con" class="swiper-slide">
       <img :src="detail[3]" alt="">
     </div>
   </banner>
    <p>浓浓的玫瑰紫果冻宝宝锁</p>
    <p><span class="red">￥450.00</span></p>
    <div class="jifen">
      <p>
        <i>积分</i>可获得450积分
      </p>
      <p>
        <i>服务</i>包邮  七天无理由退货  正品保证
      </p>
      <p>
        <i>库存</i>1件
      </p>
    </div>
    <div class="comment">累计评价 <span style="float: right;">暂无评论＞</span></div>
    <div class="detailBox">
      <p class="red" style="line-height: 45px;">图文详情</p>
      <img :src="allDates.img6" alt="">
      <p style="margin-top: 20px;">古典雅致的中国风元素，在现代雕刻师的重新演绎中，创造了新版的宝宝锁系列。小时候一片银锁的记忆，长大后想起那份满怀着父母关怀的寄托，一枚锁，一份平安。浓郁的玫瑰红，纯手工双面立体雕刻，果冻感圆鼓鼓的造型，配以心型坠扣，更为匠心独具，美物给予平安快乐！</p>
      <img :src="allDates.img7" alt="">
      <p style="text-align: center;padding-bottom: 5px">主石尺寸：24*19*10mm、坠总长：39mm</p>
      <p style="text-align: center;padding-bottom: 5px">配珠：天然南红、纯925银、进口米兰玉线</p>
      <img :src="allDates.img1" alt="">
      <img :src="allDates.img2" alt="">
      <img :src="allDates.img3" alt="">
      <img :src="allDates.img4" alt="">
      <img :src="allDates.img5" alt="">
      <p style="text-align: center">/ 千玉遇千寻 /</p>
      <p>
        都说玉遇有缘人，在“千玉遇千寻”这里寻到这些玉每一段都是不浅的缘分。而寻找本身就是一件让人着迷的事情，而美玉是要去寻找的，不仅仅是美玉，任何物件，只要你用心去寻找，那一定会得到一个圆满的结果。“千玉遇千寻就是这样一品牌，用心做着自己喜欢的事，用心奉献着属于千寻的审美的美物，她相信，每一块玉都独一无二，每一块玉都有属于它的韵味，只要你悉心对它，那它同样会温柔待你。
      </p>
      <p style="text-align: center;font-size: 18px;color: black;margin-top: 15px">美物真品，尽在唐品</p>
      <img style="width: 200px;margin-left: 100px;margin-top: -3px" src="../../static/images/productdetail/qrcode_for_weixin-1f6e29a08975cac2b238a918c7756fa4.jpg" alt="">
      <p style="text-align: center;font-size: 18px;color: black;">长按既可以关注唐品服务号</p>
    </div>
    <div class="personDes">
      <p style="color: black;font-size: 20px">相关大师</p>
      <div style="text-align: center;">
        <img style="width: 100px;height: 100px;border-radius: 50%;" src="../../static/images/productdetail/common-bddf118e-4fa1-424e-b331-85c716fede57.jpg" alt="">
        <p>千玉与千寻</p>
      </div>
      <p style="padding:0 60px;text-indent: 2rem;">
        她是疯狂痴迷于玉石的“石痴”，也是热爱手工原创的设计师。她的每一件作品都是精心制作，从挑选原石到完成构思，每一件首饰都是经过慢慢的琢磨才能得到。每一件都包...
      </p>
      <ul class="imgBox">
        <li>
          <img src="../../static/images/productdetail/users-10020-item_multiple-2a2e7dc9-2615-497f-822d-03b11f1e4165.jpg" alt="">
        </li>
        <li>
          <img src="../../static/images/productdetail/users-10020-item_multiple-2a975b6e-0cee-4fea-9fe2-fac2f5352738.jpg" alt="">
        </li>
        <li>
          <img src="../../static/images/productdetail/users-10020-item_multiple-5cb3376d-b248-4b53-ae1f-a163e1be975c.jpg" alt="">
        </li>
        <li>
          <img src="../../static/images/productdetail/users-10020-item_multiple-035a8f4b-804b-4ec3-837e-ff88bb1b4d12.jpg" alt="">
        </li>
      </ul>
    </div>
    <ul class="footbar">
      <li>
        <i class="icon iconfont icon-shoucang"></i>
      </li>
      <li>
        <i class="icon iconfont icon-pinglun"></i>
      </li>
      <li>
          <i class="icon iconfont icon-gouwuche1" @click="fn4()"></i>
      </li>
      <li @click="store()">
        加入购物车
      </li>
      <li class="actived">
        立即购买
      </li>
    </ul>
  </div>
</template>
<style>
  .detailWrap .swiper-container{
    width: 100%;
    height: 300px;
  }
  .detailWrap .swiper-slide{
    height: 100%;
  }
  .bannerWrap img{
    width: 100%;
  }
  .btnBox1 input{
    width: 60px;
    height: 45px;
    margin: 25px 20px 0px;
    border-radius: 5px;
    color: white;
  }
  .btnBox1 input.queren{
    background-color: green;
  }
  .btnBox1 input.quxiao{
    background-color: red;
  }
  .detailWrap .lefticon{
    position: absolute;
    left: 10px;
  }
  .jifen i{
    display: block;
    float: left;
    border: 1px solid darkred;
    color: darkred;
    padding: 0 5px;
    margin: 0px 10px;
  }
  .jifen{
    margin-top: 15px;
  }
  .jifen p{
    height: 40px;
    background-color: white;
  }
  .jifen p:first-of-type{
    padding-top: 15px;
  }
  .detailWrap{
    background-color: #fafafa;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  .detailWrap::-webkit-scrollbar{
    width: 2px;
    height: 10px;
  }

  .detailWrap>p{
    text-align: center;
    line-height: 40px;
    background-color: white;
  }
  .detailWrap .red{
    color: darkred;
    font-size: 16px;
    font-weight: 600;
  }
  .comment{
    padding:  0 10px;
    background-color: white;
    margin-top: 15px;
    height: 45px;
    line-height: 45px;
  }
  .detailBox{
    margin-top: 15px;
    background-color: white;
    padding: 10px;
  }
  .detailBox img{
    width: 100%;
    margin-top: 10px;
  }
  .personDes{
    background-color: white;
    margin-top: 10px;
    padding: 10px;
  }
  .imgBox{
    width: 100%;
    overflow: auto;
    margin-top: 10px;
  }
  .imgBox li{
    width: 25%;
    float: left;
    box-sizing: border-box;
    padding-right: 5px;
  }
  .imgBox li img{
    width: 100%;
  }
  .footbar{
    height: 45px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
  }
  .footbar li{
    float: left;
    text-align: center;

  }
  .footbar li i{
    font-size: 20px;
  }
  .footbar li:nth-child(1){
    width: 11.11%;
  }
  .footbar li:nth-child(2){
    width: 11.11%;
  }
  .footbar li:nth-child(3){
    width: 11.11%;
  }
  .footbar li:nth-child(4){
    width: 33.33%;
  }
  .footbar li:nth-child(5){
    width: 33.33%;
  }
  .actived{
    background-color: #cc3f4f;
    color: white;
  }
  .modal{
    position: fixed;
    width: 300px;
    height: 150px;
    background-color: #cccccc;
    text-align: center;
    z-index: 9999;
    left: 50%;
    margin-left: -150px;
    border-radius: 20px;
    box-sizing: border-box;
    padding-top: 10px;
    bottom: 100px;
  }
  .show{
    line-height: 45px;
    border-bottom: 1px dashed black;
  }
  .mengban{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    z-index: 999;
  }
</style>
<script>
  import Headbar from '../components/headbar.vue'
  import banner from '../components/banner.vue'
  import jquery from '../assets/libs/jquery-3.2.1.min'
  export default {
    data:function () {
      return {
        getId:0,
        detail:[],
        bol:false,
        allDates:{}
      }
    },
    components:{
      banner,Headbar
    },
    created:function () {
      var that=this;
      this.getId=this.$route.query.id;
      this.axios.get("/api/productdetail").then(function (res) {
        console.log(res.data.data);
        res.data.data.forEach(function (i,k) {
          if(i.id==that.getId){
            that.allDates=i;
            for(var k in i.banner){
              that.detail.push(i.banner[k].img);
            }
          }
        })
      })
    },
    mounted:function () {
      $('.footbar li').click(function () {
        $(this).addClass('actived');
        $(this).siblings().removeClass('actived');
      })
    },
    methods:{
      back:function () {
        this.$router.push('/community');
      },
      fn4:function () {
        this.$router.push('/cart');
        sessionStorage.setItem("sela","cart");
      },
      store:function () {
//        this.$store.state.cartList.push(this.getId);
        if(this.$store.islogin){
          this.bol=true;
        }else {
          this.$router.push('/login')
        }
      },
      buy:function () {
        this.bol=false;
        this.$store.commit('increment', this.getId)
      },
      notBuy:function () {
        this.bol=false;
      }
    }
  }
</script>
