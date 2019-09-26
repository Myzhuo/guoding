<template>
        <div>
            <sub-head :headtou='headtou' />
            <sub-conter :subconter='subconter' />
        </div>
</template>
<script>
import subHead from './sub_head'
import subConter from './sub_conter'
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    name:'Subdetail',
    components:{
        subHead,
        subConter
    },
    data (){
        return {
            sublist:[]
        }
    },
    computed:{
        headtou(){
            return this.sublist.sub_name
        },
        subconter(){
             return this.sublist
        },
        ...mapState({
            subjectlist:state=>state.subjectlist
        })
    },
    created(){
        var sub = this.subjectlist;
        sub.map((item)=>{
            if(JSON.parse(this.$route.query.id) == item.id){
                this.sublist = item;
            }
        })
        
    }
    
}
</script>
<style scoped>

</style>