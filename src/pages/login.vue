<template>
  <div class="loginWrap">
    <div class="login-logo">
      <img  src="../assets/login-logo-new-d85052f58e9de2364dc152d2ca825b63.png" alt="">
    </div>
    <form action="">
      <p>
        <input type="email" placeholder="邮箱" required v-model="useremail">
      </p>
      <p>
        <input type="password" placeholder="输入密码" required v-model="psw">
      </p>
      <p>
        <input type="button" value="登录" @click="tijiao">
      </p>
    </form>
    <p class="forget">
      <a href="javascript:;">注册</a>
      <a href="javascript:;">忘记密码</a>
      <a href="javascript:;">用户协议</a>
    </p>
    <div class="auto-login">
      <a href="javascript:;">
        <i class="icon iconfont icon-weibo"></i>
      </a>
      <a href="">
        <i class="icon iconfont icon-qq"></i>
      </a>
      <a href="javascript:;">
        <i class="icon iconfont icon-douban"></i>
      </a>
    </div>
  </div>
</template>
<style>
  .loginWrap form p{
    padding: 0 40px;
  }
  .loginWrap form p input{
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #444444;
    text-indent: 1rem;
    border: none;
    margin-top: 10px;
  }
  .loginWrap form p input[type='button']{
    background-color: #cc3f4f;
    color: white;
    text-indent: 0;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 25px;
  }
  .loginWrap{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: url("../assets/login-wrapper-5eda8a848989827aca927ee3c0dafdcc.jpg") no-repeat;
    background-size: cover;
  }
  .login-logo{
    text-align: center;
    padding-top: 30px;
    margin-bottom: 30px;
  }
  .login-logo img{
    width: 200px;
  }
  .forget{
    margin-top: 40px;
    padding:0 40px;
  }
  .forget a{
    text-decoration: none;
    color: white;
  }
  .forget a:first-of-type{
    margin-right: 20px;
  }
  .forget a:last-of-type{
    float: right;
  }
  .auto-login{
    margin-top: 50px;
    text-align: center;
  }
  .auto-login a{
    text-decoration: none;
  }
  .auto-login a i{
    font-size: 40px;
    margin: 0 15px;
  }
  .auto-login a:nth-child(1) i{
    color: #dd483a;
  }
  .auto-login a:nth-child(2) i{
    color: #4a90e2;
  }
  .auto-login a:nth-child(3) i{
    color: #9aba43;
  }
</style>
<script>
  export default {
    data:function () {
      return {
        useremail:'',
        psw:''
      }
    },
    methods: {
      tijiao:function () {
        if(this.useremail=='595632060@qq.com' && this.psw=='666666'){
          this.$router.push('/mine');
          sessionStorage.setItem("sela","mine");
          this.$store.islogin=true;
        }
      }
    }
  }
</script>
