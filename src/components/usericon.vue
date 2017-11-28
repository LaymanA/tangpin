<template>
  <div class="userWrap">
    <div class="left iconbox">
        <i :class="icons"></i>
    </div>
    <div class="left desc">
      <p>{{txt}}</p>
      <p>{{num}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props:['icons','txt','num']
  }
</script>
<style>
  .left{
    float: left;
  }
  .iconbox{
    padding: 10px;
  }
  .iconbox i{
    color: #8a5a60;
  }
  .desc{
    margin-top: 10px;
  }
</style>
