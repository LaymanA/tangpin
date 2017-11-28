
<template>
  <div class="tabbarWrap">
      <Item txt="首页" mark="home" @change="getVal">
        <i class="icon iconfont icon-shouye" slot="normalImg"></i>
        <i class="icon iconfont icon-shouye red" slot="activeImg"></i>
      </Item>
    <Item txt="社区" mark="community" @change="getVal">
      <i class="icon iconfont icon-shequ" slot="normalImg"></i>
      <i class="icon iconfont icon-shequ red" slot="activeImg"></i>
    </Item>
    <Item txt="分类" mark="classify" @change="getVal">
      <i class="icon iconfont icon-leimupinleifenleileibie" slot="normalImg"></i>
      <i class="icon iconfont icon-leimupinleifenleileibie red" slot="activeImg"></i>
    </Item>
    <Item txt="购物车" mark="cart" @change="getVal">
      <i class="icon iconfont icon-gouwuche1" slot="normalImg"></i>
      <i class="icon iconfont icon-gouwuche1 red" slot="activeImg"></i>
    </Item>
    <Item txt="我的" mark="mine" @change="getVal">
      <i class="icon iconfont icon-wode" slot="normalImg"></i>
      <i class="icon iconfont icon-wode red" slot="activeImg"></i>
    </Item>
  </div>
</template>
<script>
  require('../assets/css/font/iconfont.css')
  import  Item from './item.vue'
  export default{
    methods:{
      getVal:function(v){
        sessionStorage.setItem("sela",v);
      }
    },
    components:{
      Item
    }
  }
</script>
<style>
  .icon{
    display: inline-block;
    font-size: 25px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .red{
    color: darkred;
  }
  .tabbarWrap{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 64px;
    border-top: 1px solid lightgray;
    background-color: #ffffff;
  }
</style>
