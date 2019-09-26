<template>
    <div>
            <span @click="rouer"> 看什么看，点我啦</span>
            <span @click="Time"> 去时间轴。</span>
    </div>
</template>
<script>
export default {
    methods:{
        rouer(){
            this.$router.push({
                path:'/Home'
            })
        },
        Time(){
         this.$router.push({
             path:'/TimeAxis'
         })
        }
       
    }
}
</script>
<style scoped>
    div span{
    text-align: center;
    display: block;
    margin-top:3rem;
    }
</style>