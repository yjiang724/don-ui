<template>
  <div id="messagebox">
    <div>
        <h1>Messagebox 消息框</h1>
        <p class="description">模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
    </div>
    <div class="part">
        <h2>消息警告框</h2>
        <div class="codeblock">
          <pku-button class="btn-warning" @callback="onAlert" value="点击显示警告框"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>消息确认框</h2>
        <p class="description">可以通过设置预置的 class 属性更换不用颜色。</p>
        <div class="codeblock">
          <pku-button class="btn-primary" @callback="onConfirm" value="点击显示确认框"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>输入框</h2>
        <p class="description">可以通过设置预置的 class 属性更换不用颜色。</p>
        <div class="codeblock">
          <pku-button class="btn-success" @callback="onPrompt" value="点击显示输入框"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>全局方法</h2>
        <p class="description">如果你完整引入了 vue-pku, Vue.prototype 添加如下全局方法：$alert, $confirm。因此在 Vue instance 中可以采用本页面中的方式调用 MessageBox。调用参数为：</p>
        <div class="codeblock">
            <ul>
            <li>$alert(message, title, options)</li>
            <li>$confirm(message, title, options)</li>
            <li>$text(message, title, options)</li>
            </ul>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>title</td><td>MessageBox 标题</td><td>String</td><td>标题</td></tr>
              <tr><td>message</td><td>MessageBox 提示语</td><td>String</td><td>提示语</td></tr>
              <tr><td>closeButtonText</td><td>options 内部键值对，关闭按钮的提示文字</td><td>String</td><td>-</td></tr>
              <tr><td>submitButtonText</td><td>options 内部键值对，确认按钮的提示文字</td><td>String</td><td>关闭</td></tr>
              <tr><td>submit</td><td>options 内部键值对，确认事件的回调函数</td><td>Function</td><td>-</td></tr>
              <tr><td>cancel</td><td>options 内部键值对，关闭（弹出框）事件的毁掉函数</td><td>Function</td><td>-</td></tr>
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
  name: 'pkue-messagebox',
  data () {
    return {
      message: 123
    }
  },
  methods: {
    onAlert () {
      this.$alert('这是一段内容', '标题名称', {
        closeButtonText: '关闭',
        cancel: () => {
          console.log('关闭时的回调函数')
        }
      })
    },
    onConfirm () {
      this.$confirm('这是二段内容', '标题名称 2', {
        closeButtonText: '关闭',
        submitButtonText: '确认',
        submit: (val) => {
          console.log(this.message, val)
        },
        cancel: () => {
          console.log('关闭时的回调函数')
        }
      })
    },
    onPrompt () {
      this.$text('这是三段内容', '标题名称 3', {
        closeButtonText: '关闭',
        submitButtonText: '确认',
        submit: (val) => {
          console.log(this.message, val)
        },
        cancel: () => {
          console.log('关闭时的回调函数')
        }
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
