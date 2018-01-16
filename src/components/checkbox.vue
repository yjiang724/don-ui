<template>
  <div id="checkbox">
    <div>
        <h1>Checkbox 多选框</h1>
        <p class="description">表单中的多选框。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-checkbox @onCheck="onListenCheck"></pku-checkbox>
        </div>
    </div>
    <div class="part">
        <h2>禁用状态</h2>
        <p class="description">多选框不可用状态。</p>
        <div class="codeblock">
          <pku-checkbox :disabled="!disabled" :check="disabled"></pku-checkbox>
          <pku-checkbox :disabled="!disabled" :check="!disabled"></pku-checkbox>
          <pku-checkbox :disabled="disabled" :check="disabled"></pku-checkbox>
          <pku-checkbox :disabled="disabled" :check="!disabled"></pku-checkbox>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>value</td><td>选择框的提示文字</td><td>String</td><td>选择框</td></tr>
              <tr><td>check</td><td>选择框的选中状态</td><td>Boolean</td><td>false</td></tr>
              <tr><td>disabled</td><td>选择框是否禁止点击</td><td>Boolean</td><td>false</td></tr>
            </tbody>
          </table>
        </div>
    </div>
    <div class="part">
        <h2>Event</h2>
        <div class="table">
          <table>
            <thead><tr><th>事件名称</th><th>说明</th><th>传入参数</th></tr></thead>
            <tbody>
              <tr><td>callback</td><td>检测已经选中的文件信息</td><td>$event</td></tr>
            </tbody>
          </table>
        </div>
    </div>
    <div class="part-arrow">
      <div class="arrow-left">
      <a href="www.baidu.com"><icon name="angle-left"></icon> <span>Cascader 级联选择器 Slider 滑块</span></a>
      </div>
      <div class="arrow-right">
      <a href="www.baidu.com"><span>Cascader 级联选择器 Slider 滑块</span> <icon name="angle-right"></icon></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pkue-checkbox',
  data () {
    return {
      disabled: true
    //   data: true,
    //   ableText: '开',
    //   disableText: '关'
    }
  },
  methods: {
    onListenCheck (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
</style>
