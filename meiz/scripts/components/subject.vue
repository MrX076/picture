<template>
    <section>
         <div class="rehead">
            <router-link :to="{name:find}" class="reh">
                <!-- <button>56144</button> -->
                    <i class="iconfont" v-html="icon"></i>
            </router-link>
                       
            <span>专题</span>
        </div>
        <div class="swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item class="sp"><img src="../../assets/img/buluo.jpg"></mt-swipe-item>
                <mt-swipe-item class="sp"><img src="../../assets/img/buluo.jpg"></mt-swipe-item>
                <mt-swipe-item class="sp"><img src="../../assets/img/buluo.jpg"></mt-swipe-item>
            </mt-swipe>
        </div>
       <ul class="list">
           <li v-for="(item,i) in list" :key="i">
               <img :src="item.cover_url" alt="">
               <span>{{item.title}}</span>
           </li>
       </ul>
       
    </section>
</template>

<script>
import axios from "axios";
import {mapState,mapActions} from "vuex";
export default {
     data(){
        return{
            msg:"asdaf",
            list:"",
            find:"find"

        }
    },
    
    mounted(){
       var that = this;
            // axios.get("http://47.94.208.182:3000/movie")
            axios.get("http://localhost:3000/nav")
                .then(res=>{
                    that.list = res.data;
                    console.log(res.data);
                })
      
    },
    computed:mapState({
        navlist:"navlist",
        icon:"icon",
    }),
  

}
</script>



