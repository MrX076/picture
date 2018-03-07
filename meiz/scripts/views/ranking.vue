<template>
    <section>
       <ul class="list2">
           <li v-for="(item,i) in list" :key="i">
               <img :src="item.icon_url" alt="">
               <p>{{item.name}}</p>
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
            
            //  axios.get("http://localhost:3000/imgbox")
            axios.defaults.baseURL = "http://120.78.188.19:3000"
                .then(res=>{
                    that.list = res.data;
                    // console.log(res.data);
                })
      
    },
   


}
</script>




