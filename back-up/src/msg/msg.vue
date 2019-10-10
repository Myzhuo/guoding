<template>
  <div class="app-msg"
       v-if="isShow"
       :class="{'info': type=== 'info','success': type=== 'success','wraning': type=== 'wraning','danger': type=== 'danger'}">{{text}}</div>
</template>
<style scoped>
.app-msg {
  position: fixed;
  left: 50%;
  top: 50%;
  background: #ccc;
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.info {
  background: #00aaee;
}
.success {
  background: rgba(0, 0, 0,.5);
}
.wraning {
  background: pink;
}
.danger {
  background: #ee000c;
}
</style>
