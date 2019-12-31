<template>
  <div>
    <div class="flow_node flow-selector menu"
         title="流程节点"
         ref="currentNode"
         v-drag="contain"
         style="width: 160px; height:40px"
         :style="nodeInfo.position"
         @click="handleSelectNode">
      <i class="node-icon icon-flow-node green"></i>
      <div class="node-name" ref="nodeName">{{ nodeInfo.name || '流程节点'}}</div>
      <i class="node-menu icon-flow-other" @click="handleOperationNode"></i>
      <div class="node-anchor input output" style="left: 80px; top: 0px;"></div>
      <div class="node-anchor input output" style="left: 160px; top: 20px;"></div>
      <div class="node-anchor input output" style="left: 80px; top: 40px;"></div>
      <div class="node-anchor input output" style="left: 0px; top: 20px;"></div>
    </div>
    <div class="x-msg-bubble info animation dock-top dock-left active"
         style="min-width: 100px; z-index: 8000; top: 220px; bottom: auto; left: 506px; zoom: 1;"
         v-if="showOperation">
      <div class="content" style="padding: 0px;">
        <div class="flow-menu-pane">
          <ul class="menu-pane">
            <li class="menu-item" role="copy">复制节点</li>
            <li class="menu-item remove" role="delete">删除节点</li>
          </ul>
        </div>
      </div>
      <div class="triangle-up" style="left: 40px;"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'
export default {
  name: 'flow-node',
  props: [
    'contain',
    'nodeInfo'
  ],
  data () {
    return {
      showOperation: false
    }
  },
  computed: {
    ...mapState([
      'nodeName'
    ])
  },
  methods: {
    handleSelectNode () {
      const nodeName = this.$refs.nodeName.innerHTML
      store.commit('setNodeName', nodeName)
      store.commit('selectNode', true)
      store.commit('setShowEmptyNode', false)
      store.commit('setShowNodeDetail', true)
      store.commit('setShowFlowDetail', false)
      store.commit('setShowMoreProperties', false)
    },
    handleOperationNode () {
      console.log(this.$refs.currentNode.left)
      this.showOperation = !this.showOperation
    }
  },
  directives: {
    drag: {
      bind: function (el, binding, vnode) {
        el.onmousedown = function (e) {
          var disx = e.clientX - el.offsetLeft
          console.log(disx)
          var disy = e.clientY - el.offsetTop
          document.onmousemove = function (e) {
            let left = e.clientX - disx
            let top = e.clientY - disy
            if (left < 0) {
              left = 0
            }
            if (top < 0) {
              top = 0
            }
            if (left > binding.value.xx - el.offsetWidth) {
              left = binding.value.xx - el.offsetWidth
            }
            if (top > binding.value.yy - el.offsetHeight) {
              top = binding.value.yy - el.offsetHeight
            }
            el.style.left = left + 'px'
            el.style.top = top + 'px'
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null
          }
        }
      }
    }
  }
}
</script>
