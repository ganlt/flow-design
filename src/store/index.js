import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    clicked: true, // 判断是否触发点击
    selected: false, // 添加select样式，class名
    nodeName: '',
    showEmptyNode: false,
    showNodeDetail: false,
    showFlowDetail: true,
    showNavigater: true,
    showMoreProperties: false, // 显示更多属性（判断基本属性和更多属性间切换）,
    showDepartment: false,
    showRole: false,
    showMember: false,
    showDynamic: false
  },
  mutations: {
    selectNode (state, val) {
      state.selected = val
    },
    setNodeName (state, val) {
      state.nodeName = val
    },
    setShowFlowDetail (state, val) {
      state.showFlowDetail = val
    },
    setShowEmptyNode (state, val) {
      state.showEmptyNode = val
    },
    setShowNodeDetail (state, val) {
      state.showNodeDetail = val
    },
    setShowNavigater (state, val) {
      state.showNavigater = val
    },
    setShowMoreProperties (state, val) {
      state.showMoreProperties = val
    },
    setShowDepartment (state, val) {
      state.showDepartment = val
    },
    setShowRole (state, val) {
      state.showRole = val
    },
    setShowMember (state, val) {
      state.showMember = val
    },
    setShowDynamic (state, val) {
      state.showDynamic = val
    }
  }
})

export default store
