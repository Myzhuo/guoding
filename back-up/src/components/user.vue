<template>
        <div>
    <!-- <section class="toubu1 s-df s-hao s-war content-header circle-header">
        <div class="notice" onclick="window.location.href='mymessage.html'"></div>
    </section> -->
    <section class="body-bg newContent my-content">
        <!-- 顶部导航栏 -->
        <!-- <div class="dingbu" id = "mymessage" ><a href="mymessage.html"><img     src="images/myxiaoxi.png" alt=""></a></div> -->
        <div class="home-to s-df">
            <div class="home-left padding s-df s-hao s-jcb s-flex">
                <!-- 登录的时候 -->
                <!-- <div class="pp">
                    <div class="span">
                            <span id = "homepage">菲菲飞</span>
                            <i>Lv4</i>
                    </div>
                    <div class="home-img" id="myzshu">
                        <img src="images/home-zshu.png" alt="">
                        <img src="images/home-zshu.png" alt="">
                        <img src="images/home-zshu.png" alt="">
                    </div>
                </div> -->
                <!-- 没有登录的时候 -->
                <div class="bbb noLogin">
                    <div class="span" id="login" onclick="window.location.href='login.html'">
                        <span>登录/注册</span>
                    </div>
                </div>
            </div>
            <!-- 消息 -->
            <div class="home-right padding">
                <!-- <div class="home-share float-right home_share" id="mymessage" onclick="window.location.href='mymessage.html'">
                    <img src="images/myxiaoxi.png" alt="">
                </div> -->

                <div class="home-timg">
                    <img src="@/assets/images/my_touxiang.png" alt="" class="touxian">
                </div>
            </div>
        </div>
        <!-- 没有登录 -->
        <div class="ccc bg">
            <!-- <div class="xixian1"></div>
            <div class="container-fluid ask-bge">
                <div class="row">
                    <div class="col-6 flex justify-content-center align-items-center" id="homefollow" >
                        <span>关注<strong>0</strong>人</span>
                    </div>
                    <div class="col-6 flex justify-content-center align-items-center" id="beihomefollow">
                        <span>被关注<strong>0</strong>人</span>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="zhongbu bg">
            <nav class="flex justify-content-center">
                <div class="s-flex s-df s-wao s-hao"><a href="myfollow.html" id="myfollow"><img src="@/assets/images/my_guanzhu.png" alt=""><p>我的关注</p></a></div>
                <div class="s-flex s-df s-wao s-hao"><a href="mypublish.html" id="mypublish"><img src="@/assets/images/my_fabu.png" alt=""><p>我的发布</p></a></div>
                <div class="s-flex s-df s-wao s-hao"><a href="liulan.html" id="liulan"><img src="@/assets/images/my_liulan.png" alt=""><p>最近浏览</p></a></div>
                <div class="s-flex s-df s-wao s-hao"><a href="integr.html" id="integr"><img src="@/assets/images/my_jlu.png" alt=""><p>已签到</p></a></div>
            </nav>
        </div>
        <div class="fubu fus">
            <nav>
                <a href="followsubject.html" class="s-df s-hao"><img src="@/assets/images/my_xiangmu.png"><span class="s-flex">我的项目</span><span class="float-right toRight"></span></a>
                <a href="mygroup.html" class="s-df s-hao" id="mygroup"><img src="@/assets/images/my_xiaozu.png"><span class="s-flex">我的小组</span><span
                        class="float-right toRight"></span></a>
                <a href="mymoney.html" class="s-df s-hao" id="cardmoney"><img src="@/assets/images/my_dashang.png"><span class="s-flex">我的打赏</span><span
                        class="float-right toRight"></span></a>
                <a href="mystore.html" class="s-df s-hao" id="mystore"><img src="@/assets/images/my_shouc.png"><span class="s-flex">我的收藏</span><span class="float-right toRight"></span></a>
                <a href="homezlan.html" class="s-df s-hao" id="myshenqzlan"><img src="@/assets/images/my_zlan.png"><span class="s-flex">我的专栏</span><span
                        class="float-right toRight"></span></a>
            </nav>
        </div>
        <div class="fubu">
            <nav>
                <a href="shizengduo.html" id="shizengduo" class="s-df s-hao"><img src="@/assets/images/my_sz.png"><span class="s-flex">设置</span><span
                        class="float-right toRight"></span></a>
                <a href="javascript:void(0)" class="s-df s-hao" onclick="tabBlackMode(this)"><img src="@/assets/images/my_yejian.png" /><span class="s-flex">夜间模式</span><span class="float-right toRight"></span></a>
            </nav>
        </div>
    </section>
        </div>
</template>
<script>
export default {
    name:'User',
    data () {
        return {

        }
    }
}
</script>
 <style  scoped>
  .pp .span i {
            font-style: normal;
            margin-left: 10px;
        }

        .home-img img {
            margin-right: 8px;
        }

        .ask-bge strong {
            margin: 0 3px;
        }

        /*.home-right .home-timg img {
            right: 0.3rem;
        }*/

        .home-left .pp {
            display: inline-block;
        }

        .home-left .pp #myzshu {
            display: inline-block;
        }

        /*#login span {
            color: #fff;
        }*/

        .content-body-bottom {
            padding-bottom: 0;
        }
        .home-timg img {
            position: initial !important;
            display: inline-block;
            float: right;
        }
        /*.home-right .home-share img {
            margin-top: 0.16rem;
            margin-bottom: 0.5rem;
        }*/
        .toRight {
            background: url(~@/assets/images/right.png) no-repeat;
            width: 7px;
            height: 12px;
            background-position: center;
            background-size: 100% 100%;
        }
        .jiexian1{
            margin-top: 3px;
            margin-bottom: 3px;
            border: 0;
        }
        body#night {
            background: #000000;
        }
        #night .bg {
            background: #1E1E1E;
        }
        #night p {
            color: #ffffff;
        }
 </style>
       
 