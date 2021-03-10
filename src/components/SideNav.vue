<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data(){
    return {
      
    }
  },
}
</script>

<style>
#sidenav{
  padding: 50px 20px 0 20px;
  /* position: fixed; */
}
#toolkit{
  width: 320px;
  min-height: 80vh;
}
.custom-label{
  position: relative;
  top: 11px;
  left: 10px;
  background-color: white;
  font-size: 10pt;
}
</style>