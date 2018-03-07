<template>
    <section>
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

        }
    },
    
    mounted(){
       var that = this;
            
            axios.defaults.baseURL = "http://120.78.188.19:3000"
                .then(res=>{
                    that.list = res.data;
                    console.log(res.data);
                })
      
    },
    computed:mapState({
        navlist:"navlist",
 
    }),
   


}
</script>



