<template>
  <div class="chart-content"
       ref="canvas-content"
       tabindex="-1"
       style="width: 852px; height: 430px;">
    <start-node :contain="contain" :start-node-info="startNode"></start-node>
    <flow-node v-for="(node, index) in nodeList"
               :key="index"
               :contain="contain"
               :node-info="node"></flow-node>
    <cc-node :contain="contain" :cc-node-info="ccNode"></cc-node>
    <end-node :contain="contain" :end-node-info="endNode"></end-node>
    <svg @click="handleCancelSelectNode">
      <flow-chart-line v-for="(line, index) in lineList"
                       :key="index"
                       :line-position="line"
                       :contain="contain"></flow-chart-line>
    </svg>
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'
import FlowNode from './node/flow-node'
import CcNode from './node/cc-node'
import StartNode from './node/start-node'
import EndNode from './node/end-node'
import Line from './line'
export default {
  components: {
    'flow-node': FlowNode,
    'cc-node': CcNode,
    'start-node': StartNode,
    'end-node': EndNode,
    'flow-chart-line': Line
  },
  data () {
    return {
      showOperation: false,
      startNode: {
        position: 'top: 49px; left: 410px;'
      },
      endNode: {
        position: 'top: 350px; left: 410px;'
      },
      ccNode: {
        position: 'top: 480px; left: 410px;'
      },
      nodeList: [{
        name: '流程节点1',
        position: 'top: 25px; left: 28px;',
        propertiesList: []
      }, {
        name: '流程节点2',
        position: 'top: 75px; left: 28px;',
        propertiesList: []
      }, {
        name: '流程节点3',
        position: 'top: 125px; left: 28px;',
        propertiesList: []
      }, {
        name: '流程节点',
        position: 'top: 191px; left: 410px;',
        propertiesList: []
      }],
      lineList: [{
        back: 'M490,89 L490,191',
        mainLine: 'M490,89 L490,191',
        left: 'M490,191 L484,185',
        right: 'M490,191 L496,185'
      }, {
        back: 'M490,231 L490,350',
        mainLine: 'M490,231 L490,350',
        left: 'M490,350 L484,344',
        right: 'M490,350 L496,344'
      }],
      contain: {
        xx: 852,
        yy: 800
      }
    }
  },
  computed: {
    ...mapState([
      'nodeName'
    ])
  },
  created () {
    window.flowNode = this
  },
  methods: {
    handleCancelSelectNode () {
      store.commit('selectNode', false)
      store.commit('setShowEmptyNode', false)
      store.commit('setShowNodeDetail', false)
      store.commit('setShowFlowDetail', true)
    }
  }
}
</script>
