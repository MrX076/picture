<template>
    <section>
       <div class="usebody">
             <div class="body">
                <img  src="../../assets/img/game2.jpg" alt="">
                 
                <dl>
                    <dt>暴走魔兽团</dt>
                    <dd>
                        <p>56M</p>
                        <p>十年辉煌，不悔青春，，，</p>
                    </dd>
                </dl>
                <button>下载</button>
            </div>
            <div class="body">
                <img  src="../../assets/img/game1.jpg" alt="">
                 
                <dl>
                    <dt>部落冲突</dt>
                    <dd>
                        <p>56M</p>
                        <p>十年辉煌，不悔青春，，，</p>
                    </dd>
                </dl>
                <button>下载</button>
            </div>
        </div> 
    </section>
  
</template>

<script>
import {mapState} from "vuex";

export default {
    computed:mapState({
        icon:"icon",
    })
}
</script>

