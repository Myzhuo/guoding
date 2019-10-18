<template>
    <div class="exper-dibu">
            <div class="navbar s-df s-hao">
                <div class="navbarLi flex flex-column justify-content-center  shouccc   align-items-center"  @click="ontab(1)" >
                    <span class=" shouccc"   :class="exshou == 1?'ex_shou':'ex_mei'"></span>
                    <!-- ex_mei ex_shou -->
                    <span>收藏</span>
                </div>
                <div class="navbarLi flex flex-column justify-content-center   align-items-center" id ="dianxx"  @click="ontab(2)">
                    <span class=" dianzzz"  :class="dzactive == 1?'dz_active':'home_dz'"></span>
                    <!-- dz_active -->
                    <span>点赞</span>
                </div>
            <div id="dashang" class="navbarLi flex flex-column justify-content-center   align-items-center" @click="ontab(3)">
                <img src="@/assets/images/ex-dashang.png" alt="">
                <span>打赏</span>
            </div>
            <div class="navbarLi flex flex-column justify-content-center    align-items-center" id = "pl" @click="ontab(4)">
                <img src="@/assets/images/home_huofu.png" alt="">
                <span>评论</span>
            </div> 
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            exshou:0,
            dzactive:0
        }
    },
    methods:{
        ontab(i){
            switch(i){
                case 1:
                    if(this.exshou == 0){
                           this.exshou = 1;
                    }else{
                        this.exshou = 0;
                    }
                    break;
                case 2:
                    if(this.dzactive == 0 ){
                        this.dzactive = 1;
                    }else{
                        this.dzactive = 0;
                    }
                    break;
                case 3:
                    this.$msg({
                        text:'作者很懒，这个还没开发!',
                        type:'success'
                    })
                    break; 
                case 4:
                    this.$msg({
                        text:'作者很懒，这个还没开发!',
                        type:'success'
                    })
                    break;
            }
        }
    }
}
</script>