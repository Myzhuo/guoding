<template>
        <footer class="clear footer">
             <div class="navbar flex-row">
                 <div v-for="(item,index) in ontlist" :key="index" class="flex flex-column justify-content-center align-items-center navbar-img li-cont li-active"   @click="getpath(index,item.is_x,item.name)">
                        <img :src="item.is_x == 0 ? item.active :item.src " alt="" :class="item.type==1 ? 'box-img2':''">
                     <span>{{item.homename}}</span>
                 </div>
             </div>
        </footer>
</template>
<script> 

export default {
    data(){
        return {
          
            ontlist:[
                {
                    name:'Home',
                    src: require('@/assets/images/icon__home@2x.png'),
                    active: require('@/assets/images/icon_home1_n@2x.png'),
                    homename:'首页',
                    is_x : 1, 
                },
                 {
                    name:'Follow',
                    src: require('@/assets/images/icon_guan1.png'),
                    active:  require('@/assets/images/icon_guan.png'),
                    homename:'关注',
                     is_x : 1, 
                
                },
                {
                    name:'Regulate',
                    src: require('@/assets/images/iconjiahao.png'),
                    homename:'',
                    type:1
                
                },
                 {
                    name:'myCircle',
                    src: require('@/assets/images/icon_q1.png'),
                    active:require('@/assets/images/icon_q.png'),
                    homename:'圈子',
                     is_x : 1, 
                },
                 {
                    name:'User',
                    src: require('@/assets/images/icon_my.png'),
                    active:require('@/assets/images/icon_my1.png'),
                    homename:'我的',
                    is_x : 1, 
                },

            ],
        }
    },
    created(){
        var ontlist = this.ontlist;
        if( this.$rName == 'Home' ){
         var  $rName ='Home'
        } else {
            var $rName = this.$rName
        }
        for( var i = 0; i < ontlist.length; i++ ){
            if( ontlist[i].name == $rName ){
                 ontlist[i].is_x != ontlist[i].is_x
                 ontlist[i].is_x = !ontlist[i].is_x
            } 
        }
        this.ontlist = ontlist;
    },
    methods:{
        getpath(index,e,path){
            var ontlist = this.ontlist;
            for ( var i = 0; i < ontlist.length; i++ ){
                if( ontlist[i].name == path ){  //选中状态的时候
                    ontlist[i].is_x != e;
                    ontlist[i].is_x = !e;
                }else{
                     ontlist[i].is_x = e;   //没有选中就是初始状态
                }
                   this.ontlist = ontlist;
            }
            this.$router.push({
                path:path,
            })
        }
    }
}
</script>
<style scoped>

.flex {
    display: flex;
    display: -webkit-flex;
}
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 999;
}
.navbar img {
    width: 0.72rem;
    height: 0.72rem;
}
.navbar-img .box-img , .navbar-img .box-img1 , .navbar-img .box-img3 , .navbar-img .box-img4{
    width: 0.72rem;
    height: 0.72rem;
    background-position: center center;
    background-size: 0.72rem 0.72rem;
    background-repeat:  no-repeat;
}
.navbar .li-cont .box-img{

    background-image: url('~@/assets/images/icon__home@2x.png');

}
.navbar .li-active .box-img{
    background-image: url('~@/assets/images/icon_home1_n@2x.png');

}
.navbar .li-cont .box-img1{
background-image: url('~@/assets/images/icon_guan.png');
   
}
.navbar .li-active .box-img1{
     background-image: url('~@/assets/images/icon_guan.png');
}
.navbar .li-cont .box-img2{
    
    margin-top: -0.7rem;
    width: 1.98rem;
    height: 1.98rem;
    background: url('~@/assets/images/iconjiahao.png') no-repeat;
    background-position: center center;
    background-size: 1.98rem auto;
}
.navbar .li-cont .box-img3{
        background-image: url('~@/assets/images/icon_q1.png');
}
.navbar .li-active .box-img3{
    background-image: url('~@/assets/images/icon_q.png');

}
.navbar .li-cont .box-img4{
   
background-image: url('~@/assets/images/icon_my.png');
}
.navbar .li-active .box-img4{
     background-image: url('~@/assets/images/icon_my1.png');
}

</style>