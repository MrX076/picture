<template>
   <section class="section">
       <div class="layout">
           <v-foot></v-foot>
           <router-view class="myview"></router-view>           
       </div>
   </section>
</template>

<script>
import Foot from "../components/foot.vue"
export default {
    components:{
        'v-foot':Foot
    }
}
</script>