<template>

<div>
    <Heads/>
    <section class="zhgongti justify-content-center align-items-center li-cont">
    <div class="indexcontent">
          <div class="xianmua">
            <!-- 项目条 -->
                  <subJect :subjectList="subjectList"></subJect>
          </div>
      
          <!--轮播图  -->
          <div id="demo" class="carousel slide" data-ride="carousel">
              <imglb :carouselList="carouselList"></imglb>
          </div>

          <!-- 热门 -->
          <div class="spot s-df s-hao">
          <img src="@/assets/images/follow.png" alt="">
          <span>最新头条</span>
          </div>
          <!-- 内容 -->
          <div class="container-fluid">
            <div class="row spotzong">
                <div class="  leftspot">
                    <span>人工配音的服务态度非常好，遇到的问题都认真的帮我解决，文字录制速度非常快，音质好咬字清晰，也陆续介绍朋友过来。</span>
                    <p>人工配音的服务态度非常好，遇到的问题都认真的帮我解决，文字录制速度非常快，音质好咬字清晰，也陆续介绍朋友过来。</p>
                </div>
                <div class="  rightspot">
                    <span>人工配音的服务态度非常好，遇到的问题都认真的帮我解决，文字录制速度非常快，音质好咬字清晰，也陆续介绍朋友过来。</span>
                    <p>人工配音的服务态度非常好，遇到的问题都认真的帮我解决，文字录制速度非常快，音质好咬字清晰，也陆续介绍朋友过来。</p>
                </div>
            </div>
          </div>
          <!-- host -->
          <div class="spot s-df s-hao s-jcb">
          <img src="@/assets/images/jyan.png" alt="">
          <span class="s-flex">热门.经验</span>
          <div class="float-right s-df s-hao">
            <span class="huanImg"></span>
          <button class="guan ">换一批</button>
          </div>
          </div>
          <!-- 细线 -->
          <!-- <div id="remeng" class="tab-content justify-content-center align-items-center"> -->
          <div id="remeng" class="tab-content">
            <conter :user-data="userdata"></conter>
          </div>
          <!-- 推荐 -->
          <div class="xiam">
              <div class="spot s-df s-hao s-jcb"  >
          <img src="@/assets/images/tj.png" alt="">
          <span class="s-flex">为你推荐</span>
          <div class="float-right">
          <button class="guan" id ="tsuggest">更多</button>
          </div>

          </div>

          <div   class="tab-content xianmua"> 
             <subJect :subjectList="Popular"></subJect>
             <!-- 显示橡木桶 -->
              <ask :ask-data="userdata"></ask>
          </div>
          <div class="clear"></div>
          <!-- 热门提问 -->
          <div class="spot s-df s-hao s-jcb" style="width:100%;">
          <img src="@/assets/images/ask.png" alt="">
          <span class="s-flex">提问.热门</span>
          <div class="float-right s-df s-hao" id="huanyixia">
          <span class="huanImg"></span>
          <button class="guan" >换一批</button>
          </div>
          </div>
          <!-- <div id="hot" class="tab-content justify-content-center align-items-center"> -->
          <div id="hot" class="tab-content" style=" padding-bottom: 3rem;"> 
              <conter :user-data="askdata"></conter>
          </div>
          </div>
          </div>
    </section>
  </div>
</template>
<script>
 import  imglb  from "../view/imglb"
 import  conter  from "../view/conter"
 import  ask  from "../view/ask"
 import  subJect  from "../view/subject"
 import  Heads  from "../view/Head"
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    name:'dist',
     computed: {
            ...mapState({
               userdata:state=>state.userdata,
               type:state=>state.type,
               askdata:state=>state.askdata,
               carouselList:state=>state.carouselList,
               subjectList:state=>state.subjectlist,
               Popular:state=>state.Popular
            }),
        },
    methods:{
    },
    components:{
       conter,
       imglb,
       ask,
       subJect,
       Heads
   },
   mounted(){
    //  console.log(this.subjectList)
   }
}
</script>
<style scoped>

</style>