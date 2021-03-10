<template>
  <div class="row text-left">
    <div id="sidenav-col" class="border col-md-3">
      <SideNav />
    </div>
    <div class="border col-md bg-light">
      <Content />
    </div>
  </div>
</template>

<script>
import SideNav from '../components/SideNav'
import Content from '../components/Content'

export default {
  name: 'Home',
  data(){
    return {
    }
  },
  components: {
    SideNav,
    Content
  }
}
</script>

<style>
#sidenav-col{
  box-shadow: rgb(0 0 0 / 40%) 0px 0px 8px;
  min-width: 400px!important;
}
</style>