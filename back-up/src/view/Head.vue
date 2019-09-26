<template>
             <div class="toubu s-df s-hao" id="ssuo">
                <img src="@/assets/images/home_guoding1.png" alt="" class="float-left">
                <div class="s-flex s-df s-hao icon-input1 ">
                        <button class="box-image "></button>
                        <input type="text" class="input-line s-flex" placeholder="请输入想搜索的内容">
                </div>
            </div>   
</template>
<style scoped>
.toubu{
    height: 1.1891891891891893rem;
    padding: 0 0.40540540540540543rem;
    overflow: hidden;
    background: #fff;
    /* position: fixed; */
    width: 100%;

}
.toubu img{
        width: 1.05rem;
         height: 0.69rem;
        margin: 0 0.2972972972972973rem 0 0.13513513513513514rem;
        background-size: 0.9459459459459459rem auto;
        background-position: center center;
        display: inline;
}
 .s-df{ display: -webkit-box; display: box; display: -webkit-flex; display: flex; }
  .icon-input1{
           width: 80%; height: 0.8648648648648649rem; line-height: 0.8648648648648649rem; overflow: hidden;
            }
 .s-hao{ -webkit-box-align: center; box-align: center; -webkit-align-items: center; align-items: center; }
  .icon-input1 .box-image{
        outline: none;
        border: none;
        background: none;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
        width: 0.54rem;
        height: 0.54rem;
        background: url("~@/assets/images/qdsuos.png") no-repeat;
        background-position: center center;
        background-size: 0.43243243243243246rem auto;

        }
     .icon-input1 input{
        width: 100%;
        border: none;
        background: #f4f4f4;
        outline: none;
     }   
</style>