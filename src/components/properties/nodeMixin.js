import store from '@/store'
export const nodeMixin = {
  data () {
    return {
      showApproverDialog: false,
      principalList: [
        'a',
        'b',
        'c'
      ],
      selectBaseAttr: 'selected',
      selectGradeAttr: '',
      selectCC: ''
    }
  },
  methods: {
    handleShowApproverDialog () {
      this.showApproverDialog = true
    },
    handleCheckCC () {
      if (!this.selectCC) {
        this.selectCC = 'select'
      } else {
        this.selectCC = ''
      }
    },
    handleShowBaseProperties () {
      store.commit('setShowMoreProperties', false)
      this.selectGradeAttr = ''
      this.selectBaseAttr = 'selected'
    },
    handleShowMoreProperties () {
      store.commit('setShowMoreProperties', true)
      this.selectGradeAttr = 'selected'
      this.selectBaseAttr = ''
    },
    handleCloseDialog (val) {
      console.log(val) // 关闭时将审批者信息发送回来
      this.showApproverDialog = false
    },
    handleCheckSelectAll (index) {
      // 全选点击事件
      if (this.selectAllList[index].selected) {
        this.selectAllList[index].selected = ''
        for (let i = 0; i < this.fieldList.length; i++) {
          this.fieldList[i].limitList[index].selected = ''
        }
      } else {
        this.selectAllList[index].selected = 'select'
        if (index === 1) {
          for (let i = 0; i < this.fieldList.length; i++) {
            this.fieldList[i].limitList[index].selected = 'select'
            this.fieldList[i].limitList[0].selected = 'select'
          }
        } else {
          for (let i = 0; i < this.fieldList.length; i++) {
            this.fieldList[i].limitList[index].selected = 'select'
          }
        }
      }
    },
    handleCheckLimit (index, i) {
      // 每一个字段权限的点击事件，保存时将整个fieldList提交
      const isSlected = this.fieldList[index].limitList[i].selected
      if (!isSlected) {
        this.fieldList[index].limitList[i].selected = 'select'
      } else {
        this.fieldList[index].limitList[i].selected = ''
      }
      console.log(this.fieldList)
    },
    editNodeOperation (index) {
      this.showOperationMessage = true
      this.nodeOperationWrapper = this.nodeOperationList[index]
      console.log(this.nodeOperationList[index])
    },
    handleToggleStatus () {
      if (this.openBtnLable === '关') {
        this.openBtnLable = '开'
        this.switchState = 'on'
      } else {
        this.openBtnLable = '关'
        this.switchState = 'off'
      }
    },
    handleSaveOperationStatus () {
      console.log('点击完成')
      this.showOperationMessage = false
    }
  }
}
