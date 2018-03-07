<template>
  <section>
      
      <div class="Fmess">
        <div v-for="(flist ,i) in findlist" :key="i">
          <router-link :to="{name:flist.name}">
               <i class="iconfont" v-html="flist.icon"></i>
                <span>{{flist.txt}}</span>               
          </router-link>

         
        </div>
      </div>

      <div class="more">
          <p>更多</p>
           <div v-for="(flist ,i) in flist" :key="i">
                 <i class="iconfont" v-html="flist.icon"></i>
          <span>{{flist.txt}}</span>
        </div>
      </div>



      <div>
          <div v-for="(flist ,i) in list" :key="i">
                 <!-- <i class="iconfont" v-html="flist.icon"></i> -->
          <span>{{flist.name}}</span>
         </div>   
      </div>

     
  </section>
</template>
<script>
import axios from "axios"
import {mapState} from "vuex"
export default {
    
    computed:mapState({
      findlist:"meslist",
      flist:"meslist1",
      list:''
    }),
     mounted(){
       var that = this;
            axios.get("http://120.78.188.19:3000/nav")
                .then(res=>{
                    that.list = res.data;
                    console.log(res.data);
                })
      
    },
}
</script>

<style >

</style>
