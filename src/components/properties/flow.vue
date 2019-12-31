<template>
  <div class="config-message config_pane">
    <div class="cfg_title">
      <span>流程提醒</span>
    </div>
    <div class="cfg_content x-check" @click="checkEChart">
      <i class="icon-blank"></i>
      <span>使用微信提醒节点负责人、抄送人</span>
    </div>
    <div class="cfg_content with-split-line x-check" @click="checkEMail">
      <i class="icon-blank"></i>
      <span>使用邮件提醒节点负责人、抄送人</span>
    </div>
    <div class="cfg_split"></div>
    <div class="cfg_content with-split-line x-layout-table">
      <div class="x-layout-table-row">
        <div class="x-layout-table-item x-check"
             widgetname="_widget_1558937314972"
             style="width: auto; height: 20px;"
             @click="checkUndo">
          <i class="icon-blank"></i>
          <span>流程发起后允许撤回</span>
        </div>
        <div class="x-layout-table-item tooltip_pane info"
             widgetname="_widget_1558937314973"
             style="line-height: 20px; width: 20px; height: 20px; margin-left: 0px;"
             @mousedown="handleShowUndoHelp"
             @mouseleave="handleCloseUndoHelp">
          <i class="tip-icon icon-help"></i>
        </div>
      </div>
    </div>
    <div class="cfg_split"></div>
    <div class="cfg_title">
      <span>流程日志/流转图</span>
    </div>
    <div class="cfg_content with-split-line x-layout-table" widgetname="_widget_1558937314974">
      <div class="x-layout-table-row">
        <div class="x-layout-table-item x-check"
             widgetname="_widget_1558937314975"
             style="width: auto; height: 20px;"
             @click="checkViewLog">
          <i class="icon-blank"></i>
          <span>允许查看流程日志和流转图</span>
        </div>
        <div class="x-layout-table-item tooltip_pane info"
             widgetname="_widget_1558937314976"
             style="line-height: 20px; width: 20px; height: 20px; margin-left: 0px;"
             @mousedown="handleShowLogHelp"
             @mouseleave="handleCloseLogHelp">
          <i class="tip-icon icon-help"></i>
        </div>
      </div>
    </div>
    <div class="cfg_split"></div>
    <div class="cfg_title">
      <span>版本管理</span>
    </div>
    <div class="cfg_content x-btn style-white"
         widgetname="_widget_1558937314977"
         style="height: 30px; line-height: 28px;"
         @click="manageFlowVersion">
      <span>管理流程版本</span>
    </div>
    <!-- 显示管理流程版本的对话框 -->
    <div class="x-window-mask light modal scrollable fadein" style="z-index: 8002;" v-if="showManageDialog">
      <div class="x-dialog" widgetname="_widget_1559025248763" style="width: 600px;">
        <div class="dialog-header">
          <span class="title">管理流程版本</span>
          <i class="icon-close-normal" @click="closeDialog"></i>
        </div>
        <div class="dialog-body">
          <div class="x-layout-table" widgetname="_widget_1559025248764">
            <div class="x-layout-table-row">
              <div class="x-layout-table-item flow_version" widgetname="flowVersion" style="width: 600px; height: 470px;">
                <div class="manage-pane">
                  <div class="manage-btn btn-primary x-btn style-blue" widgetname="_widget_1559025248765" style="width: 120px; height: 30px; line-height: 28px;">
                    <i class="icon-add"></i>
                    <span>添加新版本</span>
                  </div>
                </div>
                <div class="version-list">
                  <div class="version-item">
                    <div class="version-header">
                      <span class="version-name">流程版本(V7)</span>
                      <span class="version-type version-current">启用中</span>
                    </div>
                    <div class="edit-pane current">
                      <div class="edit-btn del" role="delete">
                        <span>删除</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn edit" role="edit">
                        <span>编辑</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn" role="release">
                        <i class="icon-flow-start"></i>
                        <span>启用</span>
                      </div>
                    </div>
                  </div>
                  <div class="version-item">
                    <div class="version-header">
                      <span class="version-name">流程版本(V6)</span>
                      <span class="version-type version-design">设计</span>
                    </div>
                    <div class="edit-pane">
                      <div class="edit-btn del" role="delete">
                        <span>删除</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn edit" role="edit">
                        <span>编辑</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn" role="release" @click="enableFlow">
                        <i class="icon-flow-start"></i>
                        <span>启用</span>
                      </div>
                    </div>
                  </div>
                  <div class="version-item">
                    <div class="version-header">
                      <span class="version-name">流程版本(V5)</span>
                      <span class="version-type version-design">设计</span>
                    </div>
                    <div class="edit-pane">
                      <div class="edit-btn del" role="delete">
                        <span>删除</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn edit" role="edit">
                        <span>编辑</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn" role="release">
                        <i class="icon-flow-start"></i>
                        <span>启用</span>
                      </div>
                    </div>
                  </div>
                  <div class="version-item">
                    <div class="version-header">
                      <span class="version-name">流程版本(V4)</span>
                      <span class="version-type version-design">设计</span>
                    </div>
                    <div class="edit-pane">
                      <div class="edit-btn del" role="delete">
                        <span>删除</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn edit" role="edit">
                        <span>编辑</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn" role="release">
                        <i class="icon-flow-start"></i>
                        <span>启用</span>
                      </div>
                    </div>
                  </div>
                  <div class="version-item">
                    <div class="version-header">
                      <span class="version-name">流程版本(V3)</span>
                      <span class="version-type version-design">设计</span>
                    </div>
                    <div class="edit-pane">
                      <div class="edit-btn del" role="delete">
                        <span>删除</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn edit" role="edit">
                        <span>编辑</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn" role="release">
                        <i class="icon-flow-start"></i>
                        <span>启用</span>
                      </div>
                    </div>
                  </div>
                  <div class="version-item">
                    <div class="version-header">
                      <span class="version-name">流程版本(V2)</span>
                      <span class="version-type version-design">设计</span>
                    </div>
                    <div class="edit-pane">
                      <div class="edit-btn del" role="delete">
                        <span>删除</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn edit" role="edit">
                        <span>编辑</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn" role="release">
                        <i class="icon-flow-start"></i>
                        <span>启用</span>
                      </div>
                    </div>
                  </div>
                  <div class="version-item">
                    <div class="version-header">
                      <span class="version-name">流程版本(V1)</span>
                      <span class="version-type version-history">历史</span>
                    </div>
                    <div class="edit-pane">
                      <div class="edit-btn del" role="delete">
                        <span>删除</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn edit" role="edit">
                        <span>编辑</span>
                      </div>
                      <div class="edit-btn split-line"></div>
                      <div class="edit-btn" role="release">
                        <i class="icon-flow-start"></i>
                        <span>启用</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 显示允许撤销的提示框 -->
    <div class="x-ui-popover light animation top fadein"
         style="max-width: 200px; z-index: 8006; right: 30px; top: 30px;"
         v-if="showUndoHelp">
      <div class="tooltip_popover">
        <span>选中后允许流程发起人在后续节点负责人尚未处理的情况下撤回流程</span>
      </div>
    </div>
    <!-- 显示允许查看log的提示框 -->
    <div class="x-ui-popover light animation top fadein"
         style="max-width: 150px; z-index: 8012; right: 16px; top: 120px;"
         v-if="showLogHelp">
      <div class="tooltip_popover">
        <span>开启此功能后，处理流程时可以查看流程日志和流转图。</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showManageDialog: false,
      showUndoHelp: false,
      showLogHelp: false
    }
  },
  methods: {
    handleFlowClick () {
      this.showEmptyNodeDetail = false
      document
        .getElementsByClassName('config-tab')[0]
        .setAttribute('class', 'config-tab')
    },
    checkSelectClass (ele) {
      if (!ele.classList.contains('select')) {
        console.log('add')
        ele.className += ' select'
        return null
      } else {
        console.log('remove')
        const eleClass = ele.className.replace('select', '')
        ele.className = eleClass
        return null
      }
    },
    checkEChart (e) {
      const ele = e.currentTarget
      this.checkSelectClass(ele)
      if (e.currentTarget.classList.contains('select')) {
        console.log('选中微信')
      } else {
        console.log('取消选中微信')
      }
    },
    checkEMail (e) {
      const ele = e.currentTarget
      this.checkSelectClass(ele)
      if (e.currentTarget.classList.contains('select')) {
        console.log('选中邮箱')
      } else {
        console.log('取消选中邮箱')
      }
    },
    checkUndo (e) {
      const ele = e.currentTarget
      this.checkSelectClass(ele)
      if (e.currentTarget.classList.contains('select')) {
        console.log('选中撤销')
      } else {
        console.log('取消选中撤销')
      }
    },
    checkViewLog (e) {
      const ele = e.currentTarget
      this.checkSelectClass(ele)
      if (e.currentTarget.classList.contains('select')) {
        console.log('选中查看')
      } else {
        console.log('取消选中查看')
      }
    },
    manageFlowVersion () {
      this.showManageDialog = true
    },
    closeDialog () {
      this.showManageDialog = false
    },
    handleShowUndoHelp () {
      console.log('handleShowUndoHelp:::', this.showUndoHelp)
      this.showUndoHelp = true
      console.log(this.showUndoHelp)
    },
    handleCloseUndoHelp () {
      this.showUndoHelp = false
    },
    handleShowLogHelp () {
      this.showLogHelp = true
    },
    handleCloseLogHelp () {
      this.showLogHelp = false
    },
    enableFlow () {
      console.log('enableFlow')
      this.$message({
        type: 'warning',
        message: '确定启用该流程？'
      })
    }
  }
}
</script>
