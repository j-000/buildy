<template>
  <div style="position: relative;">
    <img v-if="headerImg" :src="headerImg.src" :alt="headerImg.alt">
    <img v-else src="https://wools.joalex.dev/BT5L8" alt="">    
    <div id="omg_overlay" class="">
      <h1 :style="'font-size:' + text.msgH1.fontSize + '%!important;'">
      {{text.msgH1.text}}
      </h1>
      <p class="mt-5" :style="'font-size:' + text.msgP.fontSize + '%!important;'">{{text.msgP.text}}</p>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'EditorHeader',
  data(){
    return {

    }
  },
  computed: {
    ...mapState({
      headerImg: state => state.data.header.image,
      text: state => state.data.text
    })
  }
}
</script>

<style>
#omg_overlay{
  position: absolute;
  top: 25%;
  left: 20px;
  color: white;
}
</style>