<template>
  <section>
      
      <div class="find">
        <div v-for="(flist ,i) in findlist" :key="i">
          <router-link :to="{name:flist.name}" >
              <i class="iconfont" v-html="flist.icon"></i>
              <span>{{flist.txt}}</span>    
          </router-link>
          
        </div>
      </div>
     
  </section>
</template>
<script>
import {mapState} from "vuex"
export default {
    
    computed:mapState({
      findlist:"findlist"
    })
}
</script>

<style >

</style>
