<template>
  <div class="zhiwuWrap">
      <div class="Llist">
        <Shequ v-for="item in lisL" :id="item.id" :des="item.des" :sous="item.img" :pinlun="item.pinlun" :zan="item.zan" :read="item.read"></Shequ>
      </div>
      <div class="Rlist">
        <shequ v-for="item in lisR" :id="item.id" :des="item.des" :sous="item.img" :pinlun="item.pinlun" :zan="item.zan" :read="item.read">

        </shequ>
      </div>
  </div>
</template>

<script>
  import Shequ from '../../components/shequlist.vue'
  export default {
    data:function () {
      return {
        lisL:"",
        lisR:""
      }
    },
    components:{
      Shequ
    },
    created:function(){
      var _that=this;
      this.axios.get('/api/shequlist').then(function(res){
        console.log(res.data.data);
        _that.lisL=res.data.data[0].list;
        _that.lisR=res.data.data[1].list;
      })
    }
  }
</script>
<style>
  .zhiwuWrap{
    width: 100%;
  }
  .Llist{
    width: 49%;
    padding-left: 7px;
    box-sizing: border-box;
    float: left;
  }
  .Rlist{
    width: 49%;
    float: right;
    padding-right: 7px;
    box-sizing: border-box;
  }
</style>
