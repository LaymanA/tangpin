<template>
  <div class="shequWrap" @click="fn()">
      <img :src="sous" alt="">
      <p class="des">{{des}}</p>
      <div class="iconbox">
      <span>
        <i class="icon iconfont icon-yuedu"></i>{{pinlun}}
      </span>
        <span>
        <i class="icon iconfont icon-iconheji-"></i>{{zan}}
      </span>
        <span>
        <i class="icon iconfont icon-pinglun"></i>{{read}}
      </span>
      </div>
  </div>
</template>
<style>
  @import "../assets/css/font/iconfont.css";
  .shequWrap{
    width: 100%;
  }
  .shequWrap img{
    width: 100%;
  }
  .des{
    padding-left: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    font-size: 14px;
  }
  .iconbox span{
    display: block;
    font-size: 12px;
    float: left;
    color: darkgray;
    margin: 0 5px;
  }
  .iconbox span i{
    font-size: 16px;
  }
</style>
<script>
  export default {
    props:['des','sous','pinlun','zan','read','id'],
    methods:{
      fn:function () {
//        console.log("hello World");
//        this.$router.push({name:'productdetail',params:{id:this.id}})
          this.$router.push({path:'/productdetail',query: {id:this.id}})
      }
    }
  }
</script>
