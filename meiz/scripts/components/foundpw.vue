<template>
  <section>
       <div class="foundhead">
            <router-link :to="{name:login}" class="foundh">
                <!-- <button>56144</button> -->
                    <i class="iconfont" v-html="icon"></i>
            </router-link>
                       
            <span>忘记密码</span>
             <p>将发送修改密码邮件到下面的邮箱</p>
        </div>
       
        <div class="mint-ui">

            <mt-field  class="mt" placeholder="请输入邮箱地址" type="email" v-model="email"></mt-field>
           
            <mt-button  class="mt btn" type="primary" size="large">确定</mt-button> 
        </div>
  </section>
</template>

<script>
import {mapState} from "vuex";

export default {
    data(){
        return{
            login:"login"
        }
    },
    computed:mapState({
        icon:"icon",
    })
}

</script>