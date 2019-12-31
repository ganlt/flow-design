<template>
  <div class="config-content flow_config"
       v-if="this.selected">
    <div class="config_pane" v-if="!showOperationMessage">
      <div class="cfg_title">
        <span>节点名称</span>
      </div>
      <div class="cfg_content with-split-line fui_text" style="width: 100%; height: 30px;">
        <input type="text" ref="nodeNameInput" class="x-input" v-model="nodeNameValue">
      </div>
      <div class="cfg_split"></div>
      <div class="cfg_content with-split-line fui_segment cfg_segment">
        <div class="fui_segment_item" :class="selectBaseAttr" ref="baseFlowAttrConf" @click="handleShowBaseProperties">
          <span>基础属性</span>
        </div>
        <div class="fui_segment_item" :class="selectGradeAttr" ref="gradeFlowAttrConf" @click="handleShowMoreProperties">
          <span>更多属性</span>
        </div>
      </div>
      <div class="cfg_split"></div>
      <div class="cfg_content config_pane" widgetname="baseFlowAttrConf" v-if="!this.showMoreProperties">
        <div class="cfg_title">
          <span>负责人</span>
        </div>
        <div class="cfg_content base_select member_select" widgetname="chargerComboCheck">
          <ul class="select-list">
            <li class="select-item" id="_widget_1504851212008" @click="handleShowApproverDialog">
              <i class="select-icon icon-member-normal"></i>
              <span>审批人</span>
            </li>
          </ul>
        </div>
        <div class="cfg_content x-check" :class="selectCC" ref="checkCC" @click="handleCheckCC">
          <i class="icon-blank"></i>
          <span>启用抄送</span>
        </div>
        <div class="cfg_content with-split-line base_select member_select"
             widgetname="ccUserComboCheck"
             v-show="selectCC"
             @click="handleShowApproverDialog">
          <ul class="select-list">
            <div class="select-empty">
              <i class="icon-add"></i>
              <span>点击设置抄送人</span>
            </div>
          </ul>
        </div>
        <div class="cfg_split"></div>
        <div class="cfg_title">
          <span>字段权限</span>
        </div>
        <div class="cfg_content field_auth flow" widgetname="authListPane">
          <div class="head">
            <a class="opt tooltip_pane tip">
              简报
              <i class="tip-icon icon-warning-circle"></i>
            </a>
            <a class="opt">可编辑</a>
            <a class="opt">可见</a>
          </div>
          <!-- 字段权限列表 -->
          <ul>
            <li class="select-all">
              <span>全选</span>
              <a class="x-check"
                 v-for="(selectAll, i) in selectAllList"
                 :key="i"
                 :class="[selectAll.limitName, selectAll.selected]"
                 @click="handleCheckSelectAll(i)">
                <i class="icon-blank"></i>
                <span></span>
              </a>
            </li>
            <li class="select-info" v-for="(filed, index) in fieldList" :key="index">
              <span>{{filed.name}}</span>
              <a class="x-check"
                 v-for="(limit, i) in filed.limitList"
                 :key="i"
                 :class="[limit.limitName, limit.selected]"
                 @click="handleCheckLimit(index, i)">
                <i class="x-iconfont"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cfg_content config_pane" widgetname="gradeFlowAttrConf" v-if="this.showMoreProperties">
        <div class="cfg_title">
          <span>审批意见</span>
          <span class="tooltip_pane info">
            <i class="tip-icon icon-help"></i>
          </span>
        </div>
        <div class="cfg_content with-split-line flow_node_comment">
          <div class="flow-comment-item">
            <div class="text-btn">文本意见</div>
            <div class="text-enable">未开启</div>
            <div class="btn-edit">
              <div class="fui_segment">
                <div class="fui_segment_item selected">
                  <span>禁用</span>
                </div>
                <div class="fui_segment_item">
                  <span>选填</span>
                </div>
                <div class="fui_segment_item">
                  <span>必填</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flow-comment-item">
            <div>
              <div class="item-btn">手写签名</div>
            </div>
            <div class="text-enable">未开启</div>
            <div class="btn-edit">
              <div class="fui_segment">
                <div class="fui_segment_item selected">
                  <span>禁用</span>
                </div>
                <div class="fui_segment_item">
                  <span>必填</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cfg_split"></div>
        <div class="cfg_title">
          <span>节点操作</span>
          <span class="tooltip_pane info">
            <i class="tip-icon icon-help"></i>
          </span>
        </div>
        <!-- 节点操作列表 -->
        <div class="cfg_content with-split-line flow_action">
          <div class="flow-action-item"
               v-for="(operation, index) in nodeOperationList"
               :key="index">
            <div class="text-btn">{{operation.name}}</div>
            <div class="text-enable"
                 :class="operation.status==='已开启'?'active':''">
              {{operation.status}}</div>
            <div class="btn-edit" @click="editNodeOperation(index)">
              <i class="icon-edit"></i>
              <span>编辑</span>
            </div>
          </div>
        </div>
        <div class="cfg_split"></div>
        <div class="cfg_title">
          <span>节点校验条件</span>
        </div>
        <div class="cfg_content fui_combo"
             style="width: 100%; height: 30px; line-height: 28px;">
          <input
            class="fui_trigger-input"
            onfocus="this.blur();"
            readonly="readonly"
            unselectable="on"
          >
          <i class="fui_trigger-btn icon-caret-down"></i>
        </div>
        <div class="cfg_content validator_pane x-ui-hidden"
             widgetname="flowValidatorpane"
             style="width: 100%;">
          <ul class="validator-list"></ul>
          <div class="x-btn style-white" style="height: 30px; line-height: 28px;">
            <span>添加校验条件</span>
          </div>
        </div>
        <div class="cfg_title">
          <span>流转规则</span>
        </div>
        <div class="cfg_content fui_combo" style="width: 100%; height: 30px; line-height: 28px;">
          <input
            class="fui_trigger-input"
            onfocus="this.blur();"
            readonly="readonly"
            unselectable="on"
          >
          <i class="fui_trigger-btn icon-caret-down"></i>
        </div>
        <div class="cfg_title">
          <span>节点限时处理</span>
          <span class="tooltip_pane info">
            <i class="tip-icon icon-help"></i>
          </span>
        </div>
        <div class="cfg_content x-btn style-white"
             widgetname="flowScheduleConfig"
             style="height: 30px; line-height: 28px;">
          <span>设置限时处理</span>
        </div>
        <div class="cfg_content flow_schedule_list x-ui-hidden"
             widgetname="flowScheduleList"></div>
      </div>
    </div>
    <div class="action-wrapper" v-if="showOperationMessage">
      <div class="x-btn action-set-complete style-green"
           style="height: 30px; line-height: 28px;"
           @click="handleSaveOperationStatus">
        <span>完成</span>
      </div>
      <div class="cfg_split"></div>
      <div class="cfg_title">
        {{nodeOperationWrapper.name}}
        <div class="action-switch fui_switch"
             v-if="nodeOperationWrapper.status==='未开启'"
             :class="switchState"
             style="width: 45px; height: 20px; line-height: 20px; border-radius: 22.5px; padding-left: 14px; padding-right: 0px;"
             @click="handleToggleStatus">
             <span class="switch-text">{{openBtnLable}}</span>
             <span class="switch-btn" style="width: 16px; height: 16px; left: 2px;"></span>
        </div>
      </div>
      <div>{{nodeOperationWrapper.message}}</div>
    </div>
    <div class="config_pane" v-if="showOperationMessage && nodeOperationWrapper.status==='已开启'">
      <div class="cfg_title">
        <span>按钮文字</span>
        <span class="tooltip_pane tip">
          <i class="tip-icon icon-warning-circle"></i>
        </span>
      </div>
      <div class="cfg_content x-layout-table">
        <div class="x-layout-table-row">
          <div class="x-layout-table-item fui_text action-save-title"
               style="width: 100%; height: auto;">
            <input type="text" class="x-input" v-model="nodeOperationWrapper.name">
          </div>
        </div>
        <div class="x-layout-table-row" style="margin-top: 10px;">
          <div class="x-layout-table-item x-btn style-white"
               style="width: 100%; height: 30px; line-height: 28px;">
            <span>恢复默认按钮文字</span>
          </div>
        </div>
      </div>
    </div>
    <approver-dialog :show-approver-dialog="showApproverDialog"
                     :principal-list="principalList"
                     @closeApproverDialog="handleCloseDialog"></approver-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'
import { nodeMixin } from './nodeMixin'
import { fieldLimitList, nodeOperateList } from '@/api/index'
import ApproverDialog from '../propertiesDialog/approver'
export default {
  components: {
    'approver-dialog': ApproverDialog
  },
  mixins: [nodeMixin],
  data () {
    return {
      selectAllList: [{
        limitName: 'view',
        selected: ''
      }, {
        limitName: 'edit',
        selected: ''
      }],
      fieldList: fieldLimitList,
      nodeOperationList: nodeOperateList,
      showOperationMessage: false,
      nodeOperationWrapper: {
        name: '',
        status: '',
        message: ''
      },
      openBtnLable: '关',
      switchState: 'off'
    }
  },
  computed: {
    ...mapState([
      'selected',
      'nodeName',
      'showMoreProperties',
      'showDepartment',
      'showRole',
      'showMember',
      'showDynamic'
    ]),
    nodeNameValue: {
      get () {
        return this.nodeName
      },
      set (value) {
        return store.commit('setNodeName', value)
      }
    }
  }
}
</script>
