<template>
    <div>
        <div class="padding   xiaozhu">
            <span>我的小组</span>
        </div>
        <ground :subjectList='subjectList'></ground>
    </div>
</template>
<script>
import ground from '../subject'
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    components:{
        ground
    },
    computed:{
            subjectList(){
                return this.$store.state.index.Popular
            }
    },
    created(){
        // console.log(this.$store.state)
    }
}
</script>