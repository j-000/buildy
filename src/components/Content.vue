<template>
  <div>
    <div id="website-content" class="m-5 border" :style="'font-family:' + fontFamily + ';'">
      <EditorNavBar />
      <EditorHeader />
    </div>
  </div>
</template>

<script>
import EditorNavBar from './editor/ENavBar'
import EditorHeader from './editor/EHeader'
import {mapState} from 'vuex'

export default {
  name: 'Content',
  components:{
    EditorNavBar,
    EditorHeader
  },
  computed:{
    ...mapState({
      fontFamily: state => state.data.text.fontFamily
    })
  }
}
</script>

<style>
img{
  width: 100%;
}

#website-content{
min-height: 150vh;
background-color: white;
box-shadow: rgb(0 0 0 / 40%) 0px 0px 8px;
}
</style>