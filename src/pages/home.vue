<template>
  <div class="homeWrap">
    <Headbar>
      <input type="text" placeholder="搜索" slot="search" class="search"/>
    </Headbar>
      <ul class="tbar">
        <li :class="{active:nowIndex==0}" @click="nowIndex=0"><a href="#/home/gouwu">购物</a></li>
        <li :class="{active:nowIndex==1}" @click="nowIndex=1"><a href="#/home/liwu">礼物</a></li>
        <li :class="{active:nowIndex==2}" @click="nowIndex=2"><a href="#/home/dashi">大师</a></li>
        <li :class="{active:nowIndex==3}" @click="nowIndex=3"><a href="#/home/newproduct">新品上架</a></li>
        <li :class="{active:nowIndex==4}" @click="nowIndex=4"><a href="#/home/pinpai">品牌大全</a></li>
      </ul>
    <div class="homeContent">
      <router-view></router-view>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from '../components/tabbar.vue'
  import Headbar from '../components/headbar.vue'
 /* import jquery from '../assets/JS/jquery-3.2.1.min.js'
  import swiper from '../assets/JS/idangerou.swiper.min.js'*/
  export default{
    components:{
      Tabbar,Headbar
    },
    data:function () {
      return{
        nowIndex:0
      }
    }
  }
</script>
<style>
  *{margin:0;padding: 0;}

  ul,li,ol{
    list-style: none;
  }
  .tbar{
    width: 100%;
    overflow: auto;
    height: 45px;
    background-color: #fafafa;
  }
  .tbar li{
    float: left;
    width: 20%;
    text-align: center;
    height: 45px;
  }
  .tbar li a{
    text-decoration: none;
    color: #000000;
    line-height: 45px;
  }
  .tbar li.active{
    border-bottom: 2px solid darkred;
  }
  .tbar li.active a{
    color: darkred;
  }
  .homeContent{
    height: 550px;
    overflow: scroll;
  }
  .homeContent::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
</style>
