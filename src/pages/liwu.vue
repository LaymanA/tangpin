<template>
  <div class="liwuWrap">
      <ul class="present">
        <li>
          <a class="active1" href="javascript:;">赠送对象</a>
        </li>
        <li>
          <a href="javascript:;">赠送场合</a>
        </li>
        <li>
          <a href="javascript:;">礼物风格</a>
        </li>
      </ul>
    <ul class="linkbar">
      <li class="showlsit">
        <span>全部</span>
        <span>小孩</span>
        <span>女士</span>
        <span>数码控</span>
        <span>基友</span>
        <span>上司</span>
        <span>婴儿</span>
        <span>母亲</span>
        <span>朋友</span>
        <span>情侣</span>
        <span>父亲</span>
        <span>男神</span>
        <span>闺蜜</span>
        <span>男士</span>
        <span>长辈</span>
        <span>自己</span>
        <span>父母</span>
        <span>男孩</span>
        <span>女孩</span>
        <span>老师</span>
        <span>同事</span>
        <span>女朋友</span>
        <span>男朋友</span>
      </li>
      <li>
        <span>全部</span>
        <span>情人节</span>
        <span>新年</span>
        <span>中秋节</span>
        <span>夏季</span>
        <span>秋季</span>
        <span>春季</span>
        <span>纪念日</span>
        <span>本命年</span>
        <span>生日</span>
        <span>结婚</span>
        <span>道歉</span>
        <span>感谢</span>
        <span>幸运物</span>
        <span>乔迁</span>
        <span>冬季</span>
        <span>年会</span>
        <span>圣诞节</span>
      </li>
      <li>
        <span>全部</span>
        <span>现代风</span>
        <span>森系</span>
        <span>性感风</span>
        <span>可爱风</span>
        <span>唯美风</span>
        <span>创意</span>
        <span>文艺</span>
        <span>中国风</span>
        <span>vintage</span>
        <span>巴洛克风格</span>
        <span>吉风</span>
        <span>藏风</span>
        <span>北欧风</span>
        <span>英伦风</span>
        <span>简约风</span>
        <span>时尚</span>
        <span>和风</span>
      </li>
    </ul>
    <ul>
      <li v-for="i in arr">
        <Gifts :logo="i.logo" :des="i.des" :list="i.list" :num="i.like" :read="i.read"></Gifts>
      </li>
    </ul>
  </div>
</template>
<style>
  .present{
    overflow: auto;
    width: 100%;
    margin-top: 10px;
    background-color: white;
  }
  .present li{
    float: left;
    width: 33.3%;
    text-align: center;
    line-height: 30px;
    box-sizing: border-box;
    padding: 5px 15px;
  }
  .present li a{
    color: black;
    text-decoration: none;
  }
  .present li a{
    display: block;
    color: black;
    border-radius: 10px;
  }
  .present li a.active1{
    color: darkred;
    background-color: #f2f3f4;
  }
  .linkbar li{
    white-space:nowrap;
    display: none;
    line-height: 25px;
    padding: 5px 10px;
    background-color: white;
  }
  .linkbar{
    width: 100%;
    overflow: scroll;
    background-color: white;
    margin-bottom: 10px;
  }
  .linkbar::-webkit-scrollbar{
    width: 0px;
    height: 0px;
  }
  .linkbar li.showlsit{
    display: block;

  }
  .linkbar li span{
    display: inline-block;
    padding: 3px 8px;
    border-radius: 8px;
  }
  .linkbar li span:first-of-type{
    background-color: #f2f3f4;
    color: darkred;
  }
  .liwuWrap{
    background-color: #fafafa;
  }
</style>
<script>
  import jquery from '../assets/libs/jquery-3.2.1.min'
  import  Gifts from '../components/present.vue'
  export default {
    components:{
      Gifts
    },
    data:function () {
      return {
        arr:[]
      }
    },
    mounted:function () {
      $('.present li').click(function () {
        $(this).find('a').addClass('active1');
        var index=$(this).index();
        $(this).siblings().find('a').removeClass('active1');
        $('.linkbar li').removeClass('showlsit');
        $(".linkbar li").eq(index).addClass('showlsit');
      })
      var that=this;
      this.axios.get('/api/gifts').then(function (res) {
        console.log(res.data.data);
        that.arr=res.data.data;
      })
    }
  }
</script>
