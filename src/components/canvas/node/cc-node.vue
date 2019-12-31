<template>
  <div class="flow_node flow-selector menu"
       v-drag="contain"
       style="width: 160px; height:40px"
       :style="ccNodeInfo.position"
       title="抄送节点">
    <i class="node-icon icon-release blue"></i>
    <div class="node-name">抄送节点</div>
    <i class="node-menu icon-flow-other"></i>
  </div>
</template>

<script>
export default {
  name: 'cc-node',
  props: [
    'contain',
    'ccNodeInfo'
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
