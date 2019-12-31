<template>
  <div class="x-window-mask light modal scrollable fadein" style="z-index: 8007;" v-if="renderDialog">
    <div class="x-dialog" style="width: 610px;">
      <div class="dialog-header">
        <span class="title">部门成员列表</span>
        <i class="icon-close-normal" @click="handleCloseDialog"></i>
      </div>
      <div class="dialog-body has-padding has-footer">
        <div class="x-layout-table">
          <div class="x-layout-table-row">
            <div class="x-layout-table-item base_select member_select" widgetname="memberSelect" style="width: 570px; height: 450px;">
              <ul class="select-list">
                <li class="select-item" v-for="(item, index) in approverList" :key="index">
                  <i class="select-icon icon-member-normal"></i>
                  <span>审批人{{approverList[index]}}</span>
                  <span class="remove-btn" @click="removeApprover(index)">
                    <i class="icon-close-normal"></i>
                  </span>
                </li>
              </ul>
              <div class="select-menu">
                <i class="icon-search"></i>
                <div class="search-input">
                  <input><i class="icon-search"></i>
                  <i class="btn-close icon-close-normal"></i>
                </div>
                <div class="select-btn" ref="department" role="department" @click="selectDepartment">组织架构</div>
                <div class="select-btn" ref="role" role="role" @click="selectRole">角色</div>
                <div class="select-btn" ref="member" role="member" @click="selectMember">成员</div>
                <div class="select-btn" ref="dynamic" role="dynamic" @click="selectDynamic">动态负责人</div>
              </div>
              <div class="select-pane">
                <div class="depart-pane" v-if="showDepartment">
                  <div class="empty-tip-pane">
                    <p class="empty-tip-text">没有部门</p>
                    <p class="empty-tip-text">请到通讯录中添加或同步</p>
                  </div>
                </div>
                <div class="role-pane" v-if="showRole">
                  <ul class="role-list"></ul>
                </div>
                <div class="member-pane has-depart-tree" v-if="showMember">
                  <ul class="select-member"></ul>
                </div>
                <div class="dynamic-pane" v-if="showDynamic">
                  <ul class="dynamic-menu">
                    <li data-type="creator" class="current-select">流程发起人</li>
                    <li data-type="user">成员字段</li>
                    <li data-type="deptManager">部门主管</li>
                  </ul>
                  <ul class="select-dynamic">
                    <li>
                      <span>流程发起人</span>
                      <div class="select-check x-check">
                        <i class="icon-blank"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-footer">
        <div class="dialog-btn-row">
          <div class="dialog-btn cancel-btn x-btn style-white" @click="handleCloseDialog" widgetname="confirmBtnCancel" style="height: 32px; line-height: 30px;">
            <span>取消</span>
          </div>
          <div class="dialog-btn ok-btn x-btn style-green" @click="handleSaveAndCloseDialog" widgetname="confirmBtnOK" style="height: 32px; line-height: 30px;">
            <span>确定</span>
          </div>
        </div>
        <div class="footer-left">
          <div class="x-btn btn-teammanage style-white" style="width: 100px; height: 32px; line-height: 30px;">
            <span>通讯录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'
export default {
  props: [
    'showApproverDialog'
  ],
  data () {
    return {
      approverList: [
        'a',
        'b',
        'c'
      ]
    }
  },
  computed: {
    ...mapState([
      'showDepartment',
      'showRole',
      'showMember',
      'showDynamic'
    ]),
    renderDialog: {
      get () {
        return this.showApproverDialog
      },
      set (value) {
        console.log(value)
        return value
      }
    },
    checkSelect (ele) {
      if (ele.classList.contains('select')) {
        return true
      } else {
        ele.className += ' select'
        return false
      }
    }
  },
  methods: {
    handleCloseDialog () {
      this.$emit('closeApproverDialog', true)
    },
    removeApprover (index) {
      this.approverList.splice(index, 1)
    },
    selectDepartment (e) {
      store.commit('setShowDepartment', true)
      store.commit('setShowRole', false)
      store.commit('setShowMember', false)
      store.commit('setShowDynamic', false)
    },
    selectRole (e) {
      store.commit('setShowDepartment', false)
      store.commit('setShowRole', true)
      store.commit('setShowMember', false)
      store.commit('setShowDynamic', false)
      console.log('切换至角色')
    },
    selectMember (e) {
      store.commit('setShowDepartment', false)
      store.commit('setShowRole', false)
      store.commit('setShowMember', true)
      store.commit('setShowDynamic', false)
      console.log('切换至成员')
    },
    selectDynamic (e) {
      store.commit('setShowDepartment', false)
      store.commit('setShowRole', false)
      store.commit('setShowMember', false)
      store.commit('setShowDynamic', true)
      console.log('切换至动态负责人')
    },
    handleSaveAndCloseDialog () {
      console.log('保存数据并退出')
      this.$emit('closeApproverDialog', true)
    }
  },
  watch: {
    showDepartment (val) {
      if (!val) {
        const departmentTab = this.$refs.department
        const className = departmentTab.className.replace('selected', '')
        departmentTab.className = className
      } else {
        const departmentTab = this.$refs.department
        console.log(departmentTab.className)
        departmentTab.className += ' selected'
      }
    },
    showRole (val) {
      if (!val) {
        const roleTab = this.$refs.role
        const className = roleTab.className.replace('selected', '')
        roleTab.className = className
      } else {
        const roleTab = this.$refs.role
        roleTab.className += ' selected'
      }
    },
    showMember (val) {
      if (!val) {
        const memberTab = this.$refs.member
        const className = memberTab.className.replace('selected', '')
        memberTab.className = className
      } else {
        const memberTab = this.$refs.member
        memberTab.className += ' selected'
      }
    },
    showDynamic (val) {
      if (!val) {
        const dynamicTab = this.$refs.dynamic
        const className = dynamicTab.className.replace('selected', '')
        dynamicTab.className = className
      } else {
        const dynamicTab = this.$refs.dynamic
        dynamicTab.className += ' selected'
      }
    }
  }
}
</script>
