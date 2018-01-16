<template>
  <div id="select">
    <div>
        <h1>Select 选择器</h1>
        <p class="description">模拟系统的选择框而实现的一套动态选择组件，可编辑选择框内容和切换动画。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-select></pku-select>
        </div>
    </div>
    <div class="part">
        <h2>添加文本列表</h2>
        <p class="description">为选择框添加选择的列表。</p>
        <div class="codeblock">
          <pku-select value="默认" :list="list"></pku-select>
        </div>
    </div>
    <div class="part">
        <h2>切换动画可选</h2>
        <p class="description">系统预设了 <strong>4 套</strong>不同的切换动画，分别是：纵向展开，横向展开，向下出现，向上出现。可以给属性 `animation` 设置不同的属性 ['scaleY', 'scaleX', 'translateUp', 'translateDown'] 使用。</p>
        <div class="codeblock">
          <pku-select value="纵向展开" :list="list" animation="scaleY"></pku-select>
          <pku-select value="横向展开" :list="list" animation="scaleX"></pku-select>
          <pku-select value="向下出现" :list="list" animation="translateUp"></pku-select>
          <pku-select value="向上出现" :list="list" animation="translateDown" @callback="onSelect"></pku-select>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>value</td><td>select 默认显示文本</td><td>String</td><td>请选择</td></tr>
              <tr><td>list</td><td>select 内部列表</td><td>Array</td><td>-</td></tr>
              <tr><td>importKey</td><td>select 导入对象数组时显示用的键名</td><td>String</td><td>-</td></tr>
              <tr><td>exportKey</td><td>select 对象数组选中后回调时返回的键名</td><td>String</td><td>-</td></tr>
              <tr><td>animation</td><td>select 列表切换动画</td><td>String</td><td>scaleY</td></tr>
            </tbody>
          </table>
        </div>
    </div>
    <div class="part">
        <h2>Events</h2>
        <div class="table">
          <table>
            <thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead>
            <tbody>
              <tr><td>callback</td><td>select 选中值发生变化时的回调函数</td><td>新的选中值</td></tr>
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
  name: 'pkue-switch',
  data () {
    return {
      list: ['选项1', '选项2', '选项3']
    }
  },
  methods: {
    onSelect (val) {
    }
  }
}
</script>

<style scoped>
</style>
