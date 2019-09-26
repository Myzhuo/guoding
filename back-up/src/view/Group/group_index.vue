<template>
        <div id="grounp" class="s-flex">
                <div class="tup " v-for="(item,index) in group" :key="index">
                    <div class="flex s-df s-hao padding">
                            <img class="img" :src="item.group_img" alt="">
                        <div class="left s-flex">
                            <span class="daxie">{{item.group_name}}</span>
                            <span class="zishu">{{item.group_suggest}}</span>
                        </div>
                        <div class="right flex flex-column align-items-end">
                            <button class="guan"  @click="follow(index,item.new_type,item.is_flow)" v-if="item.is_flow == 1">关注</button>
                            <button class="guan"  @click="follow(index,item.new_type,item.is_flow)" v-if="item.is_flow == 0">已关注</button>
                            <p class="ppp">{{item.group_order}}人关注，{{item.group_num}}遍内容</p>
                        </div>
                    </div>
                </div>
        </div>
</template>
<script>
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    props:{
        group:{
            type:Array,
            default:()=>{}
        }
    },
    created(){
        // console.log(this.group)
    },
    methods:{
        ...mapActions([
            'Followsub'
        ]),
        follow(id,type,c){
            var data ={
                index:id,
                type:type,
                c:c
            }
            this.Followsub(data);
        }
    }
}
</script>
<style scoped>
.tup{
    /*height: 1.67rem;*/
    margin-top: 0.3rem;
}
.tup::after{
   content: " ";
    display: inline-block;
    width: 100%;
    position: relative;
    height: 1px;
    background: #e5e5e5;
}
.flex .img{
    width: 1.2rem;
    height: 1.2rem;
     /*margin-top: 0.2rem;*/    
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    min-width:1.2rem;
    background-size: contain;

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
margin-top: .21rem;
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