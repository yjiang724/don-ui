<template>
  <div id="banner">
    <div>
        <h1>导航 Header</h1>
        <p class="description">网页顶部的导航。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-header :methods="list"></pku-header>
        </div>
    </div>
    <div class="part">
        <h2>插入图片横幅</h2>
        <div class="codeblock">
          <pku-header :logo="logo" :methods="list"></pku-header>
        </div>
    </div>
    <div class="part">
        <h2>编辑文字横幅</h2>
        <div class="codeblock codeblock1">
          <pku-header :logo="logo" :methods="list" user="YJiang"></pku-header>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>user</td><td>Header 右上角提示的用户信息</td><td>String</td><td>-</td></tr>
              <tr><td>logo</td><td>Header 正中显示的 LOGO 图标</td><td>String</td><td>-</td></tr>
              <tr><td>methods</td><td>Header 按钮组的传入数组</td><td>Array</td><td>[ ]</td></tr>
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
              <tr><td>callback</td><td>Header 按钮组的点击事件</td><td>-</td></tr>
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
  name: 'pkue-header',
  data () {
    return {
      logo: './static/img/pkulogo_red.png',
      list: ['没想好']
    }
  }
}
</script>

<style scoped>
.codeblock >>> header {
  position: relative;
}
.codeblock >>> .logo img {
  height: 32px;
}
.codeblock1 >>> input {
  display: none;
}
.codeblock1 >>> .menu {
  margin-right: 200px;
}
.codeblock1 >>> .user {
  z-index: 1500;
}
</style>
