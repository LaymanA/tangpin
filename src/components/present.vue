<template>
  <div class="presentWrap">
    <img class="logo1" :src="logo" alt="">
    <p class="describe">{{des}}</p>
    <p class="more">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </p>
    <ul class="ti">
      <li v-for="item in list">
        <img :src="item.img" alt="">
      </li>
    </ul>
    <div class="dos">
      <span>
        <i class="icon iconfont icon-shoucang"></i>{{num}}
      </span>
      <span>
        <i class="icon iconfont icon-yuedu"></i>{{read}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props:['logo','des','list','num','read']
  }
</script>

<style>
  .presentWrap{
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    background-color: white;
  }
  .logo1{
    width: 100%;
  }
  .describe{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .more{
    text-align: center;
    padding:5px 0;
  }
  .more span{
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: black;
  }
  .ti{
    overflow: auto;
  }
  .ti li{
    width: 25%;
    box-sizing: border-box;
    padding-right: 8px;
    float: left;
  }
  .ti li img{
    width: 100%;
  }
  .dos{
    overflow: auto;
    height: 40px;
    line-height: 40px;
  }
  .dos span{
    display: block;
    float: left;
    margin-right: 100px;
    color: black;
  }
  .dos span i{
    color: gray;
    font-size: 20px;
    padding-right: 5px;
    vertical-align: middle;
  }
</style>
