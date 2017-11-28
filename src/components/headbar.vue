<template>
  <div class="headbarWrap">
    <span>{{txt}}</span>
    <slot name="search"></slot>
    <slot name="lefticon"></slot>
    <slot name="seticon"></slot>
  </div>
</template>
<script>
  export default {
    props:["txt"]
  }
</script>
<style>
  .headbarWrap{
    position: fixed;
    top: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: white;
    border-bottom: 1px solid lightgray;
    z-index: 999;
  }
  .headbarWrap input{
    text-indent: 1rem;
    background-color: #eeeeee;
    width: 80%;
    margin: 0 auto;
    border: none;
    height: 30px;
    margin-top: 8px;
    border-radius: 10px;
    padding-left: 5px;

  }
</style>
