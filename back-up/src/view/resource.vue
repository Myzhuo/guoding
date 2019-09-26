<template>
        <div class="tab-content">
             <div class="tupLi" id="exper"  v-for="(item,index) in resource" :key="index">
              
                    <div class="tup huixian " id="exper" >
                        <div class="flex  aaa">
                            <div class="yanxiana"> 
                                    <img class="img" src="@/assets/images/zy.png" alt="">
                            </div> 
                            <div class="left lefta s-flex" >
                                    <span class="daxie">{{item.res_name}}</span>
                                    <span class="zishu">{{item.bit}}</span>
                            </div>
                            <div class="right">
                                <span class="guans  float-right ">{{item.add_tiem}}</span>
                            </div>
                        </div>
                    </div>
               
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
</template>
<script>
export default {
    props:{
        resource:{
            type:Array,
            default:()=>[]
        }
    },
    created(){
    }
}
</script>
<style scoped>
/* .tup .yanxiana img {
    border-radius: 36px;

} */
.rightyouxia  .homedian img{
    width: 15px;
    height: 15px;
}
.rightyouxia{
    margin-top: -.4rem;
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