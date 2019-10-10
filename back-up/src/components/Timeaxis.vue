<template>
     <div class="time_out">
		 <div class="">
         <div class="tiem_left"></div>
         <div class="tiem_right"></div>
		 </div>
     </div>
</template>
<script>
export default {
    name:'TimeAxis',
}
</script>
<style scoped>
 .time_out{
	background: red;
	width: 100%;
 } 
 .time_out .cire{
	 width: 10px;
	 height: 10px;
	 border: 1px solid #fff;
	 border-radius: 50%;
	 display: block;
 }
 .time_out .tiem_left{
	 width: 25%;
	 background: yellow;
	 height: 7rem;
	  float: left;
 }
 .time_out .tiem_right{
	 width: 70%;
	 background: pink;
	 height: 7rem;
	  float: left;
 }
</style>