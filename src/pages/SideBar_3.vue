<template>
  <div>
    <div id="sidenav">
      <div id="toolkit">
        <h3>Lets add some text</h3>
        <p class="mb-1">Short and to the point is best.</p>
        <div>
          <span class="custom-label">Message h1</span>
          <input v-model="text.msgH1.text" type="text" class="form-control">
          <small>First thing your users will read. Make it stand out.</small>
          <span class="custom-label">H1 Font Size</span>
          <input v-model="text.msgH1.fontSize" type="number" min="20" class="form-control">
        </div>
        <div>
          <span class="custom-label">Message p</span>
          <textarea v-model="text.msgP.text" type="text" class="form-control" rows="4"></textarea>
          <span class="custom-label">P Font Size</span>
          <input v-model="text.msgP.fontSize" type="number" min="10" class="form-control">
        </div>
        <div>
          <span class="custom-label">Font Family</span>
          <select v-model="text.fontFamily" class="form-control" aria-label="Default select example">
            <option disabled selected>Select a font</option>
            <optgroup label="Browser Safe Fonts">
              <option value="arial">Arial</option>
              <option value="cursive">Cursive</option>
              <option value="'Sans Serif'">Sans Serif</option>
              <option value="verdana">Verdana</option>
              <option value="helvetica">Helvetica</option>
              <option value="'Courier New'">Courier New</option>
            </optgroup>
          </select>
          <small>This applies to the whole website.</small>
          <div class="mb-1"></div>
          <span class="custom-label">Custom Font <small>(Optional)</small></span>
          <input v-model="text.msgH1.text" type="text" class="form-control">
          <p class="mt-2">Check out <a href="https://fonts.google.com/">Google Fonts</a> for a wider range of fonts.</p>
          <div class="alert alert-warning">
            We are in the early stages of development. <br><br> When using a <strong>Google Font</strong> our 
            visualizer will default to Arial, but rest assured your Google Font will be the selected one.
          </div>
        </div>
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
  name: 'SideBar_3',
  data(){
    return {
      text: {
        msgH1: {
          text: '',
          fontSize: '',
          color: ''
        },
        msgP: {
          text: '',
          fontSize: '',
          color: ''
        },
        fontFamily: ''
      }
    }
  },
  created(){
    if(this.$store.state.data.text != this.text){
      this.text = this.$store.state.data.text;
    }
  },
  watch:{
    text: {
      deep: true,
      handler(){
        this.$store.dispatch('update_data', {text: this.text});
      }
    }
  },
}
</script>

<style>

</style>