<template>
  <div id="pagination">
    <div>
        <h1>Pagination 分页</h1>
        <p class="description">表格底部的分页器，用于设定表格的长度，筛选功能等。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-pagination :rawdata="rawdata"></pku-pagination>
        </div>
    </div>
    <div class="part">
        <h2>自定义默认每页行数</h2>
        <p class="description">设置默认每页表格显示的数据行数。</p>
        <div class="codeblock">
          <pku-pagination :rawdata="rawdata" :tolen="tolen"></pku-pagination>
        </div>
    </div>
    <div class="part">
        <h2>自定义分页栏页数</h2>
        <p class="description">设置默认分页器可显示的页数。</p>
        <div class="codeblock">
          <pku-pagination :rawdata="rawdata" :tolen="tolen" page="5"></pku-pagination>
        </div>
    </div>
    <div class="part">
        <h2>搜索框可过滤表格数据</h2>
        <p class="description">通过数据框筛选具体的数据，亦可自定义筛选方法。</p>
        <div class="codeblock">
          <pku-pagination :rawdata="rawdata"></pku-pagination>
        </div>
    </div>
    <div class="part">
        <h2>预先设置了表格数据导出按钮</h2>
        <p class="description">为表格增加了导出数据的按钮。</p>
        <div class="codeblock">
          <pku-pagination :rawdata="rawdata" :exportdata="exportdata"></pku-pagination>
        </div>
    </div>
    <div class="part">
        <h2>可自行设置功能的预留按钮组</h2>
        <p class="description">为表格额外增加了三个按钮，按钮的回调函数同为 `clickEvent`，根据按钮 `id` 来区分</p>
        <div class="codeblock">
          <pku-pagination :rawdata="rawdata" :exportdata="exportdata" :btnGroup="btnGroup"></pku-pagination>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>rawdata</td><td>pagination 原始数据</td><td>Array</td><td>[]</td></tr>
              <tr><td>tolen</td><td>pagination 每页默认显示行数</td><td>Number</td><td>10</td></tr>
              <tr><td>lens</td><td>pagination 可选择每页显示行数</td><td>Array</td><td>[5, 10, 15]</td></tr>
              <tr><td>pageLen</td><td>pagination 分页栏显示页数</td><td>Number</td><td>5</td></tr>
              <tr><td>exportdata</td><td>pagination 导出数据按钮</td><td>Boolean</td><td>false</td></tr>
              <tr><td>btnGroup</td><td>pagination 其他操作按钮名称</td><td>Array</td><td>[]</td></tr>
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
              <tr><td>callback</td><td>pagination 分页器根据当前结果的筛选数据</td><td>根据分页结果的当前页数据</td></tr>
              <tr><td>clickEvent</td><td>pagination 额外按钮的回调函数</td><td>按钮的 id</td></tr>
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
  name: 'pkue-pagination',
  data () {
    return {
      rawdata: ['选项1', '选项2', '选项3', '选项3', '选项3', '选项3', '选项3', '选项3', '选项3'],
      exportdata: true,
      tolen: 1,
      btnGroup: ['按钮1']
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
