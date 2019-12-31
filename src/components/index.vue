<template>
  <div class="fx-factory">
    <div class="step-header">
      <div class="btns-wrapper">
        <div class="btn-pane">
          <div class="flow-version flow_switch">
            <div class="version-title"
                tabindex="-1"
                @click="showFlowVersionSelection = true"
                @blur="showFlowVersionSelection = false">
              <span class="version-name version-trigger">流程版本</span>
              <span class="version-num version-trigger">(V7)</span>
              <span class="version-type version-current">启用中</span>
              <i class="icon-angledown version-trigger"></i>
            </div>
          </div>
          <div class="flow-btn x-btn style-border-green flow-save-btn">
            <span>保存</span>
          </div>
        </div>
      </div>
      <flow-version-selection v-if="showFlowVersionSelection"></flow-version-selection>
    </div>
    <div class="config-pane">
      <g-canvas></g-canvas>
      <g-properties></g-properties>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/style.css'
import '@/assets/styles/form.css'
import '@/assets/styles/header.css'
import Canvas from './canvas/index'
import Properties from './properties/index'
import VersionSelection from './header/versionSelection'
export default {
  name: 'index',
  components: {
    'flow-version-selection': VersionSelection,
    'g-canvas': Canvas,
    'g-properties': Properties
  },
  data () {
    return {
      showFlowVersionSelection: false
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
