<template>
    <div class="tab-content  justify-content-center align-items-center">
        <div class="tupLi" v-for="(i,j) in a" :key="j">
            <div class="tup huixian ">
                    <div class="flex  aaa s-df s-hao">
                    <div class="yanxiana">
                    <img class="img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="left lefta s-flex">
                    <span class="daxie">美女</span>
                    </div>
                    <div class=" right    exper-pandd">
                    <div class="exper-dian1 flex float-right  mydz">
                    <!-- <span class="dz_active "  onclick="dainzs(id)"></span> -->
                    <span :class="i.dz==1?'dz_active':'home_dz' " @click="onshow(1,j,i.dz)" ></span>
                    <span class="pandd1"  >{{i.num}}</span>
                    </div>
                    <div class="exper-dian1 flex float-right  mydz">
                    <span class="mypl"   @click="onshow(2,j)" ></span>
                    <span class="pandd1"  > 21</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="leftwenzi ask-p flex" >
            <p class="pwenzi flex">我是内容内容</p>
         </div>
          <div class="leftwenzi ask-p flex exper-huifu padding" >
                  <p class="pwenzi flex exper-wa">
                        abc: vant真不错. 
                   </p>
            </div>
        <div class="leftwenzi ask-p flex" >
        <p class=" flex exper-time">2019/08/09</p>
        </div>
        <div class="ask-xixian"></div>
        </div>
        
                    
    </div>
</template>
<script>
export default {
    data(){
        
        return{
            a :[
            {
                a:1,
                num:18,
                dz:0
            },
            {
                b:2,
                num:23,
                dz:0
            }
        ],
        }
   
        
    },
    methods:{
      onshow(i,j,k){
          switch(i){
              case 1:
                this.a[j].dz != k;
                this.a[j].dz =!k; 
                if(this.a[j].dz == 0){
                     this.a[j].num -=1;
                }else{
                    this.a[j].num +=1;
                }
              break;
              case 2:
              this.$msg({
                  text:'作者很懒，还没有开发这个哟.',
                  type:'success'
              })
              break;
          }
      }  
    }
}
</script>
<style scoped>
.ask-content .zhgongti .tab-content .exper-huifu .exper-wa{
    padding: 0;
}
</style>