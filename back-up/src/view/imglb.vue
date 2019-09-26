<template>
    <div class="swiper">
        <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in carouselList" :key='index'>
            <img :src="item.src">
        </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:['carouselList'],
      components: {
      swiper,
      swiperSlide  
    },
    data () {
         return{
          swiperOption: {
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          initialSlide :1,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          autoplayDisableOnInteraction : false,
          slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
    },
      }
    },
}
</script>
<style scoped>
.swiper{
    width:100%;
    height: 4.5rem;
    overflow: hidden;
    position: relative;
 }
 .swiper-slide{
     width: 100%;
     height:4.5rem;
     text-align: center;
 }
 
 img{
     margin-top: 0;
     width:100%;
     height:100%;
 }
 img{
display: block;

margin: 0 auto;

margin-top: 3.5%;

width: 92.625%;

height: 92.625%;  

vertical-align: middle;
 
-webkit-transition: all 1s ease 0s;

-moz-transition: all 1s ease 0s;

-ms-transition: all 1s ease 0s;

-o-transition: all 1s ease 0s;

transition: all 1s ease 0s;
 
 }
</style>