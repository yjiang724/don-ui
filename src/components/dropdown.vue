<template>
  <div id="dropdown">
    <div>
        <h1>Dropdown 按钮组</h1>
        <p class="description">模拟系统的按钮组。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <p class="description">只有单个按钮的时候就是一般的按钮组件</p>
        <div class="codeblock">
          <pku-dropdown></pku-dropdown>
        </div>
    </div>
    <div class="part">
        <h2>基本按钮组</h2>
        <p class="description">当有多个按钮的时候，会形如一个下拉列表</p>
        <div class="codeblock">
          <pku-dropdown selected="操作" :list="list" style="display:block; min-width: 50px;margin-bottom: 20px;"></pku-dropdown>
        </div>
    </div>
    <div class="part">
        <h2>无边框的按钮组</h2>
        <p class="description">当有多个按钮的时候，会形如一个下拉列表</p>
        <div class="codeblock">
          <pku-dropdown selected="操作" :border="false" :list="list" style="display:block; min-width: 50px; width: 150px;margin-bottom: 20px;"></pku-dropdown>
        </div>
    </div>
    <div class="part">
        <h2>包含禁止点击的选项</h2>
        <p class="description">当有多个按钮的时候，会形如一个下拉列表</p>
        <div class="codeblock">
          <pku-dropdown selected="操作" :list="list2" style="display:block; min-width: 50px;margin-bottom: 20px;"></pku-dropdown>
        </div>
    </div>
    <div class="part">
        <h2>不同尺寸的按钮组</h2>
        <p class="description">当有多个按钮的时候，会形如一个下拉列表</p>
        <div class="codeblock">
          <pku-dropdown selected="操作" size="sm" :list="list2" style="display:block; min-width: 50px;width: 150px; margin-bottom: 20px;"></pku-dropdown>
          <pku-dropdown selected="操作" :list="list2" style="display:block; min-width: 50px; width: 150px; margin-bottom: 20px;"></pku-dropdown>
          <pku-dropdown selected="操作" size="lg"  :list="list2" style="display:block; min-width: 50px;width: 150px; margin-bottom: 20px;"></pku-dropdown>
        </div>
    </div>
    <div class="part">
        <h2>包含选中选项的按钮组</h2>
        <p class="description">可以在按钮组中使用多选框，并在确认时返回选中的所有选项</p>
        <div class="codeblock">
          <p style="margin-bottom: 30px">选中的选项为: {{wwww}} </p>
          <pku-dropdown @callback="onSelect" selected="操作" size="md" :checkbox="true" :list="list" style="display:block; min-width: 50px;width: 150px; margin-bottom: 20px;"></pku-dropdown>
        </div>
    </div>
    <div class="part">
        <h2>切换动画可选</h2>
        <p class="description">系统预设了 <strong>4 套</strong>不同的切换动画，分别是：纵向展开，横向展开，向下出现，向上出现。可以给属性 `animation` 设置不同的属性 ['scaleY', 'scaleX', 'translateUp', 'translateDown'] 使用。</p>
        <div class="codeblock">
          <pku-dropdown style="display:block; min-width: 50px;width: 150px; margin-bottom: 20px;" selected="纵向展开" :list="list" animation="scaleY"></pku-dropdown>
          <pku-dropdown style="display:block; min-width: 50px;width: 150px; margin-bottom: 20px;" selected="横向展开" :list="list2" animation="scaleX"></pku-dropdown>
          <pku-dropdown style="display:block; min-width: 50px;width: 150px; margin-bottom: 20px;" selected="向下出现" :list="list" animation="translateUp"></pku-dropdown>
          <pku-dropdown style="display:block; min-width: 50px;width: 150px; margin-bottom: 20px;" selected="向上出现" :list="list" animation="translateDown"></pku-dropdown>
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
  name: 'pkue-dropdown',
  data () {
    return {
      list: [
        {label: '按钮 1', disabled: false},
        {label: '按钮 2', disabled: false},
        {label: '按钮 3', disabled: false},
        {label: '按钮 4', disabled: false}
      ],
      list2: [
        {label: '按钮 1', disabled: false},
        {label: '按钮 2', disabled: false},
        {label: '按钮 3', disabled: true},
        {label: '按钮 4', disabled: false}
      ],
      list3: [
        {label: '按钮', disabled: true}
      ],
      wwww: []
    }
  },
  methods: {
    onSelect (val) {
      this.wwww = val
    }
  }
}
</script>

<style scoped>
</style>
