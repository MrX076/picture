<template>
  <section>
       <div class="rehead">
            <router-link :to="{name:login}" class="reh">
                <!-- <button>56144</button> -->
                    <i class="iconfont" v-html="icon"></i>
            </router-link>
                       
            <span>注册</span>
        </div>
        <div class="mint-ui">
            <mt-field  class="mt" placeholder="请输入昵称" v-model="username"></mt-field>
            <mt-field  class="mt" placeholder="请输入邮箱地址" type="email" v-model="email"></mt-field>
            <mt-field  class="mt" placeholder="请输入密码" type="password" v-modal="password"></mt-field>
            <mt-field  class="mt" placeholder="再次输入密码" type="password" v-modal="password"></mt-field>
            <mt-button  class="mt btn" type="primary" size="large">注册</mt-button> 
        </div>
  </section>
</template>

<script>
import {mapState} from "vuex";

export default {
    data(){
        return{
            login:"login",
        }
    },
    computed:mapState({
        icon:"icon",
    })
}

</script>