<template>
  <div class="itemWrap" @click="fn(mark)">
      <span v-show="bol">
        <slot name="normalImg"></slot>
      </span>
     <span v-show="!bol">
        <slot name="activeImg"></slot>
      </span>
    <br/>
    <span :class="{red:!bol}">{{txt}}</span>
  </div>
</template>

<script>
  require('../assets/css/font/iconfont.css')

  export default{
    props:["txt","mark"],
      data:function(){
      return{
        f:'home'
      }
    },
    created:function(){
        if(sessionStorage.getItem("sela")){
          this.f=sessionStorage.getItem("sela");
        }
    },
    computed:{
      bol:function(){
        if(this.mark==this.f){
          return false;
        }
        return true;
      }
    },
    methods:{
      fn:function(v){
        if(v=="cart" || v=="mine"){
          if(this.$store.islogin){
            this.$emit("change",this.mark);
            this.$router.push('/'+this.mark);
          }
          else {
            this.$router.push('/login')
          }
        }else {
          this.$emit("change",this.mark);
          this.$router.push('/'+this.mark);
        }

      }
    }
  }
</script>


<style>
  .itemWrap{
    width: 20%;
    float: left;
    text-align: center;
  }

</style>
