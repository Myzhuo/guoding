<template>
        <div class="tab-content xianmua">
             <div class="tupLi" id="exper"  v-for="(item,index) in askData" :key="index">
                    <div class="tup huixian " id="exper">
                        <div class="flex  aaa">
                            <!-- <a href = "homepage.html"> -->
                            <!-- <a href = "other.html?id='+obj[i].user_id+'"> -->
                            <div class="yanxiana"> 
                                <!-- @/assets/images/lp.jpg -->
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
                    <!-- <a href = "experience.html?id='+obj[i].xmt_jy_id+'"> -->
                        <div class="leftwenzi flex" >
                            <div class="leftwenzi s-df" >
                                <p class="pwenzi s-flex">{{item.userconter}}</p> 
                            </div> 
                        </div>
                    <!-- </a> -->
                    <div class="rightyouxia float-right flex justify-content-center ">
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
        </div>
</template>
<script>
export default {
    props:['askData'],
   
    data(){
        return{
        }
    },
    comments:{
    },
    created(){
    },
    methods:{
    }
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

</style>