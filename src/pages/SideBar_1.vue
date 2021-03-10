<template>
  <div id="sidenav">
      <div id="toolkit">
        <h3>Create your website</h3>
        <p>Let's get you started with the basics.</p>
        <div>
          <span class="custom-label">Brand</span>
          <input v-model="content.brandName" type="text" class="form-control">
          <small class="text-muted">This is going to be your website header.</small>
        </div>
        <div>
          <span class="custom-label">Navigation Pages</span>
          <input @change="add_navigation_pages" type="text" class="form-control">
          <small class="text-muted">Separate each page by a space and press enter. </small>
          <small class="text-muted">We recommend at most 5 pages.</small>
        </div>
        <div>
          <span class="custom-label">Quick Contact</span>
          <input v-model="content.quickContact" type="text" class="form-control">
          <small>This can either be an email or a phone number.</small>
        </div>
        <div>
          <span class="custom-label">Nav Background Color</span>
          <select v-model="content.background" class="form-control" aria-label="Default select example">
            <option disabled selected>Select a color</option>
            <option value="bg-primary">Primary</option>
            <option value="bg-secondary">Secondary</option>
            <option value="bg-success">Success</option>
            <option value="bg-danger">Danger</option>
            <option value="bg-warning">Warning</option>
            <option value="bg-info">Info</option>
            <option value="bg-light">Light</option>
            <option value="bg-dark">Dark</option>
          </select>
          <small>Mix and match for multiple options.</small>
        </div>
        <div>
          <span class="custom-label">Nav Theme</span>
          <select v-model="content.maincolor" class="form-control" aria-label="Default select example">
            <option disabled selected>Select a theme</option>
            <option value="navbar-light">Dark</option>
            <option value="navbar-dark">Light</option>
          </select>
        </div>
      </div>
      <div class="text-center">
        <router-link class="btn btn-success" :to="{name: 'page_2'}">Continue</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SideBar_1',
  data(){
    return {
      content: {
        brandName: '',
        pages: [],
        maincolor: '',
        background: '',
        quickContact: ''
      }
    }
  },
  created(){
    if(this.$store.state.data.navbar != this.content){
      this.content = this.$store.state.data.navbar;
    }
  },
  methods:{
    add_navigation_pages(e){
      this.content.pages = e.target.value.split(' ');
    }
  },
  watch:{
    content: {
      deep: true,
      handler(){
        this.$store.dispatch('update_data', {navbar: {...this.content}});
      }
    }
  }
}
</script>

<style>

</style>