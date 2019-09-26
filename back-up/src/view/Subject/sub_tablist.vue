<template>
        <div>
            <ul  class="nav navbar">
                <li :class="item.Isactive == true?'active':''"  v-for="(item,index) in tabList" :key="index" @click="Ontab(item.Isactive,index)"><a href="#"  > {{item.name}}</a></li>
            </ul> 
            <div class="cart" v-if="tabList != 0">
                <div class="cart_list" style="display:block;">
                        <follo-wlist :followlist="followlist"></follo-wlist>
                </div>
                 <div class="cart_list">
                           <ask :ask-data="userdata"></ask>
                </div>
                 <div class="cart_list">
                            <subjectlist :subjectList="subjectList"></subjectlist>
                            <conter :user-data="userdata"></conter>
                </div>
                 <div class="cart_list">
                         <res-ource :resource="resource"></res-ource>
                </div>
                 <div class="cart_list">
                             <ask :ask-data="userdata"></ask>
                </div>
            </div>
        </div>
</template>
<script>
 import  conter  from "../../view/conter"
 import  ask  from "../../view/ask"
 import  resOurce  from "../../view/resource"
 import  FolloWlist  from "../../view/Followlist"
 import  subjectlist  from "../../view/subject"
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions} = createNamespacedHelpers('index')
export default {
    components:{
        conter,
        ask,
        resOurce,
        FolloWlist,
        subjectlist
    },
    computed:{
        ...mapState({
            userdata:stare=>stare.userdata,
        }),
        followlist(){
            return this.$store.state.index.followlist
        },
        resource(){
            return  this.$store.state.index.resource
        },
        subjectList(){
            return  this.$store.state.index.Popular
        }
    },
    props:{ 
        tabList:{
            type:Array,
            default:()=>[]
        }
    },
    data () {
        return{}
    },
    created(){
    },
    methods:{
         ...mapActions([
             'Restab'
         ]),
        
        Ontab(a,b){
            var tabarr = document.querySelectorAll('.cart_list'),
            tablen = tabarr.length;
            var data = {
                tablen:tablen,
                tabarr:tabarr,
                b:b
            }
            this.Restab(data);
        }
    },
    watch:{
        tabList(val){
            console.log(val)
        }
    }
}
</script>
<style scoped>
 
 .nav .active{
   color: #359f9d;
    border-bottom: 2px solid #359f9d;
    padding-bottom: 0.2rem;
    padding-top: 0.2rem;
    font-weight: 600;
    
}
.nav .active a{
   color: #359f9d;
}
 .nav  a{
    color: #999999;
    padding-top: 0.2rem;
}
.cart_list{
    display: none;
}
</style>