<template>
  <div class="flow-version-selection">
    <div
      class="x-msg-bubble info animation dock-top dock-left active"
      id="selection"
      style="z-index: 8002; top: 52px; bottom: auto; left: 1220px; zoom: 1;"
    >
      <div class="content" style="padding: 0px;">
        <div class="switch-wrapper-content">
          <div class="content-body">
            <ul class="version-lists">
              <li
                v-for="(version, index) in flowVersionList"
                :key="index"
                class="list-item"
                :class="version.selected"
              >
                <i class="icon-ok"></i>
                <span class="version-name">{{version.name}}</span>
                <span class="version-type" :class="version.type">{{version.status}}</span>
              </li>
            </ul>
          </div>
          <div class="content-footer">
            <div class="version-ctrl">
              <i class="icon-set"></i>
              <span>管理流程版本</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { versionLists } from '@/api/index'
export default {
  data () {
    return {
      flowVersionList: versionLists
    }
  }
}
</script>
