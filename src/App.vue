<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    // start store of app when created with that of localStorage
    var state = JSON.parse(localStorage.getItem('store'))
    if (state){
      this.$store.dispatch('update_state_from_localstorage', state);
    }
  }
}
</script>

<style>
body{
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
