// 导航栏 -> 流程版本下拉框
export const versionLists = [{
  name: '流程版本(V7)',
  selected: 'select',
  status: '启用中',
  type: 'version-current'
}, {
  name: '流程版本(V6)',
  selected: '',
  status: '设计',
  type: 'version-design'
}, {
  name: '流程版本(V5)',
  selected: '',
  status: '设计',
  type: 'version-design'
}, {
  name: '流程版本(V4)',
  selected: '',
  status: '设计',
  type: 'version-design'
}, {
  name: '流程版本(V3)',
  selected: '',
  status: '设计',
  type: 'version-design'
}, {
  name: '流程版本(V2)',
  selected: '',
  status: '设计',
  type: 'version-design'
}, {
  name: '流程版本(V1)',
  selected: '',
  status: '设计',
  type: 'version-design'
}]

// 节点属性列表 -> 基础属性 -> 字段权限列表
export const fieldLimitList = [{
  name: '申请人',
  limitList: [{
    limitName: 'view',
    selected: ''
  }, {
    limitName: 'edit',
    selected: ''
  }, {
    limitName: 'brief',
    selected: ''
  }]
}, {
  name: '申请时间',
  limitList: [{
    limitName: 'view',
    selected: ''
  }, {
    limitName: 'edit',
    selected: ''
  }, {
    limitName: 'brief',
    selected: ''
  }]
}, {
  name: '入职时间',
  limitList: [{
    limitName: 'view',
    selected: ''
  }, {
    limitName: 'edit',
    selected: ''
  }, {
    limitName: 'brief',
    selected: ''
  }]
}, {
  name: '转正理由陈述',
  limitList: [{
    limitName: 'view',
    selected: ''
  }, {
    limitName: 'edit',
    selected: ''
  }, {
    limitName: 'brief',
    selected: ''
  }]
}, {
  name: '审批人',
  limitList: [{
    limitName: 'view',
    selected: ''
  }, {
    limitName: 'edit',
    selected: ''
  }, {
    limitName: 'brief',
    selected: ''
  }]
}, {
  name: '审批结果',
  limitList: [{
    limitName: 'view',
    selected: ''
  }, {
    limitName: 'edit',
    selected: ''
  }, {
    limitName: 'brief',
    selected: ''
  }]
}]

// 节点属性列表 -> 更多属性 -> 节点操作
export const nodeOperateList = [{
  name: '提交',
  status: '已开启',
  message: '用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，流程数据流转至后续节点。'
}, {
  name: '暂存',
  status: '未开启',
  message: '用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，流程不发生流转。' + '\n' + '暂存会将数据保存至数据库，触发字段「不允许重复值」校验。'
}, {
  name: '提交并打印',
  status: '未开启',
  message: '开启后，用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，流程流转至后续节点，同时进入打印界面进行数据打印。'
}, {
  name: '回退',
  status: '未开启',
  message: '开启后，用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，同时流程退回到指定的节点中。'
}, {
  name: '转交',
  status: '未开启',
  message: '开启后，用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，流程转交至指定的负责人处理。'
}, {
  name: '结束流程',
  status: '未开启',
  message: '开启后，用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，并且终止流程，不再进行流转。'
}]
