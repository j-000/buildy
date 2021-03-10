<template>
  <div>
    <div id="sidenav">
      <div id="toolkit">
        <h3>Lets add some text</h3>
        <p class="mb-1">Short and to the point is best.</p>
        
      </div>
      <div id="action" class="text-center">
        <router-link class="btn btn-outline-secondary" :to="{name: 'page_2'}">Previous</router-link>
        <router-link class="btn btn-success ml-5" :to="{name: 'page_4'}">Continue</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar_4',
  data(){
    return {
      
    }
  },
  // created(){
  //   if(this.$store.state.data.text != this.text){
  //     this.text = this.$store.state.data.text;
  //   }
  // },
  // watch:{
  //   text: {
  //     deep: true,
  //     handler(){
  //       this.$store.dispatch('update_data', {text: this.text});
  //     }
  //   }
  // },
}
</script>

<style>

</style>