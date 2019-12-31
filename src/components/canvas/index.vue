<template>
  <div class="canvas-container">
    <div class="chart-container has-menu">
      <flow-node></flow-node>
    </div>
    <div class="chart-menu flow-menu">
      <btn-menu></btn-menu>
    </div>
    <navigater v-if="showNavigater"></navigater>
  </div>
</template>

<script>
import '@/assets/styles/canvas.css'
import flowNode from './flowChart'
import btnMenu from './btnMenu'
import Navigater from './navigater'
import { mapState } from 'vuex'
export default {
  components: {
    'flow-node': flowNode,
    'btn-menu': btnMenu,
    'navigater': Navigater
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'showNavigater'
    ])
  }
}
</script>

<style>
.canvas-container {
  width: calc(100% - 300px);
  margin-right: 300px;
  height: calc(100vh - 50px);
  position: relative;
}
</style>
