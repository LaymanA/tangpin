<template>
  <div class="cartWrap">
    <div class="modal" v-show="bol">
      <p class="show">确认删除此商品吗？</p>
      <div class="btnBox1">
        <input class="queren" type="button" value="确认" @click="del">
        <input class="quxiao" type="button" value="取消" @click="notDel">
      </div>
    </div>
    <div v-show="bol" class="mengban"></div>
    <Headbar txt="购物车"></Headbar>
    <div v-show="isShow" class="empty">
      <h3>您的购物车什么都没有哦~~</h3>
      <img src="../assets/cart.jpg" alt="">
      <button @click="fn3()">去逛逛</button>
    </div>
    <ul class="myprs">
      <li v-for="(item,index) in cartlist">
        <p class="edit">{{item.name}} <span @click="edit(item.id)" style="float: right">删除</span></p>
        <div class="item">
          <div class="imgbox1">
            <img :src="item.img" alt="">
          </div>
          <div class="desc1">
            <h3 class="title">{{item.des}}</h3>
            <p>分类：{{item.classify}}</p>
            <p class="red1">￥{{item.price}}
              <span class="numBox">
                <i @click="sum1(index)">-</i>
                <span>{{item.count}}</span>
                <i @click="add1(index)">+</i>
              </span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <p v-show="!isShow" class="all red1">结算：￥{{doadd()}} <span @click="doadd" class="btn2">结算</span></p>
    <Tabbar></Tabbar>
  </div>
</template>
<style>
  .numBox{
    display: block;
    float: right;
  }
  .numBox::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
  .numBox i{
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 8px;
    line-height: 25px;
    text-align: center;
    border: 1px solid darkgray;
    background-color: #404040;
    color: white;
  }
  .cartWrap .red1{
    color: darkred;
    font-size: 20px;
    font-weight: 600;
  }
  .cartWrap{
    background-color: #fafafa;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  .cartWrap::-webkit-scrollbar{
    width: 2px;
    height: 10px;
  }
  .cartWrap li{
    background-color: white;
    margin-top: 10px;
  }
  .edit{
    height: 45px;
    line-height: 45px;
    padding:  0 10px;
    border-bottom: 1px solid lightgray;
  }
  .item{
    overflow: auto;
  }
  .imgbox1{
    width: 30%;
    float: left;
    padding: 10px;
    box-sizing: border-box;
  }
  .imgbox1 img{
    width: 100%;
  }
  .desc1{
    width: 70%;
    padding: 10px;
    box-sizing: border-box;
    float: left;
  }
  .desc1 .title{
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-bottom: 10px;
  }
  .desc1 p{
    line-height: 40px;
  }
  .all{
    margin-top: 10px;
    background-color: white;
    height: 45px;
    line-height: 45px;
  }
  .btn2{
    display: block;
    float: right;
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
    background-color: darkred;
    color: white;
    padding: 5px 10px;
    margin-right: 20px;
    border-radius: 5px;
  }
  .btnBox1 input{
    width: 60px;
    height: 45px;
    margin: 25px 20px 0px;
    border-radius: 5px;
    color: white;
  }
  .btnBox1 input.queren{
    background-color: green;
  }
  .btnBox1 input.quxiao{
    background-color: red;
  }
  .modal{
    position: fixed;
    width: 300px;
    height: 150px;
    background-color: #cccccc;
    text-align: center;
    z-index: 9999;
    left: 50%;
    margin-left: -150px;
    border-radius: 20px;
    box-sizing: border-box;
    padding-top: 10px;
    bottom: 100px;
  }
  .show{
    line-height: 45px;
    border-bottom: 1px dashed black;
  }
  .mengban{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    z-index: 999;
  }
  .empty{
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 80px;
    text-align: center;
  }
  .empty button{
    line-height: 35px;
    width: 80px;
    margin-top: 10px;
    background-color: red;
    border-radius: 10px;
  }
  .empty img{
    width: 100%;
  }
  .empty h3{
    text-align: center;
    color: #795da3;
    line-height: 45px;
  }
</style>
<script>
  import Tabbar from '../components/tabbar.vue'
  import Headbar from '../components/headbar.vue'

  export default{
    data:function () {
      return{
        cartlist:[],
        money:0,
        bol:false,
        index:'',
        dels:[],
        isShow:true
      }
    },
    methods:{
      sum1:function (i) {
        this.cartlist[i].count--;
        if(this.cartlist[i].count<=0){
          this.cartlist[i].count=0;
        }
      },
      add1:function (i) {
        this.cartlist[i].count++;
      },
      doadd:function () {
        var num=0;
        for(var i=0;i<this.cartlist.length;i++){
          num+=this.cartlist[i].count*this.cartlist[i].price;
        }
        return num;
      },
      del:function () {
        this.bol=false;
        this.$store.commit('delId', this.index);
        var that=this;
        this.cartlist=[];
        if(that.$store.state.cartList.length==0){
          this.isShow=true;
        }else {
          this.isShow=false;
        }
        for(var i in that.$store.state.cartList){
          for(var k in that.dels){
            if(that.dels[k].id==that.$store.state.cartList[i]){
              that.cartlist.push(that.dels[k]);
            }
          }
        }
      },
      notDel:function () {
        this.bol=false;
      },
      edit:function (id) {
        this.bol=true;
        this.index=id;
      },
      fn3:function () {
        this.$router.push('/community');
        sessionStorage.setItem("sela","community");
      }
    },
    components:{
      Tabbar,Headbar
    },
    mounted:function () {
      var that=this;
      this.axios.get('/api/cartlist').then(function (res) {
        that.dels=res.data.data;
        console.log(that.$store.state.cartList);
        var arr=that.$store.state.cartList,
          i=0,
          maxI,
          item={};
        if(arr.length==0){
          that.isShow=true;
        }else {
          that.isShow=false;
        }

        arr.forEach(function (key,i) {
          if(item[key]){
            item[key]++;
          }else {
            item[key]=1;
          }
        })
        console.log(item);
          var arr2=[];
        for(var i=0;i<arr.length;i++){
          if(arr2.indexOf(arr[i])==-1){
            arr2.push(arr[i]);
          }
        }
        console.log(arr2);
        for(var i in arr2){
          for(var k in res.data.data){
            if(res.data.data[k].id==arr2[i]){
              res.data.data[k].count=item[arr2[i]];
              that.cartlist.push(res.data.data[k]);
            }
          }
        }
      })

    }
  }
</script>
