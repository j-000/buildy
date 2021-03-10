<template>
  <nav :class="'navbar navbar-expand-lg ' + navbar_class">
    <a class="navbar-brand" href="#">{{contentdata.navbar.brandName || 'Your Brand'}}</a>
    <button class="navbar-toggler" 
    type="button"
    data-target="#navbarText" 
    aria-controls="#navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li v-for="pageName in contentdata.navbar.pages" :key="pageName" class="nav-item">
          <a href="#" class="nav-link">{{ pageName }}</a>
        </li>
      </ul>
      <span class="navbar-text">
        {{ contentdata.navbar.quickContact }}
      </span>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'EditorNavBar',
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      contentdata: state => state.data
    }),
    navbar_class(){
      let main_color = this.contentdata.navbar.maincolor;
      let bg_color = this.contentdata.navbar.background;
      
      if(main_color || bg_color){
        if(!main_color){
          return 'navbar-light ' + bg_color;
        }
        if(!bg_color){
          return main_color + ' bg-light';
        }else{
          return main_color + ' ' + bg_color;
        }
      }else{
        return 'navbar-light bg-light';
      }
    }
  }
  
}
</script>

<style>

</style>