<template>
  <div id="dialog">
      <pku-loading 
        :visible="visible_1"
        @closeEvent="visible_1 = false" >提示内容</pku-loading>
    <div>
        <h1>Loading 加载提示</h1>
        <p class="description">如果要给加一些点击事件，切换时的过渡动画，可以使用 Loading。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-button 
            value="点击出现 Loading 提示" 
            @callback="visible_1 = true"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>自定义提示内容</h2>
        <p class="description">可以自定义提示的文字信息。</p>
        <div class="codeblock">
          <pku-button 
            value="点击出现 Loading 提示" 
            @callback="visible_2 = true"></pku-button>
           <pku-loading 
            title="提示"
            :visible="visible_2">提示内容</pku-loading>
        </div>
    </div>
    <div class="part">
        <h2>更换 Loading 的旋转图标</h2>
        <p class="description">可以将 Loading 旋转的图标换成已知的 awsome 图标。如：‘fa-spinner’，‘fa-circle-o-notch’</p>
        <div class="codeblock">
          <pku-button 
            value="点击出现 Loading 提示" 
            @callback="visible_3 = true"></pku-button>
          <pku-loading 
            icon="fa-spinner"
            :visible="visible_3">提示内容</pku-loading>
          <pku-button 
            value="点击出现 Loading 提示" 
            @callback="visible_4 = true"></pku-button>
          <pku-loading 
            icon="fa-circle-o-notch"
            :visible="visible_4">提示内容</pku-loading>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>visible</td><td>默认为 false，作为 Loading 的开关</td><td>Boolean</td><td>false</td></tr>
              <tr><td>title</td><td>Loading 提示语</td><td>String</td><td>拼命加载中</td></tr>
              <tr><td>icon</td><td>Loading 旋转图标</td><td>String</td><td>fa-snowflake-o</td></tr>
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
  name: 'pkue-loading',
  data () {
    return {
      visible_1: false,
      visible_2: false,
      visible_3: false,
      visible_4: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
