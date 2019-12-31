<template>
  <div>
    <div class="menu-item style-dark disable">
      <i class="icon-flow-menu-undo"></i>
    </div>
    <div class="menu-item style-dark disable">
      <i class="icon-flow-menu-redo"></i>
    </div>
    <div class="menu-line"></div>
    <div class="menu-item menu-move" @mousedown="handleCreateFlowNode" @mouseup="handleAddFlowNode">
      <i class="icon-flow-node green"></i>
      <span>流程节点</span>
    </div>
    <div class="menu-item menu-move" @mousedown="handleAddCcNode">
      <i class="icon-release blue"></i>
      <span>抄送节点</span>
    </div>
    <div class="menu-line"></div>
    <div class="menu-item">
      <i class="icon-flow-menu-vertical"></i>
      <span>水平等距</span>
    </div>
    <div class="menu-item">
      <i class="icon-flow-menu-horizontal"></i>
      <span>垂直等距</span>
    </div>
    <div class="menu-line"></div>
    <div class="menu-item">
      <i class="icon-trasho"></i>
    </div>
    <div class="menu-item for-right size-large" @click="toggleNavigater">
      <i class="icon-widget-location"></i>
    </div>
    <div class="menu-btn-wrapper for-right">
      <div class="menu-btn">
        <i class="icon-minus"></i>
      </div>
      <div class="menu-text">100%</div>
      <div class="menu-btn">
        <i class="icon-add"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import store from '@/store'
export default {
  data () {
    return {
      ccNodeComponent: {},
      flowNodeComponent: {}
    }
  },
  computed: {
    ...mapState([
      'nodeName',
      'showNavigater'
    ])
  },
  methods: {
    toggleNavigater () {
      store.commit('setShowNavigater', !this.showNavigater)
    },
    handleCreateFlowNode () {
      const FlowNode = Vue.extend({
        template: `
        <div class="flow_node flow-selector"
             title="流程节点"
             @mouseover="handleMouseover"
             @mousedown="move"
             style="z-index: 3333; left: 130px; top: 75px;">
          <i class="node-icon icon-flow-node green"></i>
          <div class="node-name"
               style="width: 160px; height: 40px;"
               ref="newNodeName"
               @click="handleSelectNode">流程节点</div>
          <i class="node-menu icon-flow-other" @click="handleOperationNode"></i>
          <div class="node-anchor input output" style="left: 80px; top: 0px;" @mousedown="handleDrawLine"></div>
          <div class="node-anchor input output" style="left: 160px; top: 20px;" @mousedown="handleDrawLine"></div>
          <div class="node-anchor input output" style="left: 80px; top: 40px;" @mousedown="handleDrawLine"></div>
          <div class="node-anchor input output" style="left: 0px; top: 20px;" @mousedown="handleDrawLine"></div>
        </div>`,
        data () {
          return {
            nodeLeft: '',
            nodeTop: ''
          }
        },
        methods: {
          handleOperationNode () {
            console.log('handle')
          },
          handleDrawLine (e) {
            console.log(e.currentTarget.style.left)
          },
          handleSelectNode () {
            const nodeName = this.$refs.newNodeName.innerHTML
            store.commit('setNodeName', nodeName)
            store.commit('selectNode', true)
            store.commit('setShowEmptyNode', false)
            store.commit('setShowNodeDetail', true)
            store.commit('setShowFlowDetail', false)
            store.commit('setShowMoreProperties', false)
          },
          handleMouseover (e) {
            this.nodeLeft = e.currentTarget.left
            this.nodeTop = e.currentTarget.top
            console.log(e.currentTarget.offsetLeft)
          },
          move (e) {
            console.log('moved')
            let oDiv = e.currentTarget
            let diffX = e.clientX - oDiv.offsetLeft
            let diffY = e.clientY - oDiv.offsetTop
            document.onmousemove = (e) => {
              let moveX = e.clientX - diffX
              let moveY = e.clientY - diffY
              oDiv.style.left = moveX + 'px'
              oDiv.style.top = moveY + 'px'
            }
            document.onmouseup = (e) => {
              document.onmousemove = null
              document.onmouseup = null
            }
          },
          remove (e) {
            console.log('removed')
          }
        }
      })
      this.flowNodeComponent = new FlowNode().$mount()
    },
    handleAddFlowNode () {
      const nodeLeft = this.flowNodeComponent.nodeLeft
      const nodeTop = this.flowNodeComponent.nodeTop
      console.log('left::::', this.flowNodeComponent.nodeLeft)
      if (nodeLeft && nodeTop >= '100') {
        document.body.appendChild(this.flowNodeComponent.$el)
      }
    },
    handleAddCcNode () {
      const CcNode = Vue.extend({
        template: `
        <div class="flow_node flow-selector menu"
             title="抄送节点"
             style="z-index: 3333; left: 20px; top: 100px;"
             @mousedown="move">
          <i class="node-icon icon-release blue"></i>
          <div class="node-name"
               ref="newCcNodeName"
               style="width: 160px; height: 40px;">抄送节点</div>
          <i class="node-menu icon-flow-other"></i>
        </div>`,
        methods: {
          move (e) {
            console.log('moved')
            let oDiv = e.currentTarget
            let diffX = e.clientX - oDiv.offsetLeft
            let diffY = e.clientY - oDiv.offsetTop
            document.onmousemove = (e) => {
              let moveX = e.clientX - diffX
              let moveY = e.clientY - diffY
              oDiv.style.left = moveX + 'px'
              oDiv.style.top = moveY + 'px'
            }
            document.onmouseup = (e) => {
              document.onmousemove = null
              document.onmouseup = null
            }
          }
        }
      })
      const ccNodeComponent = new CcNode().$mount()
      document.body.appendChild(ccNodeComponent.$el)
    }
  }
}
</script>
