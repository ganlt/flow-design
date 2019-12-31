<template>
  <div class="flow_node flow-selector"
       title="流程发起节点"
       v-drag="contain"
       style="width: 160px; height:40px"
       :style="startNodeInfo.position">
    <i class="node-icon icon-flow-start green"></i>
    <div class="node-name">流程发起节点</div>
    <div class="node-anchor input output" style="left: 80px; top: 0px;"></div>
    <div class="node-anchor input output" style="left: 160px; top: 20px;"></div>
    <div class="node-anchor input output" style="left: 80px; top: 40px;"></div>
    <div class="node-anchor input output" style="left: 0px; top: 20px;"></div>
  </div>
</template>

<script>
export default {
  name: 'start-node',
  props: [
    'contain',
    'startNodeInfo'
  ],
  directives: {
    drag: {
      bind: function (el, binding, vnode) {
        el.onmousedown = function (e) {
          var disx = e.clientX - el.offsetLeft
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
