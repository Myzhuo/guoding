<template>
        <div class="tab-content">
             <div class="tupLi" id="exper"  v-for="(item,index) in followlist" :key="index">
                 <!-- -->
                    <div class="tup huixian " id="exper" v-if="item.type == 1">
                        <div class="flex  aaa">
                            <div class="yanxiana"> 
                            <img class="img" :src="item.userimg" alt=""> 
                            </div> 
                            <div class="left lefta" >
                            <span class="daxie">{{item.username}}<i>Lv{{item.userl}}</i></span>
                            <div class="s-df s-hao"><span class="zishu">{{item.subject}}</span><span class="zishu">已完成</span></div>
                            </div>
                            <div class="right">
                            <span class="guans  float-right ">{{item.userTime}}</span>
                            </div>
                        </div>
                    </div>
                        <!-- 资源 -->
                    <div class="tup huixian " id="exper" v-if ="item.type == 2">
                        <div class="flex  aaa">
                            <div class="yanxiana"> 
                                   <img class="img" :src="item.userimg" alt=""> 
                            </div> 
                            <div class="left lefta s-flex" >
                                     <span class="daxie">{{item.username}}<i>Lv{{item.userl}}</i></span>
                                    <span class="zishu">{{item.sub_Namelist}}</span>
                            </div>
                            <div class="right">
                                <span class="guans  float-right ">{{item.add_tiem}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- 关注 -->
                    <div class="tup huixian " id="exper" v-if ="item.type == 3">
                        <div class="flex  aaa">
                            <div class="yanxiana"> 
                                   <img class="img" :src="item.userimg" alt=""> 
                            </div> 
                            <div class="left lefta s-flex" >
                                     <span class="daxie">{{item.username}}<i>Lv{{item.userl}}</i></span>
                                    <span class="zishu">于{{item.add_tiem}}关注了{{item.sub_Namelist}}</span>
                            </div>
                        </div>
                    </div>
                        <div class="leftwenzi flex" v-if="item.type != 3">
                            <div class="leftwenzi s-df" >
                                <p class="pwenzi s-flex" v-if="item.userconter != ''">{{item.userconter}}</p>  
                                <img :class="item.type == 2 ? 'follow_zy' : 'righttup' " :src="item.userImgconter" alt="" v-if="item.userImgconter != ''">
                                <div class="flex flex-column justify-content-center" v-if="item.type== 2">
                                        <span class="follow_mz">{{item.resou_Name}}</span>
                                        <span class="follow_kb">{{item.resou_bit}}</span>
                                </div>
                            </div> 
                        </div>
                    <div class="rightyouxia float-right flex justify-content-center " v-if="item.type != 3">
                        <div class="rightyouxia s-df s-hao s-war">
                            <div class="homedian s-df s-hao">
                                <img src="@/assets/images/home_ll.png" alt="" class="ImgA">
                                <span class="pandd">{{item.user}}</span>
                            </div>
                            <div class="homedian s-df s-hao mydz">
                                  <img src="@/assets/images/home_dz.png" alt="" class="ImgA">
                                <span class="pandd"  >{{item.userdz}}</span> 
                            </div>
                            <div class="homedian s-df s-hao s-df s-hao pl">
                              <img src="@/assets/images/home_pl.png" alt="" class="ImgA">
                            <span>{{item.userliu}}</span>
                            </div>
                            </div></div>
                    </div>
        </div>
</template>
<script>
export default {
    props:{
        followlist:{
            type:Array,
            default:()=>{}
        }
    },
}
</script>
<style scoped>
.tup .yanxiana img {
    border-radius: 36px;

}
.rightyouxia  .homedian img{
    width: 15px;
    height: 15px;
}
.aaa{
    position: relative;
    width: 100%;
}
.aaa .right{
    position: absolute;
    right: 0;
}
.leftwenzi .follow_zy{
	width: 1.2rem;
	height:  1.2rem;
	margin-right: 0.4rem;
}
.leftwenzi .follow_mz{
    display: block;
    font-size: 16px;
}
.leftwenzi .follow_kb{
	color: #999;
	display: block;
}
</style>