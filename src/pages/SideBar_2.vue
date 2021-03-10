<template>
  <div>
    <div id="sidenav">
      <div id="toolkit">
        <h3>Now let's add an image</h3>
        <p class="mb-1">Add a topic and let us show you some fancy images.</p>
        <div>
          <span class="custom-label">Topic</span>
          <input v-model="header.topic" type="text" class="form-control">
          <small>What is your website about?</small>
        </div>
        <div v-if="header.topic">
          <p class="mt-3">Check out 
            <a target="_blank" :href="'https://unsplash.com/s/photos/' + header.topic ">Unsplash.com</a> 
          for a wide range of free images on <span class="bg-info pl-2 pr-2 text-white">{{header.topic}}</span>.</p>
          <p class="mt-4">Right click on the image and select "Open image in a new tab".</p>
          <p class="mb-0">Copy the URL and paste it below.</p>
          <div>
            <span class="custom-label">Main Image URL</span>
            <input v-model="header.image.src" type="text" class="form-control">
          </div>
          <div v-if="header.image.src" class="alert alert-info mt-3">
            <p class="mb-0"><strong>Pro tip!</strong><small> (Optional)</small></p>
            <p>Convert that long URL into a shorter one with our
            <a href="https://wools.joalex.dev" target="_blank">URL shorter wools</a>.</p>
          </div>
        </div>
      </div>
      <div id="action" class="text-center">
        <router-link class="btn btn-outline-secondary" :to="{name: 'page_1'}">Previous</router-link>
        <router-link class="btn btn-success ml-5" :to="{name: 'page_3'}">Continue</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar_2',
  data(){
    return {
      header: {
        topic: '',
        image: {
          src: '',
          alt: ''
        }
      }
    }
  },
  created(){
    if(this.$store.state.data.header != this.header){
      this.header = this.$store.state.data.header;
    }
  },
  watch:{
    header: {
      deep: true,
      handler(){
        this.$store.dispatch('update_data', {header: this.header});
      }
    }
  }
}
</script>

<style>

</style>