<template>
        <section class="body-bg  subject-detail-center  subject_detail-content">
                <section class="zhgongti justify-content-center align-items-center li-cont">                    
            <div class="subject-detail-tou justify-content-center align-items-center" >
            <div class="subject-detail-images flex float-left">
            <img :src="subconter.subcont[0].sub_img" alt="" class="subject-detail-img">
            </div>
            <div class="subject-detail-right justify-content-center flex-column flex">
            <span class="subject-detail-mingcheng">{{subconter.subcont[0].sub_msg}}</span>
            <span>{{subconter.subcont[0].sub_name}}</span>
            <span>官网：{{subconter.subcont[0].sub_url}}</span>
            <div class="subject-detail-xji">
            <div class="subject-detail-xjwenzi flex flex-column">
                    <div>
                            <span class="subject-detail-knan float-left">难度</span>
                            <img  v-for="(a,index) in subconter.subcont[0].Nd" :key="index" :src="a.src" alt="">
                        </div>
                        <div>
                            <span class="subject-detail-knan float-left">价值</span>
                            <img  v-for="(a,index) in subconter.subcont[0].Jz" :key="index" :src="a.src" alt="">
                        </div>
            </div> 
            <div class="flex align-items-end flex" style="display:block;text-align: right;"> 
            <button class="subject-detail-btn follow"  @click="follow(subconter.id,subconter.is_f)" v-if="subconter.is_f== 0">已关注</button>
                <button class="subject-detail-btn follow"  @click="follow(subconter.id,subconter.is_f)"   v-if="subconter.is_f== 1">关注</button>
            </div>
            </div>
            </div>
            </div>
            <div class="subject-detail-suggest ">
                <div class="subject-detail-suggestwz s-df s-hao s-jcb">
                    <span class="">项目介绍</span>
                    <div class="subject-detail-suggestimg flex justify-content-center float-right" id="suggest"></div>
                </div>
                <div class="subject-detail-cent">
                    <span>{{subconter.subcont[0].sub_conter}}</span>
                </div>
            </div>

            <div class="subject-detail-sanbtn flex justify-content-center align-items-center">
            <button class="subject-detail-cbtn" id="join">初参加</button>
            <button id="zjoin">再参加</button>
            <button class="subject-detail-ybtn" id="yjoin">已完成</button>
            </div>'
            <div class="jiexian"></div>

            <div class="subject-detail-time flex ">
            <span>时间节点</span>
            </div>

            <div class="subject-detail-timeall flex  justify-content-center align-items-center">
             <div class="stuae s-df">

                <div :class="subconter.subcont[0].time[0].is_a ==1 ?'s-flex s-df s-cf s-hao bname0 bname-li now':'s-flex s-df s-cf s-hao bname0 bname-li done' ">
                    <div class="ac_cc " id="1"></div>
                    <span class="bName" id ="1">{{subconter.subcont[0].time[0].name}}</span>
                    <span class="time" id ="1">{{subconter.subcont[0].time[0].tiem}}</span>
                </div>
                <div :class="subconter.subcont[0].time[1].is_a ==1 ?'s-flex s-df s-cf s-hao bname1 bname-li done  now':'s-flex s-df s-cf s-hao bname1 bname-li ' ">
                    <div class="ac_cc" id="2"></div>
                    <span class="bName" id ="1">{{subconter.subcont[0].time[1].name}}</span>
                    <span class="time" id ="1">{{subconter.subcont[0].time[1].tiem}}</span>
                </div>


                <div :class="subconter.subcont[0].time[2].is_a ==1 ?'s-flex s-df s-cf s-hao bname2 bname-li now':'s-flex s-df s-cf s-hao bname2 bname-li ' ">
                    <div class="ac_cc" id="3"></div>
                    <span class="bName" id ="1">{{subconter.subcont[0].time[2].name}}</span>
                    <span class="time" id ="1">{{subconter.subcont[0].time[2].tiem}}</span>
                </div>

                <div :class="subconter.subcont[0].time[3].is_a ==1 ?'s-flex s-df s-cf s-hao bname3 bname-li now':'s-flex s-df s-cf s-hao bname3 bname-li ' ">
                        <div class="ac_cc" id ="4"></div>
                        <span class="bName" id ="1">{{subconter.subcont[0].time[3].name}}</span>
                    <span class="time" id ="1">{{subconter.subcont[0].time[3].tiem}}</span>
                    </div>

                </div>
            </div>
			    <div class="jiexian"></div>
                <div class="tablist">
                    <tablist :tabList ='tabList' />
                </div>
        </section>
    </section>
</template>
<script>
import tablist  from '../Subject/sub_tablist'
import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    components:{
        tablist
    },
    props:{
        subconter:{
            type:Object,
            default:''
        }
    },
    created(){
    },
    methods:{
        ...mapActions([
            'Followsubdetal'
        ]),
    follow(id,is){
        var data ={
            id:id,
            f:is
        }
        if(is== 1)this.$msg({text:'你关注了'+this.subconter.sub_name,type:'success'})
        if(is== 0)this.$msg({text:'你取消了对'+this.subconter.sub_name+'的关注',type:'success'})
        this.Followsubdetal(data)
    }
    },
    computed:{
        tabList(){
           return this.$store.state.index.sublist
        }
    }
}
</script>
<style scoped>
 
/*项目名称css*/
/*.subject-detail-center{
	margin-top: 0.54rem;
}*/
.subject-detail-center .zhgongti{
	border: none;
}
.zhgongti .subject-detail-tou {
	padding: 0.4rem 15px;
	position: relative;
}
.zhgongti .subject-detail-tou .subject-detail-images img{
	width: 2.45rem;
	height: 2.45rem;
	border-radius: 6px;
	margin-right: 0.31rem;
}
.zhgongti .subject-detail-tou .subject-detail-right .subject-detail-mingcheng{
	font-weight: 600;
	/*font-size: 13px;*/
	color: #000;
	/* margin-bottom: 0.15rem; */
	font-family: PingFangSC-Medium;
	font-size: 0.4rem;
	color: #333333;
	letter-spacing: 0;
	/*margin-top: 0.15rem;*/
}
.zhgongti .subject-detail-tou .subject-detail-right span{
	font-size: 0.3rem;
	color: #999999;
	display: block;
	/*margin-bottom: 0.0.5rem;*/
}
.zhgongti .subject-detail-tou .subject-detail-right .subject-detail-xji .subject-detail-xjwenzi img{
	width: 11.1px;
	height: 10.9px;
	margin-top:-.15rem;
	margin-right:.1rem;
}
.zhgongti .subject-detail-tou .subject-detail-right .subject-detail-xji .subject-detail-xjwenzi span{
	color: #359f9d;
	margin-right: 0.2rem;
	font-size: 0.3rem;
}
.zhgongti .subject-detail-tou .subject-detail-right .subject-detail-xji .subject-detail-btn{
	 outline: none;
    color: #359f9d;
    background: none;
      border: 1px solid #359f9d;
    border-radius: 4px;
    display: block;
    font-size: 0.35rem;
    /* width: 1.3rem; */
    height: 0.7rem;
    /* position: absolute; */
    float:right;
    right: 0.45rem;

}
.zhgongti .subject-detail-tou .subject-detail-right .subject-detail-xji .subject-detail-qbtn{
	outline: none;
	color: #bbb;

	background:none;
	border: 2px solid #bbb;
	border-radius: 6px;
	display:none;
	font-size: 0.4rem;
}
/*项目介绍CSS*/
.zhgongti .subject-detail-suggest{
	width:91.5%;
	height:13.3%;
	background:#f4f4f4;
	 margin:0 auto;
	border-radius: 18px;
	
}
.zhgongti .subject-detail-suggest .subject-detail-xain{
	/*border-top: 1px solid #cccccc;*/
}
.zhgongti .subject-detail-suggest .subject-detail-suggestwz{
	display: block;
	/*padding-top: 0.5rem;*/
	border-bottom: 0.025rem solid   #E5E5E5;
    padding: 15px 15px;
    min-height: 1.2rem;
    margin-top: .4rem;
    line-height: 0;
    position: relative;
}
.zhgongti .subject-detail-suggest .subject-detail-suggestwz span{
	 /*font-size: 13px;*/
    font-weight: 500;
    font-size: 0.375rem;
    font-family: PingFangSC-Medium;
    color: #333333;
    letter-spacing: 0;
    display: inline-block;
    text-align: left;
    margin-top: .2rem;
   /* position: absolute; */
   /* top: -0.15rem; */
}
.zhgongti .subject-detail-suggest .subject-detail-suggestwz .subject-detail-suggestimg{
	width: 0.4rem;
    height: 0.4rem;
	background: url(~@/assets/images/zixu_xia.png);
	background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    /*margin-right: 0.2rem;*/
   
    display: inline-block;
}
.zhgongti .subject-detail-suggest .subject-detail-cent{
	padding: 15px 15px;
}
.zhgongti .subject-detail-suggest .subject-detail-cent span{
display: block;
/*font-size: 0.17rem;*/
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
line-height: 0.7rem;
} 

/*三个按钮的样式*/
.subject-detail-sanbtn{
	margin:15px 0;
} 
.subject-detail-sanbtn button{
    /* width: 1.65rem; */
    height:0.7rem;
	 outline: none;
	 font-size: 0.35rem;
    color: #359f9d;
    background: none;
    border: 1px solid #359f9d;
    border-radius: 4px;
    display: block;
}
.subject-detail-sanbtn .subject-detail-cbtn{
	margin-right: 1.4rem;
}
.subject-detail-sanbtn .subject-detail-ybtn{
	margin-left: 1.4rem;
}
/*时间节点*/


.stuae{
	width: 100%;
	position: relative;
	height: 1.5rem;
	padding:0 15px;
	color:#999999;
    font-style: .5rem;
}

.stuae span{
font-family: PingFangSC-Regular;
font-size: 0.375rem;
color: #999999;
letter-spacing: 0;


}

.bname,.bname1,.bname2,.bname3{
width: 20%;
  position: absolute;
  text-align: center;
  

}
/*圆点颜色*/
.ac_hz{
	width: 0.3rem;
    height: 0.3rem;
    border-radius: 20px;
    background: #359F9D;
    border: 1px solid #359F9D;
    z-index: 2;
    margin-bottom:.24rem;

}
/*圆点灰色*/
.ac_cc{
	width: 0.3rem;
    height: 0.3rem;
    border-radius: 20px;
    background: #bbb;
    border: 1px solid #bbb;
    margin-bottom:.2rem;
}
/*zuixin*/
.Atime{
	width: 0.3rem;
    height: 0.3rem;
    border-radius: 42px;
    /* opacity: 0.2; */
    background: #359F9D;
    margin-bottom:.25rem;
    /* border: 1px solid #359F9D; */
    z-index: 2;
    box-shadow: 0px 0px 0px 7px #f4f4f4;
}
/*线条灰色*/
.x_acive{
	border: 1px solid #bbb;
    width: 2.3rem;
    position: absolute;
    top: .14rem;
    left: 1.15rem;
    height: 0.01rem;
    background: #bbb;
    border-radius: 5px;
}
/*线条有颜色*/
.a_acive{
	border: 1px solid #359F9D;
    width: 2.3rem;
    position: absolute;
    top: .14rem;
    left: 1.15rem;
    height: 0.01rem;
    background: #359F9D;
    border-radius: 5px;
}
/*DISHAN*/


.bname3{
	right: .47rem;
}
.bname2{
	left: 5rem;
}
.bname1{
	left: 2.7rem;
}
.bname0{
width: 20%;
  position: absolute;
  text-align: center;
}

.stuae .time{
	 width: 2rem;
	 display:block;
	  display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	font-size: .25rem;
}
.subject-detail-time{
	padding: 15px 15px;
font-family: PingFangSC-Medium;
font-size: 0.375rem;
color: #333333;
letter-spacing: 0;
font-weight: 600;
	 border-bottom: 1px solid #f4f4f4;
}
.subject-detail-timeall{
	height: 2rem;
    margin: .5rem 0 1rem 0;
}
 


.stuae .time{
	 width: 1.85rem;
	 /*height: 0.7rem;*/
	 display:block;
	  display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	font-family: PingFangSC-Regular;
	font-size: 0.25rem;
	color: #333333;
	letter-spacing: 0;
	text-align: center;

}
/*.subject-detail-timeall .subject-detail-timedu1{
	display: block;	
}
.subject-detail-timeall .container .progress{
	height: 0.15rem;
}
.subject-detail-timeall .container .progress .progress-bar{
	background: #359f9d;
}*/
 

/*提问tab样式*/
.subject-detail-take {
	padding: 0 15px;
	/*font-size: 13px;*/
	margin:0.47rem 0;
	position: relative;
}
.subject-detail-take .subject-detail-takeleft span{
	color: #999999;
	margin-right: 0.7rem;
	display: inline-block;
}
.subject-detail-take .subject-detail-takeright{
	display: block;
	position:absolute;
	right: 0.3rem;
	display: block;
	color: #359f9d;
}
.subject-detail-take .subject-detail-takeright #jy{
	margin-right: 0.7rem;
}
.subject-detail-take .subject-detail-takeleft .subject-detail-takeactive{
	color: #000000;
	font-weight: 500;
}
.subject-detail-take .subject-detail-takeleft .subject-detail-takeactiveddd{
	color: #000000;
	font-weight: 500;
}
.subject-detail-taketwen{
	display: block;
	padding: 0 15px;
	margin:0.2rem 0 0.2rem 0;
}
	
.subject-detail-taketwen .subject-detail-takewz{
	/*font-size: 14px;*/
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
}
/*经验开始*/
.subject-tetail-gengduo{
	padding-left:15px;
}
.subject-tetail-gengduo .swiper-container .swiper-slide{
	text-align: center;
	width: auto;
}
 
/*资源*/
.subject-detail-resourcezy{
	height: 2.5rem;	
}
.subject-detail-resource .tup .aaa .yanxiana .img{
	border-radius:6px;
	background:none;
}
.zhgongti .subject-detail-resource .rightyouxia{
	margin:0;
}
.zhgongti .subject-detail-resource .rightyouxia .sub-de-re{
	display: 
}
.zhgongti .subject-detail-resource  .rightyouxia .float-left span{
	margin-right: 0.12rem;
	color: #999999;
}
.zhgongti .subject-detail-resource  .rightyouxia .float-left .subject-detail-zyshangc{
	width: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    float: left;

}
.zhgongti .subject-detail-resource  .rightyouxia .float-right .homedian .pandd{
	margin:0.1rem;
}

/*评论*/
.tup  .subject-detail-plt{
	position: absolute;
    right: 15px;
    top: .7rem;
}
.tup .subject-detail-plt .sub-pl-img{
	    width: 11.1px;
    height: 10.9px;
	/*margin-right: 0.4rem;*/
}
.tup  .subject-detail-plt .subject-detail-pl{
	margin-right: 0.2rem;
	margin-left: 0.4rem;
	line-height: 1;
	color: #359F9D;
	font-size: 0.3rem;
}
#pl .tup .flex .left .zishu{
	 
	 
}
#pl .tup .flex .sub-pl-rq .sub-pl-time{
	display: block;
    position: absolute;
    top: 1.2rem;
    right: 15px;
    color: #999999;
}
</style>