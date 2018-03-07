
import axios from "axios";
export default {
    getnav({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getnav",json)
            })
    },
    getimgbox({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getimgbox",json)
            })
    }
}