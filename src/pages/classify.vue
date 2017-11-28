<template>
  <div class="classifyWrap">
    <Headbar>
      <input type="text" placeholder="搜索" slot="search" class="search"/>
    </Headbar>
    <div class="detail">
      <div class="asideL">
          <ul>
            <li :class="{active:item.index==name}" v-for="item in classifydetail" @click="fn(item.index)">
              <a href="javascript:void(0)">{{item.index}}</a>
            </li>
          </ul>
      </div>
      <div class="asideR">
        <img :src="detail.logo" alt="">
        <p class="classline"><span>子分类</span></p>
          <ul>
            <li v-for="item in detail.list">
              <img :src="item.img" alt="">
              <p>{{item.des}}</p>
            </li>
          </ul>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<style>
  p.classline{
    text-align: center;
    margin: 20px 0 0px;
    color: darkgray;
  }
  p.classline span{
    position: relative;
  }
  p.classline span:after{
    position: absolute;
    width: 10px;
    height: 2px;
    content: "";
    background-color: darkgray;
    left: -15px;
    top: 5px;
  }
  p.classline span:before{
    position: absolute;
    width: 10px;
    height: 2px;
    content: "";
    background-color: darkgray;
    right: -15px;
    top: 5px;
  }
  .detail{
    width: 100%;
    border-top: 1px solid lightgray;
  }
  .asideL{
    width: 25%;
    float: left;
  }
  .asideL li{
    width: 100%;
    text-align: center;
    height: 45px;
    line-height: 45px;
    position: relative;
  }
  .asideL li a{
    text-decoration: none;
    color: black;
  }
  .asideL .active a{
    color: darkred;
  }
  .asideL li.active::after{
    position: absolute;
    content: "";
    width: 5px;
    height: 20px;
    left: 0px;
    top: 10px;
    background-color: darkred;
  }
  .asideR{
    width: 75%;
    float: left;
    border-left: 1px solid lightgray;
    box-sizing: border-box;
    overflow: auto;
    padding: 0 10px;
  }
  .asideR img{
    width: 100%;
    margin-top: 20px;
  }
  .asideR li{
    width: 33.3%;
    float: left;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
  }
  .asideR li img{
    border-radius: 50%;
    width: 100%;
  }
  .asideR li p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<script>
  import Tabbar from '../components/tabbar.vue'
  import Headbar from '../components/headbar.vue'
  export default{
    data:function () {
      return {
        classifydetail:"",
        name:"居家",
        detail:""
      }
    },
    components:{
      Tabbar,Headbar
    },
    mounted:function () {
      var _this=this;
      this.axios.get('/api/classifylist').then(function (res) {
        console.log(res.data.data);
        _this.classifydetail=res.data.data;
        for(var i in res.data.data){
          if(res.data.data[i].index==_this.name){
            _this.detail=res.data.data[i];
          }
        }
      })
    },
    methods:{
      fn:function (v) {
        console.log(v);
        this.name=v;
        for(var i in this.classifydetail){
          if(this.classifydetail[i].index==this.name){
            this.detail=this.classifydetail[i];
          }
        }
      }
    }
  }
</script>
