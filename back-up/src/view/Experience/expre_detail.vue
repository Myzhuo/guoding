<template>
    <div>
     <!-- <div class="dashang-model">
        <div class="dashang-model-box  ">
            <div class="container-fluid">
            <div class="row">
                <div class="col-6 ">
                <img src="images/ex-dashang.png" alt="">
                <span>打赏</span>
                </div>
                <div class="col-6   ex-right ">
                <button  id="exper-fa" class="wancheng float-right">
                    发送
                </button>
                </div>
                <div class="xixian"></div>
                <div class="col-4">
                    <button value="5" class="col-active">￥5</button>
                </div>
                <div class="col-4">
                    <button value="20">￥20</button>
                </div>
                <div class="col-4"> 
                    <button value="50">￥50</button>
                </div>
                <div class="col-4">
                    <button value="80">￥80</button>
                </div>
                <div class="col-4">
                    <button value="100">￥100</button>
                </div>
                <div class="col-4"> 
                    <button value="200">￥200</button>
                </div>
            </div>

            </div>
        </div>
    </div>
    <div class="input-model" id = 'modeol' onclick="kongbai();">
        <div class="input-box margin-top flex IDinput" >
            <input type="text" placeholder="请输入评论内容!"  id ="input" value="" oninput="OnInput (event)" onpropertychange="OnPropChanged (event)" >
            <button onclick="xiepl(value);" id ="button" >确定</button>  
        </div>
    </div> -->
        <exp-head :headtou='headtou' />
        <section class="body-bg content-body newContent zixun-content ask-content askdetail-content">
            <section class="zhgongti justify-content-center align-items-center li-cont">    
                <expre-sub />    
                <expre-tb />
                 <div class="jiexian"></div>
                <div class="spot exper-zi s-df s-hao">
                    <img src="@/assets/images/follow.png" alt="">
                    <span class="s-flex">全部评论</span>
                    <button class="ask-zx " :class="indextab == 1 ? 'ccc':''"  @click="ontab(1)">正序&nbsp;<em>▼</em></button>
                    <button class="ask-zx " :class="indextab == 2 ? 'ccc':''" @click="ontab(2)">倒序&nbsp;<em>▼</em></button>
                    <button class="exper-lou" @click="ontab(3)">只看楼主</button>
                </div>
                <expre-conter />
                <exper-footer />
            </section>
        </section>
    </div>
</template>
<script>
import ExpHead from '../Subject/sub_head'
import expreSub from './expre_sub'
import expreTb from './expre_bt'
import experFooter from './expre_footer'
import expreConter from './expre_conter'
export default {
    components:{
        ExpHead,
        expreSub,
        expreTb,
        experFooter,
        expreConter
    },
    computed:{
        headtou(){
            return '经验详情'
        }
    },
    data(){
        return{
            indextab:1
        }
    },
    methods:{
        ontab(i){
           switch(i){
               case 1:
                   this.indextab = 1;
                   break;
               case 2:
                   this.indextab = 2;
                   break;
                case 3:
                    // 只看楼主
                    this.$msg({
                        text:'亲，作者的接口还咩有写到这个喔~',
                        type:'success'
                    })
                   break;
           }
        }
    }
}
</script>
<style scoped>
 .content-body-bottom{
 	padding-bottom: 0;
 }
 .left .daxie{
 	line-height: 1rem;
 }
 /*弹窗*/
.dashang-model{
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 1000;
    display: none;
    align-items: center;
    justify-content: center;
}
.dashang-model-box{
	background-color: #fff;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 6rem;
}

.my-xianmu .ssss{
	   width: 3.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999999;
}
.guan{
    border: .01rem solid #359f9d;
    color: #359f9d;

}
.input-ask{
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 1000;
    display: none;
    align-items: center;
    justify-content: center;
}
.input-box{
	background-color: #fff;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    opacity: .8;
    /*height: 6rem;*/
}
.IDinput1{
	display: block;
	width:100%;
}
.IDinput1 input{
	/*float:left;*/
	/*display: block;*/
	outline: none;
	width: 80%;	
	height:3rem;
	border: none;
}
.IDinput1 button{
	background: #359f9d;
    border: 1px solid #359f9d;
    color: #fff;
    width: 15%;
    opacity: 1;
   /* position: absolute;
    right: 0;*/
}
 .dashang-model .dashang-model-box .container-fluid{
 	margin-top: 0.2rem;
 }
 .dashang-model .dashang-model-box .container-fluid .row .col-6 span{
 	font-weight: 600;
 }
.dashang-model .dashang-model-box .container-fluid .row .col-6 img{
	width: 0.7rem;
	height: 0.6rem;
}
.dashang-model .dashang-model-box .container-fluid .row  .wancheng{
	background:none;
	outline: none;
	border:1px solid #359f9d;
	color: #359f9d;
	display: block;
	border-radius: 5px;
}
.my-xianmu .zl-mz, .zl-bq{
	background:none;
}
.xixian{
	width: 100%;
	margin-top:0.2rem ;
	border:1px solid #f4f4f4;
}
.left{
	margin-top:-0.15rem;
}
  
.container-fluid .col-4{
	margin-top:0.4rem;
}
.container-fluid .col-4 .col-active{
	background:url(~@/assets/images/exper_xuan.png);
	background-repeat:no-repeat; 
	background-size: 0.5rem;
	border:1px solid #359f9d;
	color: #359f9d;
}
.container-fluid .col-4 button{
	display: block;
    width: 2.6rem;
    height: 0.8rem;
	background:none;
	color: #ccc;
	outline: none;
	border: 1px solid #ccc;
	border-radius: 6px;
	display: block;
}

/*


 */

.input-model{
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 1000;
    display: none;
    align-items: center;
    justify-content: center;
}
.input-box{
	background-color: #fff;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    /*height: 6rem;*/
}
.IDinput{
	display: block;
	width:100%;
}
.IDinput input{
	/*float:left;*/
	/*display: block;*/
	outline: none;
	width: 80%;	
	height:auto;
	border: none;
}
.IDinput button{
	background: #359f9d;
    border: 1px solid #359f9d;
    color: #fff;
    
    width: 16%;
    position: absolute;
    right: 0;
}

 .ask-nr .exper-span{
 	text-indent: 1rem;
 	margin-top:.2rem;
 }
.exper-img img{
	width: 100%;
	border-radius: 10px;
	margin-top: 0.3rem;
}
.ask-h{
	margin:0.5rem 0;
}
.ask-h .ask-bguz span{
	color: #359f9d;

}
.ask-h .ask-bguz img{
	width: 0.5rem;
	/*height: 0.3rem;*/
	margin-top: -.15rem;
}
.zhgongti .spot .huanyihuan{
	margin-top: 0;
}
.zhgongti .exper-zi .exper-pl{
	/*font-size: 16px;*/
	font-size: .3rem;
	color: #000;
	font-weight: 500;
}
.zhgongti .exper-zi .ccc{
	color: #000;
}
.zhgongti .exper-zi .ask-zx{
	/*font-size: 16px;*/
	font-size: .3rem;
}
.zhgongti .exper-zi .exper-lou{
	background:none;
	color: #359f9d;
	outline: none;
	border:1px solid #359f9d;
	margin-left:0.1rem;
	border-radius: 5px;
	font-size: 14px;
}
.tup .flex .right .exper-dian{
	width: 100%;
}
.tup .flex .right .exper-dian1{
	/*width: 100%;*/
	margin-top:.2rem;
}
.tup .flex .right .exper-dian img{
	width: 0.5rem;
	height: 0.5rem;
	line-height: 5rem;
    display: block;
    float: left;
    margin-top: 0.2rem;
	
}
.tup .flex .right .exper-dian .pandd{
	line-height: 1rem;
	color: #359f9d;
}
.tup .flex .right .exper-dian1 .pandd1{
	line-height: .6rem;
	color: #359f9d;
	margin-right: .2rem;
}
.exper-huifu{

}
.zhgongti .tab-content .exper-huifu  .exper-wa{
	background:#f8f8f8;
	 margin-left: 1.5rem;
    width: 100%;
    border-radius: 8px;
    padding-left: 0.4rem;
    color: #ccc;
	 
}
.zhgongti .tab-content .leftwenzi .exper-time{
color: #ccc;
}
.exper-dibu{
	background-color: #fff;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
}
.exper-dibu .navbar img{
	width:0.5rem;
	height: 0.5rem;
	
}
</style>