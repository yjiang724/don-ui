<template>
  <div id="banner">
    <div>
        <h1>Banner 横幅</h1>
        <p class="description">网页顶部的横幅。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-banner></pku-banner>
        </div>
    </div>
    <div class="part">
        <h2>插入图片横幅</h2>
        <div class="codeblock">
          <pku-banner :logo="logo"></pku-banner>
        </div>
    </div>
    <div class="part">
        <h2>编辑文字横幅</h2>
        <div class="codeblock">
          <pku-banner :logo="logo" title="不只是切图" user="YJiang"></pku-banner>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>title</td><td>Banner 正中显示的标题</td><td>String</td><td>标题</td></tr>
              <tr><td>user</td><td>Banner 右上角提示的用户信息</td><td>String</td><td>-</td></tr>
              <tr><td>logo</td><td>Banner 正中显示的 LOGO 图标</td><td>String</td><td>-</td></tr>
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
  name: 'pkue-banner',
  data () {
    return {
      logo: './static/img/pkulogo_white.png'
    }
  }
}
</script>

<style scoped>
</style>
