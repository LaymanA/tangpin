import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Classify from '@/pages/classify.vue'
import Cart from '@/pages/cart.vue'
import Community from '@/pages/community.vue'
import Mine from '@/pages/mine.vue'
import Gouwu from '@/pages/gouwu.vue'
import Dashi from '@/pages/dashi.vue'
import Pinpai from '@/pages/pinpai.vue'
import Newproduct from '@/pages/newproduct.vue'
import Liwu from '@/pages/liwu.vue'
import Huanxi from '@/pages/communityroutes/huanxi.vue'
import Shuowu from '@/pages/communityroutes/shuowu.vue'
import Zhiwu from '@/pages/communityroutes/zhiwu.vue'
import Productdetail from '@/pages/productdetail.vue'
import login from '@/pages/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
        {path:'gouwu',component:Gouwu},
        {path:'liwu',component:Liwu},
        {path:'dashi',component:Dashi},
        {path:'newproduct',component:Newproduct},
        {path:'pinpai',component:Pinpai},
        {path:'/home/',component:Gouwu}
      ]
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/community',
      component: Community,
      children:[
        {path:'huanxi',component:Huanxi},
        {path:'shuowu',component:Shuowu},
        {path:'zhiwu',component:Zhiwu},
        {path:'',component:Zhiwu}
      ]
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/productdetail',
      component: Productdetail
    },
    {
      path:'/login',
      component:login
    }
  ]
})
