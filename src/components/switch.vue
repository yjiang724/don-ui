<template>
  <div id="switch">
    <div>
        <h1>Switch 开关</h1>
        <p class="description">两种相互对立的状态间的切换。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-switch :value="data"></pku-switch>
        </div>
    </div>
    <div class="part">
        <h2>文字描述</h2>
        <div class="codeblock">
          <pku-switch :value="data" :ableText="ableText" :disableText="disableText"></pku-switch>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>value</td><td>switch 的开关状态</td><td>Boolean</td><td>true</td></tr>
              <tr><td>ableText</td><td>switch 打开时的文字描述</td><td>String</td><td>-</td></tr>
              <tr><td>disableText</td><td>switch 关闭时的文字描述</td><td>String</td><td>-</td></tr>
              <tr><td>ableColor</td><td>switch 打开时的按钮颜色</td><td>String</td><td>rgb(56, 142, 60)</td></tr>
              <tr><td>disableColor</td><td>switch 关闭时的按钮颜色</td><td>String</td><td>rgb(220, 223, 230)</td></tr>
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
              <tr><td>callback</td><td>switch 状态发生变化时的回调函数</td><td>新的状态值</td></tr>
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
      data: true,
      ableText: '开',
      disableText: '关'
    }
  }
}
</script>

<style scoped>
</style>
