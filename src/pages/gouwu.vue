<template>
  <div>
   <Banner swiperid="go">
     <div slot="swiper-con" class="swiper-slide">
       <img :src="banner[0]" alt="">
     </div>
     <div slot="swiper-con" class="swiper-slide">
       <img :src="banner[1]" alt="">
     </div>
     <div slot="swiper-con" class="swiper-slide">
       <img :src="banner[2]" alt="">
     </div>
     <div slot="swiper-con" class="swiper-slide">
       <img :src="banner[3]" alt="">
     </div>
     <div slot="swiper-con" class="swiper-slide">
       <img :src="banner[4]" alt="">
     </div>
   </Banner>
    <div class="imgbox">
      <a href="" class="box-2">
        <img :src="Bdes[0]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="Bdes[1]" alt=""/>
      </a>
    </div>
    <div class="imgbox">
      <a href="" class="box-1">
        <img :src="Bdes[2]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="Bdes[3]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="Bdes[4]" alt=""/>
      </a>
    </div>
    <div class="tit">
      {{prs[2]}}
    </div>
    <div class="imgbox">
      <a href="" class="box-1">
        <img :src="newprs[0]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="newprs[1]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="newprs[2]" alt=""/>
      </a>
    </div>
    <div class="imgbox">
      <a href="" class="box-1">
        <img :src="newprs[3]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="newprs[4]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="newprs[5]" alt=""/>
      </a>
    </div>
    <div class="imgbox">
      <a href="" class="box-2">
        <img :src="newprs[6]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="newprs[7]" alt=""/>
      </a>
    </div>
    <div class="tit">
      {{prs[3]}}
    </div>
    <div class="imgbox">
      <a href="" class="box-2">
        <img :src="prsliwu[0]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="prsliwu[1]" alt=""/>
      </a>
    </div>
    <div class="imgbox">
      <a href="" class="box-1">
        <img :src="prsliwu[2]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="prsliwu[3]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="prsliwu[4]" alt=""/>
      </a>
    </div>
    <div class="imgbox">
      <a href="" class="box-2">
        <img :src="prsliwu[5]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="prsliwu[6]" alt=""/>
      </a>
    </div>
    <div class="imgbox">
      <a href="" class="box-1">
        <img :src="prsliwu[7]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="prsliwu[8]" alt=""/>
      </a>
      <a href="" class="box-1">
        <img :src="prsliwu[9]" alt=""/>
      </a>
    </div>
  </div>

</template>
<script>
 import  Banner from '../components/banner.vue'
  export default{
    data:function(){
      return {
        prs:[],
        banner:[],
        Bdes:[],
        newprs:[],
        prsliwu:[],
      }
    },
    components:{
      Banner
    },
    created:function(){
      var _this=this;
      this.axios.get('/api/product').then(function(res){
        for(var i in res.data.data){
          _this.prs.push(res.data.data[i].index);
        }
        for(var i in res.data.data[0].list){
          _this.banner.push(res.data.data[0].list[i].img);
        }
        for(var i in res.data.data[1].list){
          _this.Bdes.push(res.data.data[1].list[i].img);
        }
        for(var i in res.data.data[2].list){
          _this.newprs.push(res.data.data[2].list[i].img);
        }
        for(var i in res.data.data[3].list){
          _this.prsliwu.push(res.data.data[3].list[i].img);
        }
        console.log(_this.Bdes[0]);

      })
    }
  }
</script>
<style>
  .bannerWrap{
    width: 100%;
    height: 140px;
    overflow: hidden;
  }
  .bannerWrap .swiper-slide img{
    width:100%
  }

  .imgbox{
    width: 100%;
    background-color: #ffffff;
    overflow: auto;
  }
  .imgbox a{
    display: block;
    float: left;
    box-sizing:border-box;
  }
  a.box-2{
    width: 66.6%;
    padding: 5px;
  }
  a.box-1{
    width: 33.3%;
    padding: 5px;
  }
  .imgbox a img{
    width: 100%;
  }
</style>
