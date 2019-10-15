<template>
    <div>
        <follow-heads />
        <div class="follow_xianmu" >
            <subJect :subjectList = 'Popular'></subJect>
        </div>
         <section class="zhgongti justify-content-center align-items-center li-cont">
        <div class="tablist">
            <tab-list :tabList='tabList'></tab-list>
        </div>
         </section>
    </div>
</template>
<script> 
 import  subJect  from "../view/subjectlist"
 import  tabList  from "../view/tablist"
 import  FollowHeads from "../view/Follow/follow_heads"
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    name:'Follow',
    components:{
        subJect,
        tabList,
        FollowHeads
    },
    computed:{
        ...mapState({
              Popular:state=>state.selectsub,
        }),
        tabList(){
           return  this.$store.state.index.tablist
        }
    },
}
</script>
<style scoped>
.tablist{
    display: block;
    padding-bottom: 3rem;
}
</style>