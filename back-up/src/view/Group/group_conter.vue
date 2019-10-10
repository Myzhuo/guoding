<template>
        <div class="tab-content">
             <div class="tupLi" id="exper"  v-for="(item,index) in groupconter" :key="index">
                    <div class="tup huixian " id="exper" >
                        <div class="flex  aaa">
                            <div class="yanxiana"> 
                            <img class="img" :src="item.group_img" alt=""> 
                            </div> 
                            <div class="left lefta" >
                            <span class="daxie">{{item.user_name}}<i>Lv{{item.user_l}}</i></span>
                            <div class="s-df s-hao"><span class="zishu">{{item.group_name}}</span><span class="zishu">{{item.gr_type}}</span></div>
                            </div>
                            <div class="right">
                            <span class="guans  float-right ">{{item.add_time}} </span>
                            </div>
                        </div>
                    </div>
                            <div class="leftwenzi ask-p flex" >
                                <p class="pwenzi flex">{{item.group_conter}}</p>  
                            </div> 
                            <div class="ask-pimg" v-if="item.imglist != [] " >
                                <img :src="a.src" alt="" v-for="(a,b) in item.imglist" :key="b">
                            </div>
                    <div class="rightyouxia float-right flex justify-content-center ">
                        <div class="rightyouxia s-df s-hao s-war">
                            <div class="homedian s-df s-hao">
                                <img src="@/assets/images/home_ll.png" alt="" class="ImgA">
                                <span class="pandd">{{item.user_lu}}</span>
                            </div>
                            <div class="homedian s-df s-hao mydz">
                                  <img src="@/assets/images/home_dz.png" alt="" class="ImgA">
                                <span class="pandd"  >{{item.user_d}}</span> 
                            </div>
                            <div class="homedian s-df s-hao s-df s-hao pl">
                              <img src="@/assets/images/home_pl.png" alt="" class="ImgA">
                            <span>{{item.user_p}}</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                            </div>
                            </div>
                    </div>
                    <ul class="dianzul s-flex" v-if="item.group_dz != [] ">
                       <img src="@/assets/images/home_dian.png" alt="" class="ImgA">
                        <li v-for="(c,d) in item.group_dz" :key="d"> {{c.name}},</li>
                         
                    </ul>
                    <div class="cir-ui" v-if="item.group_pl != []">
                        <ul class="xiaul">
                            <li v-for="(i,j) in item.group_pl" :key="j">{{i.name}}:{{i.conter}}</li>
                        </ul>
                    </div>
             </div>
        </div>
</template>
<script>
export default {
    props:{
        groupconter:{
            type:Array,
            default:()=>{}
        }
    },
    created(){
        // console.log(this.groupconter)
    },
    
    methods:{
        
    }
}
</script>
<style scoped>
 .cir-ui{
     background: #e3e3e3;
     border-radius: 5px;
 }
 
.dianzul img{
     width: .5rem;
     height: .5rem;
     /* display: block; */
    margin-right: .1rem;
    margin-top: -.1rem;
}
.circle-content .zhgongti .tab-content .huixian{
    padding: 0;
}
.circle-content .zhgongti .tab-content .ask-p .pwenzi{
    padding: 0;
}
.tup .yanxiana img {
    border-radius: 36px;

}
.rightyouxia  .homedian img{
    width: 15px;
    height: 15px;
}
.dianzul{
	display: flex;
    width: 90%;
    display: inline-block;
    line-height: .8rem;
    
}
.xiaul{
	/* margin-top: 0.2rem; */
}
.dianzul li{
display: inline;
}
.aaa{
    position: relative;
    width: 100%;
}
.aaa .right{
    position: absolute;
    right: 0;
}
.ask-pimg{
    width: 100%;
    text-align: left;
}
.ask-pimg img {
    width: 32%;
    margin: 1px;
    height: 3.5rem;
    border-radius: 5px;
}
</style>