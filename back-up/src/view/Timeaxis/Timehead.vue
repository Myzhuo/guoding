<template>
     <div class="time_out">
		<h1>还在开发中。。</h1>
     </div>
</template>
<script>
export default {
    name:'TimeAxis',

}
</script>
<style scoped>
.time h2{
	color:#FF6600;
	margin: 20px auto 30px auto;
}
.time-line{
	position: relative;
	width:300px;
	margin:0 auto;
}
.time-line-div{
	position:relative;
	min-height:85px;
}
.time-line-div>p:nth-child(1){
	position: absolute;
	left:0;
	width:100px;
}
.time-line-div>p:nth-child(2){
	position:absolute;
	left: 100px;
	width:15px;
	height:15px;
	top:10px;
	background:#5CB85C;
	border-radius: 50%;
	z-index: 10
}
.time-line-div>p:nth-child(3){
	position:absolute;
	left: 130px;
	padding: 10px;
	background: #317EF3;
	font-size:.8rem;
	color:#fff;
	border-radius: 10px;
}
.img-dotted{
	position:absolute;
	width:20px;
	height:100%;
	top:0;
	z-index: 1;
	background:url('/static/images/vue/dotted.png');
}
.time-line-detail>p{
	margin-left: 30px;
	margin-bottom: 10px;
}
</style>