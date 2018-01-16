<template>
  <div id="notice">
    <div>
        <h1>Notice 提示</h1>
        <p class="description">脱离于文档流的提示组件，可自定义提示内容及时间。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-button 
          @callback="onSubmitEventHandler_1" 
          value="普通提示"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>定时关闭</h2>
        <p class="description">可以通过设置预置的 class 属性更换不用颜色。</p>
        <div class="codeblock">
             <pku-button 
            @callback="onSubmitEventHandler_2" 
            value="普通提示"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>四种提示类型</h2>
        <p class="description">可以通过设置预置的 type 为 Notice 设置不同的主题。</p>
        <div class="codeblock">
          <pku-button  class="btn-success" @callback="onSubmitEventHandler_3"  value="成功"></pku-button>
          <pku-button  class="btn-danger" @callback="onSubmitEventHandler_4"  value="失败"></pku-button>
          <pku-button  class="btn-primary" @callback="onSubmitEventHandler_5"  value="信息"></pku-button>
          <pku-button  class="btn-warning" @callback="onSubmitEventHandler_6"  value="警告"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>全局方法</h2>
        <p class="description">如果你完整引入了 vue-pku, Vue.prototype 添加如下全局方法：$notice。调用方法：</p>
        <div class="codeblock">
            <ul>
            <li>$notice(options)</li>
            </ul>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>title</td><td>Notice 标题</td><td>String</td><td>标题</td></tr>
              <tr><td>message</td><td>Notice 正文</td><td>String</td><td>正文</td></tr>
              <tr><td>time</td><td>Notice 自动关闭时间</td><td>Number</td><td>3000 (ms)</td></tr>
              <tr><td>type</td><td>Notice 类型</td><td>['', 'success', 'info', 'error', 'warning']</td><td>-</td></tr>
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
  name: 'pkue-notice',
  data () {
    return {
    }
  },
  methods: {
    onSubmitEventHandler_1 () {
      this.$notice({
        title: '标题名称',
        message: '这是一条不会自动关闭的消息'
      })
    },
    onSubmitEventHandler_2 () {
      this.$notice({
        title: '提示',
        message: '这是一条会自动关闭的消息',
        time: 3000
      })
    },
    onSubmitEventHandler_3 () {
      this.$notice({
        title: '标题名称',
        message: 'success',
        type: 'success'
      })
    },
    onSubmitEventHandler_4 () {
      this.$notice({
        title: '标题名称',
        message: 'error',
        type: 'error'
      })
    },
    onSubmitEventHandler_5 () {
      this.$notice({
        title: '标题名称',
        message: 'info',
        type: 'info'
      })
    },
    onSubmitEventHandler_6 () {
      this.$notice({
        title: '标题名称',
        message: 'warning',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
a {
  color: #8f000b;
  cursor: pointer;
}
</style>
