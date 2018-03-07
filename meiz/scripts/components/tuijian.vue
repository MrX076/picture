<template>
    <section>
        <div class="usehead">
            <router-link :to="{name:main}" class="uh">
                    <i class="iconfont" v-html="icon"></i>
            </router-link>
                       
            <span>应用中心</span>
            
        </div>
        <div>
            <div class="navbox">
                <div v-for="(item ,i) in list" :key="i" class="banner">          
                    <router-link :to="{name:item.name}">
                        <span>{{item.txt}}</span>            
                    </router-link>         
                </div>
                
            </div>
            <router-view></router-view>
        </div>
    </section>
  
</template>

<script>
import {mapState} from "vuex";
import router from "../views/router";
export default {
    computed:mapState({
        icon:"icon",
        list:"tlist"
    }),
    // mounted(){
    //     console.log(11111111)
    //     // router.push("/tuijian/game");
        
    // }
}
</script>
