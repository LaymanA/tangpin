// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
Vue.use(VueAxios,axios)
Vue.use(Vuex)
var store=new Vuex.Store({
  state:{
    cartList:[],
    islogin:false
  },
  mutations: {
    increment (state, v) {
      state.cartList.push(v);
    },
    delId(state,val){
      for(var i=0;i<state.cartList.length;i++){
        if(state.cartList[i]==val){
          var index=i;
        }
      }
      state.cartList.splice(index,1);
      console.log(state.cartList);
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
