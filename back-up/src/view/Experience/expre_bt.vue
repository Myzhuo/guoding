<template>
    <div>
        <div class="ask_zixu">
         <div class="ask-ding ">
                <span >顶</span>
            </div>
            <div class="ask-j ">
                <span >精</span>
            </div>
            <span class="ask-bt"> 关注后可获得最新动态和精彩内容 </span> 
        </div>
        <div class="ask-touxian padding">
            <div class="tup huixian ">
                <div class="flex  aaa">
                    <div class="yanxiana">
                        <img class="img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="left lefta">
                        <span class="daxie">粑粑 </span>
                    </div>
                    <div class=" right ">
                         <button class="guan" value="'+obj.users.user_id+'" @click="followuse">{{f_us==1?'已关注':'关注'}}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ask-nr padding flex">
            <span class="exper-span">
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
            关注后可获得最新动态和精彩内容关注后可获得最新动态和精彩内容
        </span>
        </div>
        <div class="exper-img padding flex justify-content-center align-items-center">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="ask-h padding">
            <div class=" huixian flex ">
                <div class="ask-gz">
                    <span>编辑于:2019/10/17</span>
                </div>
                <div class="ask-bguz float-right">
                    <span class="liulan"></span>
                    <span>98万次</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            f_us:0
        }
    },
    methods:{
        followuse(){
            if(this.f_us == 0){
                this.f_us = 1;
            }else{
                this.f_us = 0;
            }
        }
    }
}
</script>
<style scoped>
.guan{
    border: 0.01rem solid #359f9d;
    color: #359f9d;
}
</style>
 