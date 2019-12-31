<template>
  <g class="flow_path">
    <path stroke="#fff"
          stroke-width="4"
          fill="#fff"
          fill-opacity="0"
          stroke-dasharray
          v-bind:d="linePosition.back"></path>
    <path stroke="#3A40D4"
          stroke-width="2"
          fill="#fff"
          fill-opacity="0"
          stroke-dasharray
          v-bind:d="linePosition.mainLine"></path>
    <path stroke="#3A40D4"
          stroke-width="2"
          fill="#fff"
          fill-opacity="0"
          stroke-dasharray
          v-bind:d="linePosition.left"></path>
    <path stroke="#3A40D4"
          stroke-width="2"
          fill="#fff"
          fill-opacity="0"
          stroke-dasharray
          v-bind:d="linePosition.right"></path>
  </g>
</template>

<script>
export default {
  name: 'flow-chart-line',
  props: [
    'contain',
    'linePosition'
  ]
}
</script>
