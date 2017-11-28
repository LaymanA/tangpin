<template>
  <div class="communityWrap">
    <Headbar txt="社区"></Headbar>
    <ul class="sbar">
      <li :class="{active:nowIndex==0}" @click="nowIndex=0">
        <a href="#/community/huanxi">欢喜</a>
      </li>
      <li :class="{active:nowIndex==1}" @click="nowIndex=1">
        <a href="#/community/shuowu">说物</a>
      </li>
      <li :class="{active:nowIndex==2}" @click="nowIndex=2">
        <a href="#/community/zhiwu">知物</a>
      </li>
    </ul>
    <div class="comContent">
      <router-view></router-view>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<style>
  .sbar{
    width: 100%;
    padding: 0 30px;
    overflow: auto;
    background-color: #fafafa;
    box-sizing: border-box;
  }
  .sbar li{
    width: 33.3%;
    float: left;
    height: 45px;
  }
  .sbar li.active{
    border-bottom: 2px solid green;
  }
  .sbar li a{
    display: block;
    text-align: center;
    text-decoration: none;
    color: black;
    height: 45px;
    line-height: 45px;
  }
  .comContent{
    height: 500px;
    overflow: scroll;
  }
  .comContent::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
</style>

<script>
  import Tabbar from '../components/tabbar.vue'
  import Headbar from '../components/headbar.vue'

  export default{
    data:function () {
      return{
        nowIndex:2
      }
    },
    components:{
      Tabbar,Headbar
    }

  }
</script>
