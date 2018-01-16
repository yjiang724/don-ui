<template>
  <div id="breadcrumb">
    <div>
        <h1>Breadcrumb 面包屑</h1>
        <p class="description">清新的导航栏。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
            <pku-breadcrumb></pku-breadcrumb>
        </div>
    </div>
    <div class="part">
        <h2>更换分隔符</h2>
        <p class="description">更换预置的分隔符。</p>
        <div class="codeblock">
            <pku-breadcrumb separator="arrow"></pku-breadcrumb>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>value</td><td>插入的导航文字数据</td><td>Array</td><td>['首页', '子页面一', '子页面二']</td></tr>
              <tr><td>separator</td><td>分割符，默认为空，箭头则输入 "arrow"</td><td>String</td><td>-</td></tr>
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
  name: 'pkue-breadcrumb',
  data () {
    return {
    //   data: true,
    //   ableText: '开',
    //   disableText: '关'
    }
  }
}
</script>

<style scoped>
</style>
