<template>
    <div>
      <heads-circle />
       <section class=" newContent circle-content">
           <ground-circle />
            <section class="zhgongti justify-content-center align-items-center li-cont">
                <div class="jiexian"></div>
                <div class="spot s-df s-hao s-jcb">
                    <img src="@/assets/images/xinz.png" alt="">
                    <span class="s-flex">新组</span>
                    <div class="float-right">
                        <span class="huanImg"></span>
                        <span class="guan " id = "xgronp">换一批</span>
                    </div>
                </div>
                    <grunp :group="group" />
                     <!-- <div class="jiexian"></div> -->
                    <!-- ///小猪模块 ground-->
                    <div class="spot s-df s-hao s-jcb">
                    <img src="@/assets/images/zl.png" alt="">
                    <span class="s-flex">热组</span>
                    <div class="float-right">
                        <span class="huanImg"></span>
                        <span class="guan " id = "xgronp">换一批</span>
                    </div>
                </div>
                  <grunp :group="grouphot" />
                   <!-- <div class="jiexian"></div> -->
                  <!-- ///小猪模块 ground-->
                  <div class="spot s-df s-hao">
                    <img src="@/assets/images/xiaoztl.png" alt="">
                    <span class="s-flex">小组讨论</span>
                    <div class="float-right">
                        <button class="s-btn  subject-detail-takeactive" value="1">最新&nbsp;<em>▼</em></button>
                        <button class="s-btn" value="2">热门&nbsp;<em>▼</em></button>
                    </div>
                </div>
                <div   class="pading">
                    <grunp-conter :groupconter='groupconter'/>
                </div>
                <!-- 内容模块 -->
            </section>
       </section>
    </div>
</template>
<script>
import HeadsCircle from '../view/Circles/Circle_head'
import GroundCircle from '../view/Circles/Circle_ground'
import Grunp from '../view/Group/group_index'
import GrunpConter from '../view/Group/group_conter'
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    name:'myCircle',
    components:{
        HeadsCircle,
        GroundCircle,
        Grunp,
        GrunpConter
    },
    computed:{
        group(){
            return this.$store.state.index.grouplist
        },
        grouphot(){
             return this.$store.state.index.grouphot
        },
        groupconter(){
            return this.$store.state.index.groupcont
        }
    }

}
</script>
<style scoped>
.pading{
    padding-bottom: 1rem;
}
</style>