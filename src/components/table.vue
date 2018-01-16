<template>
  <div id="table">
    <div>
        <h1>Table 表格</h1>
        <p class="description">模拟系统的表格，提供了分页插件用于筛选数据。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-table 
            :rawdata="rawdata" 
            :lens="lenArr" 
            :tolen="len" 
            :pageLen="pageLen" 
            :menu="menu" 
            :exportdata="exportdata"></pku-table>
        </div>
    </div>
    <div class="part">
        <h2>可排序表格</h2>
        <p class="description">可以按照每列的 key 顺序逆序排序，menu的key应对应rawdata里的所有key值。</p>
        <div class="codeblock">
          <pku-table 
            :rawdata="rawdata" 
            :lens="lenArr" 
            :tolen="len" 
            :pageLen="pageLen" 
            :menu="menu" 
            :exportdata="exportdata"></pku-table>
        </div>
    </div>
    <div class="part">
        <h2>加入选中框表格</h2>
        <p class="description">若在 menu 的头部加上 `{name: 'checkbox', key: 'checkbox'}` 字段就可以启用多选框，结合回调函数 `checkEvent` 即可进一步操作。 </p>
        <div class="codeblock">
          <pku-table 
            :rawdata="rawdata" 
            :lens="lenArr" 
            :tolen="len" 
            :pageLen="pageLen" 
            :menu="menu2" 
            :exportdata="exportdata"></pku-table>
        </div>
    </div>
    <div class="part">
        <h2>分页器表格。</h2>
        <p class="description">可打开分页器</p>
        <div class="codeblock">
            <pku-table 
            :rawdata="rawdata" 
            :lens="lenArr" 
            :tolen="len" 
            :pageLen="pageLen" 
            :menu="menu" 
            :exportdata="exportdata" 
            :pagination="exportdata"></pku-table>
         </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>rawdata</td><td>table 原始数据</td><td>Array</td><td>[]</td></tr>
              <tr><td>menu</td><td>table 表格头</td><td>Array</td><td>[]</td></tr>
              <tr><td>tolen</td><td>table 每页默认显示行数</td><td>Number</td><td>10</td></tr>
              <tr><td>lens</td><td>table 可选择每页显示行数</td><td>Array</td><td>[5, 10, 15]</td></tr>
              <tr><td>pageLen</td><td>table 分页栏显示页数</td><td>Number</td><td>5</td></tr>
              <tr><td>exportdata</td><td>table 导出数据按钮</td><td>Boolean</td><td>false</td></tr>
              <tr><td>pagination</td><td>table 是否使用分页器</td><td>Boolean</td><td>false</td></tr>
              <tr><td>btnGroup</td><td>table 其他操作按钮名称</td><td>Array</td><td>[]</td></tr>
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
              <tr><td>callback</td><td>table 分页器根据当前结果的筛选数据</td><td>根据分页结果的当前页数据</td></tr>
              <tr><td>checkEvent</td><td>table 选中框的回调函数</td><td>当前选中项的 id 列表</td></tr>
              <tr><td>clickEvent</td><td>table 额外按钮的回调函数</td><td>按钮的 id</td></tr>
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
  computed: {
    rawdata () {
      let count = 1
      let i = []
      setTimeout(function () {
        while (count < 10) {
          i.push({
            id: count,
            userid: 'z' + count,
            username: '112' + count
          })
          count++
        }
      }, 0)
      return i
    }
  },
  data () {
    return {
      lenArr: [5, 10, 15], // 每页显示长度设置
      len: 5, // 每页的长度
      pageLen: 5,
      exportdata: true,
      menu: [
        {name: '序号', key: 'id'},
        {name: '编号', key: 'userid'},
        {name: '姓名', key: 'username'}
      ],
      menu2: [
        {name: 'checkbox', key: 'checkbox'},
        {name: '序号', key: 'id'},
        {name: '编号', key: 'userid'},
        {name: '姓名', key: 'username'}
      ]
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
