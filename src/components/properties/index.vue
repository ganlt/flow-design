<template>
  <div class="properties-container">
    <div class="form-flow-config">
      <div class="config-tab" :class="this.selected?'tab-select':''">
        <div id="config-node-tab" class="node-tab" @click="handleNodeClick">节点属性</div>
        <div id="config-flow-tab" class="flow-tab" @click="handleFlowClick">流程属性</div>
      </div>
      <div class="config-content flow_config" v-if="this.showEmptyNode">
        <div class="empty-message">请选择节点</div>
      </div>
      <node-properties v-if="this.showNodeDetail"></node-properties>
      <flow-properties v-if="this.showFlowDetail && !this.selected"></flow-properties>
    </div>
  </div>
</template>
<script>
import '@/assets/styles/properties.css'
import NodeProperties from './node'
import flowProperties from './flow'
import store from '@/store'
import { mapState } from 'vuex'
export default {
  components: {
    'node-properties': NodeProperties,
    'flow-properties': flowProperties
  },
  computed: {
    ...mapState([
      'nodeName',
      'showEmptyNode',
      'showNodeDetail',
      'showFlowDetail',
      'selected'
    ])
  },
  methods: {
    handleNodeClick () {
      store.commit('selectNode', true)
      store.commit('setShowEmptyNode', true)
      store.commit('setShowFlowDetail', false)
    },
    handleFlowClick () {
      store.commit('selectNode', false)
      store.commit('setShowEmptyNode', false)
      store.commit('setShowNodeDetail', false)
      store.commit('setShowFlowDetail', true)
    }
  }
}
</script>

<style>
.properties-container {
  width: 300px;
}
</style>
