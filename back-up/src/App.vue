<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
    <Footer v-if="Hide != 'OK'"/>
  </div>
</template>

<script>
import Footer  from './components/footer'
export default {
  name: 'App',
  components:{
    Footer
  },
  provide () {
    return {
      reload:this.reload
    }
  },
   data () {
    return {
        isRouterAlive:true,
        isrName:this.$rName,
        Hide:'OK'
      } 
  },
  created(){   
     
     var t =  setInterval(() => {
        var Hide = localStorage.getItem('Hide');
       this.Hide = Hide;
     }, 300);
  },
   methods:{
    reload () {
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive =true;
      })
    }
  }
  
}
 
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: .35rem;
  background: #f8f9fa;
}
</style>
