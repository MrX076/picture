<template>
  <footer>
      <div class="head">
          <div v-for="(head,i) in hlist" :key="i" class="hlist">
           <router-link  :to="{name:head.name}">
                <i class="iconfont" v-html="head.icon"></i>               
            </router-link> 
         </div>
          <span>{{hmes}}</span>
          
      </div>
      <div class="banner-box">
          <div v-for="(foot ,i) in list" :key="i" class="banner">          
               <router-link :to="{name:foot.name}">
                 <span>{{foot.txt}}</span>            
               </router-link>         
        </div>
      </div>
      
  </footer>
</template>
<script>
import {mapState} from "vuex";
export default {
//   data(){
//       return{
//         list:[
//             {name:"main",txt:"首页",icon:"&#xe6bb;"},
//             {name:"ranking",txt:"排行",icon:"&#xe65c;"},
//             {name:"find",txt:"发现",icon:"&#xe735;"},
//             {name:"mine",txt:"我的",icon:"&#xe603;"},
//          ]
//       }
      
//   }

computed:mapState({
    list:"list",
    hmes:"hmes",
    hlist:"hlist"
})
}
</script>



