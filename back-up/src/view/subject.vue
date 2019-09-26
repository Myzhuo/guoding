<template>
    <div class="swiper">
        <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in subjectList" :key='index'>
            <img :src="item.src"  @click="Onsubject(item.id,item.type,item)">
            <span class="wenzi">{{item.sub_name}}</span>
        </swiper-slide>
        </swiper>
        <div class="swiper-bg">
        </div>
    </div>
 
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:{
        subjectList:{
            type:Array,
            default:()=>{}
        }
    },
    components: {
    swiper,
    swiperSlide  
  },
  data () {
      return{
                //轮播config
        swiperOption: {
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        // debugger: true,
        initialSlide :1,
        autoplay: {
        // delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        },
        autoplayDisableOnInteraction : false,
        slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        // centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
    },

      }
  },
   methods:{
       Onsubject(id,type,index){
        //    console.log(index);
           switch( type ){
                    case 1:
                    // 去到项目条详情
                        this.$router.push({
                            path:'/Subdetail',
                            query:{
                                id:id,
                            }
                        })
                        break;
                    case 2:
                        console.log('我是去到为你推荐detial' + id)
                        // 去到为你推荐详情
                        break;
           }
       }
   }
}
</script>
<style  scoped>
 .swiper{
    width:100%;
    height: 2.5rem;
    overflow: hidden;
    position: relative;
 }
 .swiper-slide{
     width: 16.8%;
     height: 2.5rem;
     text-align: center;
     margin:.2rem;
    
 }
 .wenzi{
     width:100%;display: block;
     text-overflow:ellipsis; white-space:nowrap; overflow:hidden; 
 }
.swiper-bg{
    background: #ffffff;
    height: 2.7rem;
    opacity: .7;
    position: absolute;
    width: 1.2rem;
    right: 0;
    top: 0;
    z-index: 8888;
    display: block;

}
 img{
     margin-top: 0;
     width: 1.5rem;
     height: 1.5rem;
     border-radius: 12px;
 }
 img{
display: block;

margin: 0 auto;

margin-top: 3.5%;

/* width: 90.625%;

height: 90.625%; */

/* vertical-align: middle; */
/* 
-webkit-transition: all 1s ease 0s;

-moz-transition: all 1s ease 0s;

-ms-transition: all 1s ease 0s;

-o-transition: all 1s ease 0s;

transition: all 1s ease 0s; */
 
 }
 
 
 


 
</style>