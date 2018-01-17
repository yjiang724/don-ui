<template>
  <div id="cascader">
    <div>
      <h1>Cascader 级联选择器</h1>
      <p class="description">当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
    </div>
    <div class="part">
      <h2>基本用法</h2>
      <p class="description">预置完整的选择列表。</p>
      <div class="codeblock" style="">
        <div style="width:200px">
          <pku-cascader
            :async="false"
            :url="url"
            :list="options"></pku-cascader>
        </div>
      </div>
    </div>
    <div class="part">
        <h2>仅显示最后一级</h2>
        <p class="description">可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
        <div class="codeblock">
        <div style="width:200px">
          <pku-cascader
            :async="false"
            :show-all-levels="false"
            :url="url"></pku-cascader>
        </div>
        </div>
    </div>
    <div class="part">
        <h2>动态加载次级选项</h2>
        <p class="description">当选中某一级时，动态加载该级下的选项。</p>
        <div class="codeblock">
        <div style="width:200px">
          <pku-cascader
            :async="true"
            :url="url"></pku-cascader>
        </div>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>selected</td><td>Cascader 选择器的默认值</td><td>String</td><td>请选择</td></tr>
              <tr><td>list</td><td>Cascader 选择器的列表</td><td>String</td><td>[]</td></tr>
              <tr><td>async</td><td>是否请求服务器端数据</td><td>Boolean</td><td>false</td></tr>
              <tr><td>url</td><td>请求服务器端的地址</td><td>String</td><td>-</td></tr>
              <tr><td>params</td><td>请求服务器端的参数</td><td>Object</td><td>{}</td></tr>
              <tr><td>showAllLevels</td><td>输入框中是否显示选中值的完整路径</td><td>Boolean</td><td>false</td></tr>
              <tr><td>animation</td><td>列表切换动画</td><td>String</td><td>-</td></tr>
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
              <tr><td>callback</td><td>选取之后的完整路径</td><td>-</td></tr>
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
  name: 'pkue-cascader',
  data () {
    return {
      options: [{'label': 'menu1', 'child': [{'label': 'menu11'}, {'label': 'menu13'}, {'label': 'menu12'}]}, {'label': 'menu3'}, {'label': 'menu2'}],
      disabled: true,
      file: true,
      accept: 'text/csv',
      url: 'http://pkue.jiangyu.me/cas.php'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
