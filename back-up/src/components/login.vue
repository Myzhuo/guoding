<template>
<div>
 <img src="@/assets/images/onload.png" alt=""  :class="kongzhi" class="Imgalist">
 <span  class="list-mode" :class="kongzhi">{{timeout}}</span>
    <section class="body-bg content-body newContent " :class="hide">
     <div class="shangtou s-df s-cf  " >
        <div class=" flex padding">
            <p>选择感兴趣的项目条</p>
        </div>
        <div class="flex s-df s-hao s-jcb padding">
            <p class="p">关注后可获得最新动态和精彩内容</p>
            <div class="s-df s-hao ydian">
                <i class="span1"></i>
                <i class=""></i>
            </div>
        </div>
        
        <div class="inputss flex justify-content-center padding">
            <div class=" flex  align-items-center icon-input1 s-flex s-hao">
                <button class="box-image " id="button"  value="" ></button>
                <input type="text" class="input-line s-flex" id="input"  placeholder="请输入想搜索的内容" oninput="OnInput (event)" onpropertychange="OnPropChanged (event)">
                <!-- <img src="@/assets/images/home_x.png" alt="" id="clearmover" onclick="subject();"> -->
            </div>
            <!-- <div class="button"> -->
                <!-- <span class=" qxiao " onclick="subject();">取消</span> -->
                <!-- <span class=" qxiao ">确定</span> -->
            <!-- </div> -->
        </div>
        <div class="xixian1 " style="margin-top:.5rem;"></div>
            <!-- 循环 -->
             <div class=" zuob s-flex" >
                <div class="nav-left">
                    <ul class="leftli">
                        <li :class=" couindex === index ? 'active': '' " v-for="(item,index) in onject" :key="index" @click=" Tablist(index,item.id,item) ">{{item.sub_name}}</li>
                    </ul>
                </div>
                <div class="nav-right">
                     <ul class="nav-right-list active" v-for="(item,index) in oncont[couindex].sub_conince "  :key="index" @click="selectsub(item,index)" >
						<li>
						    <div class="nav-phone-right s-df s-cf s-hao">
							<img :src="item.sub_img" alt="" >
								<span class="shouyea">{{item.sub_name}}</span>
								<span class="wenzhang">{{item.order_num}}遍文章,{{item.follow_num}}人关注</span>
							</div>
					    </li>
					</ul>
                </div>
            </div>

        <!-- </div> -->
        <!-- 选择好的时候 -->
                <div class="yj padding" >
                    <div class="s-df s-hao">
                        <span>已选：</span>
                        <ul class="imgaa s-df s-hao s-flex">
                             <li v-for="(a,b) in onimg" :key="b"><img :src="a.sub_img" alt=""></li>
                        </ul>
                    </div>
                </div>
                    <!-- <div class="xixian1"></div> -->
                <div class="btn-cont btn-cont1">
                    <button class="btn btn-primary btn-gradual-change" type="submit" id="Login" @click="next">下一步</button>
                </div>
        </div>
    </section>
    </div>
</template>
<script>
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    data(){
        return{
            hide:'hide',
            kongzhi:'block',
            timeout:10,
            couindex:0,
        }
    },
    
    computed:{
        ...mapState({
            onject:state=>state.onloadsubject,
            oncont:state=>state.sub_conince,
            onimg:state=>state.selectsub
        })
    },
    created(){
        var  t = setInterval(()=>{
            this.timeout--;
            if(this.timeout == 0 ){
                clearInterval(t);
                this.kongzhi = 'hide';
                this.hide = 'block';
            }
           
        },1000)
    },
    methods:{
        ...mapActions([
            'Selectsub'
        ]),
        selectsub(i,j){
            var data ={
                i:i,
                j:j
            }
            let len = this.onimg.length;
            if( len == 6 )this.$msg({
                text:'只能选择这么多喔',
                type:'success'
            })
            this.Selectsub(data);
        },
        next(){
            this.$router.push({
                path:'/fgrounp'
            })
        },
        Tablist(a,b,c){
            this.couindex = a;
        },
     
       
    }
}
</script>
<style scoped>
.ydian{
    margin-top: 0;

}
.ydian i{
    width: .13513513513513514rem;
    height: .13513513513513514rem;
    border-radius: 50%;
    background: #bbb;
    margin-left: .16216216216216217rem;
}
.ydian .span1{
    background: #399;
}
.list-mode{
   position: fixed;
    background: #fff;
    z-index: 1111;
    display: block;
    top: .2rem;
    border-radius: 50%;
    right: .2rem;
    width: .5rem;
    height: .5rem;
    text-align: center;
    color: #5578ff55;}
.Imgalist{
    width: 100%;
    height: 100%;
}
.hide{
    display: none;
}
.block{
    display: block;
}
    .qid-content .nav-right .nav-right-list, .qid-content .nav-right .nav-right-list.active{
        padding: 0;

    }.input-line{
        border: none;
    }
    .inputss{
        background: #F4F4F4;
        border-radius: 61px;
        width: 91%;
        margin: 0 auto;
        padding-bottom: 0;
    }
.body-bg .flex p{
    display: block;
    font-size: 0.56rem;
    margin: 0;
}
.icon-input1 .box-image{
    outline: none;
    border: none;
    background: none;
    margin-right: 0.3rem;
    width: 0.54rem;
    height: 0.54rem;
    background: url(~@/assets/images/qdsuos.png) no-repeat;
    background-position: center center;
    background-size: 0.54rem auto;
}
.body-bg .flex .p{
   
    font-size: .35rem;
    color: #999999;
    margin-top: 0.16rem;
    /* padding-left: 15px; */
}
 
.icon-input input{
    width: auto;;
    border: none;
    background: #f4f4f4;
}
.inputss{
/*display: block;*/
}
.shangtou {
    width: 100%;
    display:block;
}
.inputss .icon-input1{
    width: 100%;
}
.yj{
    display: block;
    width: 100%;
     height: auto;
     padding-top:.4rem;
     padding-bottom: .4rem; 
     /*border:1px solid red;*/
}
.yj ul li {
   /* width: 2.5rem;*/
    height: 1.0rem;
    line-height: 1.0rem;
    color: #333333;
    float: left;
    display:block;
    /* margin-bottom:.2rem; */
    /*font-size: */
    /*text-align: center;*/
}

.zuoyj{
    display:block;
}
.yj .imgaa{
    display:block;
    height: auto;
    /* margin-left: 1rem; */
    /* margin-bottom: 1rem; */
} 
.yj li img {
    width: 1rem;
    height: 1rem;
    border-radius: 3px;
    margin:0 .1rem .3rem .1rem;
    /* display: inline-block; */
}
.icon-input{
     
width: 100%;
height: 0.91rem;
/* border: 0.1rem solid #cccccc; */
border-radius: 0.39rem;
background: #f4f4f4;
margin-bottom: 0.36rem;
margin-top: 0.41rem;

}
.icon-input .box-image{
    outline: none;
    border: none;
    background: none;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    width: 0.54rem;
    height: 0.54rem;
    background: url(~@/assets/images/qdsuos.png) no-repeat;
    background-position: center center;
    background-size: 0.54rem auto;
}
.zuob{
   display: flex;
   height:auto;
}

.nav-left{
    width: 2.5rem;
    background-color: #fafafa;


}
.nav-left ul{
        height:100%;
    overflow-y: auto;
}

.nav-left ul li{
    height:2.0rem;
    line-height: 2.0rem;
    text-align: center;
}
.nav-left ul li.active{
    background-color: #fff;
    color: #359f9d;
    font-weight: bold;;
}
.nav-right{
    flex: 1;
}
.nav-right .nav-right-list{
    /* height: 100%; */
    overflow-y: auto;
    display: none;
}
.nav-right .nav-right-list.active{
    display: inline-block;
    /* margin-top: 0.2rem; */
    text-align: center;
    
}
 .nav-right .nav-right-list .nav-phone-right {
    flex: 1;
    /* width: 3rem; */
    float: left;
    height: auto;
    margin-top: 0.18rem;
    margin-left: 0.15rem;
}
.nav-right .nav-right-list .nav-phone-right  .shouyea{

    width: 2rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: center;
    display:block;
    /*font-size: 18px;*/
}
.nav-right .nav-right-list .nav-phone-right .wenzhang{
     width: 2.3rem;
        display: -webkit-box; 
     -webkit-box-orient: vertical; 
     -webkit-line-clamp: 2; 
     overflow: hidden; 
    font-size: 0.25rem;
    color: #cccccc; 
    text-align: center;
}
.nav-right .nav-right-list .nav-phone-right img{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 3px;
}
.content-body .btn-cont1{
    margin: 0;
}
.tupphone .xuanze{
    flex: 1;
    line-height: 1.31rem;
    /* display: block; */
    font-size: 24px;
    /* margin-top: 1.2rem; */
    display: block;
    float: left;
}
.upphone .aaaaa{
    display: block;
    width: 1.0rem;
    height: 1.0rem;
}
</style>