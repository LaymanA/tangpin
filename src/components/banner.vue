<template>
  <div class="bannerWrap">
    <div class="swiper-container" :class="swiperid">
      <div class="swiper-wrapper">
       <slot name="swiper-con"></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import '../assets/libs/swiper/js/swiper'
  export default {
    props:{
      swiperid:{
        type:String,
        default:''
      },
      bannerImg:{
        type:Array,
        defalut(){
          return [];
        }
      },
      autoplay:{
        type:Number,
        default:3000
      },
    },
    mounted:function(){
      var _this=this;
       new Swiper('.'+_this.swiperid,{
        pagination:'.swiper-pagination',
        autoplay:_this.autoplay
      })
    }
  }
</script>

<style>
  @import "../assets/libs/swiper/css/swiper.css";
  /*.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #ffffff;
    opacity: .2;
  }*/
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
  .swiper-slide{
    width: 100%;
  }
 /* .swiper-pagination-bullet-active {
    background-color: white;
    opacity: 1;
  }*/
</style>
