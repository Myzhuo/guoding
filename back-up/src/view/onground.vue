<template>
    <section class="body-bg content-body newContent qid-content">
        <div class="shangtou s-df s-cf">
            <div class="flex padding">
                <p>选择感兴趣的小组</p>
            </div>
            <div class="flex s-df s-hao s-jcb padding">
                <p class="p">关注后可获得最新动态和精彩内容</p>
                <div class="s-df s-hao ydian">
                    <i class=""></i>
                    <i class="span1"></i>
                </div>
            </div>
            <div class="xixian"></div>
            <!-- 循环体 -->
            <div id="grounp" >
                <Group :group="group" />
            </div>
            <!-- 确定按钮 -->
            <div class="btn-cont">
                <button class="btn btn-primary btn-gradual-change" type="submit" id="Login" @click="next" >完成</button>
            </div>
        </div>
</section>

</template>
<script>
import Group from './Group/group_index' 
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index');
export default {
    components:{
        Group
    },
    computed:{
        group(){
            return this.$store.state.index.groupselect
        }
    },
    methods:{
        next(){
            this.$router.push({
                path:'Home'
            })
        }
    }
    
}
</script>
<style scoped>
.tup{
    /*height: 1.67rem;*/
    /* margin-top: 0.5rem; */
    padding: 0;
}
.qid-content .tup{
    padding: 0;
}
.flex .img{
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
     /*margin-top: 0.2rem;*/    
    border-radius: 5px;
    min-width:1rem;
    background-size: contain;

} 
.qid-content .tup .left{
    overflow: auto;
}
/*.tup .left span{
    display: block;
}*/
.tup .left  .zishu{
width: 3.5rem;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
color: #999999;
font-size: 0.3rem;
display:-webkit-box;

}
.tup .guan{
   display: block;
    /*background-color: ; */
    color: #359f9d; 
    border: 1px solid #359f9d;
    border-radius: 0.08rem;
    outline: none;
    margin-bottom:.1rem;
    
}
.tup .yguanl{
   display: none;
    /*background-color: ; */
    color: #359f9d; 
    border: 0.07rem solid #359f9d;
    border-radius: 0.08rem;
    outline: none;

}
.left{
    /* line-height: 0.3rem; */
    /* margin-top: -0.3rem; */
}
.left .daxie{
    
    font-weight: 600;
    /* font-size: 0.54rem; */
   width: 3.5rem;
   display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin: 0;
    line-height: 0.7rem;
    /*color: #999999;*/
    margin-bottom: 0.1rem;
     font-family: PingFangSC-Regular;
    font-size: 0.35rem;
    color: #333333;
}
.tup .right{
    width: 100%;
    /* display: block; */
}
.tup .right p{
    display: block;
    font-size: 0.3rem;
    color:#999999;
}
.zhong{
    /* border: 0.01rem solid #999999; */
    padding-top: 0.3rem;
    padding-bottom: 0.5rem;
}

</style>