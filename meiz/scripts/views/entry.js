import router  from "./router";
import Vue from "vue";
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper) 
import vueResource from "vue-resource";
Vue.use(vueResource);
import MintUI from "mint-ui";
// import 'mint-ui/lib/style.css'
Vue.use(MintUI);  

import Vuex from "vuex";
Vue.use(Vuex);  
import store from "../vuex/store.js"
const app = new Vue({
    el:"#idx",
    data:{
        transitionName:"slide-right",
        msg:"你好",
       
    },
    router,
    store,    
})