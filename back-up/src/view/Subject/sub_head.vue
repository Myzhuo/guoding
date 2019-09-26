<template>
        <div> 
            <section class="flex flex-row justify-content-between align-items-center content-header">
            <a href="javascript:void(0);" class="left-btn" @click="this.$returnPage"></a>
            <h3 class="title-txt">{{headtou}}</h3>
            <div class="myshare"></div>
        </section>     
        </div>
</template>
<script>
export default {
    props:{
        headtou:{
            type:String,
            default:''
        }
    },
    created(){
        console.log(this.headtou)
    }
}
</script>
<style scoped>

</style>