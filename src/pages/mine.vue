<template>
  <div class="mineWrap">
    <Headbar txt="个人中心">
        <i class="icon iconfont icon-fanhui lefticon" slot="lefticon"></i>
        <i class="icon iconfont icon-config seticon" slot="seticon"></i>
    </Headbar>
    <div class="content1">
          <div class="user-info">
            <img src="../assets/user.jpg" alt="">
            <p class="user">Monkey_king</p>
            <p><span class="gray">来自</span>武汉</p>
            <p>收藏商品 <span class="red">0</span> | 收藏品牌 <span class="red">0</span></p>
            <p style="margin-top: 10px;">
              <div style="float: left">我的订单<span class="gray">0</span></div>
              <div style="float: right;">查看全部订单》</div>
              <div style="clear: both;"></div>
            </p>
          </div>
          <ul class="ul1">
            <li>
              <i class="icon iconfont icon-unpaid"></i>
              <p>待付款</p>
            </li>
            <li>
              <i class="icon iconfont icon-daifahuo"></i>
              <p>待发货</p>
            </li>
            <li>
              <i class="icon iconfont icon-daishouhuo"></i>
              <p>待收货</p>
            </li>
            <li>
              <i class="icon iconfont icon-iconfuzhi"></i>
              <p>已完成</p>
            </li>
            <li>
              <i class="icon iconfont icon-yiguanbi"></i>
              <p>已关闭</p>
            </li>
          </ul>
          <div class="qiandao">
            <div class="left">
              <i class="icon iconfont icon-jifen3"></i>
            </div>
            <div class="left">
              <p>已连续签到0天</p>
              <p class="gray">今日可获得30点积分</p>
            </div>
            <button class="btn1">签到</button>
          </div>
          <ul class="ul2">
            <li>
              <Usericon icons="icon iconfont icon-quan" txt="我的券" num="0"></Usericon>
            </li>
            <li>
              <Usericon icons="icon iconfont icon-jifen3" txt="积分" num="0"></Usericon>
            </li>
            <li>
              <Usericon icons="icon iconfont icon-icon26" txt="浏览记录" num="0"></Usericon>
            </li>
            <li>
              <Usericon icons="icon iconfont icon-xiaolian" txt="皮具翻新" num="0"></Usericon>
            </li>
            <li>
              <Usericon icons="icon iconfont icon-paizhao" txt="我的美物" num="0"></Usericon>
            </li>
            <li>
              <Usericon icons="icon iconfont icon-shoucang" txt="收藏夹" num="0"></Usericon>
            </li>
            <li>
              <Usericon icons="icon iconfont icon-guanzhu" txt="我的关注" num="0"></Usericon>
            </li>
            <li>
              <Usericon icons="icon iconfont icon-wode1" txt="我的粉丝" num="0"></Usericon>
            </li>
          </ul>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from '../components/tabbar.vue'
  import Headbar from '../components/headbar.vue'
  import Usericon from '../components/usericon.vue'
  require('../assets/css/font/iconfont.css')
  export default{
    components:{
      Tabbar,Headbar,Usericon
    }
  }
</script>

<style>
  @import "../assets/css/font/iconfont.css";
  .lefticon{
    left: 5px;
    top: -5px;
    font-size: 20px;
    position: absolute;
  }
  .seticon{
    right: 20px;
    top: -5px;
    font-size: 20px;
    position: absolute;
  }
  .content1{
    background-color: #fafafa;
  }
  .user-info p{
    line-height: 30px;
  }
  .user-info img{
    width: 62px;
    height: 62px;
    border-radius: 50%;
  }
  .user-info{
    border-bottom: 1px solid lightgray;
    background-color: #fafafa;
    text-align: center;
    padding: 15px 10px 10px;
  }
  .user{
    font-weight: bold;
    margin-bottom: 5px;
  }
  .gray{
    color: #ccc;
  }
  .red{
    color: darkred;
  }
  .ul1{
    background-color: #fafafa;
    width: 100%;
    overflow: auto;
  }
  .ul1 li{
    float: left;
    width: 20%;
    text-align: center;
  }
  .ul1 li i{
    color: #8a5a60;
  }
  .left{
    float: left;
  }
  .qiandao{
    padding: 15px 10px;
    overflow: auto;
    background-color: white;
  }
  .qiandao p{
    font-size: 14px;
  }
  .qiandao i{
    display: block;
    margin-top: -5px;
    margin-right: 5px;
    font-size: 40px;
    color: #8a5a60;
  }
  .btn1{
    float: right;
    display: block;
    color:#8a5a60 ;
    width: 80px;
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
    background-color: white;
    border: 1px solid #8a5a60;
  }
  .ul2{
    margin-top: 20px;
    background-color: white;
    width: 100%;
    overflow: auto;
  }
  .ul2 li{
    width: 50%;
    float: left;
  }
</style>
