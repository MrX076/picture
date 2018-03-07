<template>
<section>
    <div class="box">
        <div class="mint-ui">
            <mt-field class="mt" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field class="mt" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button  class="mt btn" type="primary" size="large">登录</mt-button> 
        </div>
        <div class="bottom">
             <router-link :to="{name:found}">
                <span>忘记密码</span>
            </router-link>
              <!-- <router-link  :to="{name:head.name}"> -->
            <router-link :to="{name:register}">
                <span>新用户</span>
            </router-link>
            
        </div>
    </div>


</section>
   
</template>

<script>
// import MintUI from "mint-ui";
export default {
    data(){
        return{
             found:"foundpw",
             register:"register"
        }
       
    }
}
</script>

<style>

</style>


