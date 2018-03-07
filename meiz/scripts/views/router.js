import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Main from "./main.vue"
import Find from "./find.vue"
import Ranking from "./ranking.vue"
import Game from "./game.vue"
import Use from "./use.vue"
// import Mine from "./mine.vue"
import Layout from "./layout.vue"
import Mess from "../components/mess.vue"
import Tuijian from "../components/tuijian.vue"
import Login from "../components/login.vue"
import Register from "../components/register.vue"
import Foundpw from "../components/foundpw.vue"
import Subject from "../components/subject.vue"

var routes =[
    {
        path:"/",
        component:Layout,
        children:[
            {path:"main",name:"main",component:Main},
            {path:"find",name:"find",component:Find},
            {path:"ranking",name:"ranking",component:Ranking},
            // {path:"mine",name:"mine",component:Mine},
            {path:"*",redirect:"/main"}
        ]

    },
    {
        path:"/mess",
        name:"mess",
        component:Mess
    },
    {
        path:"/tuijian",
        name:"tuijian",
        component:Tuijian,
        children:[
            {path:"game",name:"game",component:Game},
            {path:"use",name:"use",component:Use},
            // {path:"*",redirect:"/tuijian/game"}
        ]
    },
    {
        path:"/login",
        name:"login",
        component:Login
    },
    {
        path:"/register",
        name:"register",
        component:Register
    },
    {
        path:"/foundpw",
        name:"foundpw",
        component:Foundpw
    },
    {
        path:"/subject",
        name:"subject",
        component:Subject
    }

]

const router = new VueRouter({
    mode:"hash",
    routes
});

export default router;