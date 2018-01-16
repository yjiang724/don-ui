<template>
  <div id="button">
    <div>
        <h1>Button 按钮</h1>
        <p class="description">点击按钮。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-button @click.native="onAlert"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>文字按钮</h2>
        <p class="description">可以通过设置预置的 class 属性更换不用颜色。</p>
        <div class="codeblock">
          <pku-button class="btn-default" value="按钮" @click.native="onConfirm"></pku-button>
          <pku-button class="btn-primary" value="提交"></pku-button>
          <pku-button class="btn-warning" value="警告"></pku-button>
          <pku-button class="btn-success" value="成功"></pku-button>
          <pku-button class="btn-danger" value="注意"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>图标按钮</h2>
        <p class="description">可以结合 awsome-font 给按钮加入图标。</p>
        <div class="codeblock">
          <pku-button class="btn-default" icon="plane" value="飞机"></pku-button>
          <pku-button class="btn-default" icon="car" value="汽车"></pku-button>
          <pku-button class="btn-default" icon="bus" value="公交"></pku-button>
          <pku-button class="btn-default" icon="ship" value="轮渡"></pku-button>
          <pku-button class="btn-default" icon="rocket" value="火箭"></pku-button>
          <pku-button class="btn-default" icon="train" value="高铁"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>禁用按钮</h2>
        <p class="description">禁止用户点击按钮。</p>
        <div class="codeblock">
          <pku-button class="btn-disabled" :disabled="disabled" value="禁止"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>选择文件按钮</h2>
        <p class="description">选择文件按钮，如需上传需要加入其它组件结合 Bind Event 实现。</p>
        <div class="codeblock">
          <pku-button class="btn-default" :file="file" :accept="accept" value="选择文件"></pku-button>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>class</td><td>'btn'是必需项，['btn-default', 'btn-primary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-disabled'] 是带选项</td><td>String</td><td>default</td></tr>
              <tr><td>value</td><td>按钮的提示文字</td><td>String</td><td>default</td></tr>
              <tr><td>icon</td><td>按钮所显示的图标</td><td>String</td><td>-</td></tr>
              <tr><td>disabled</td><td>禁止点击</td><td>Boolean</td><td>false</td></tr>
              <tr><td>file</td><td>选择文件入口</td><td>Boolean</td><td>false</td></tr>
              <tr><td>accept</td><td>限制上传文件类型</td><td>String</td><td>-</td></tr>
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
              <tr><td>callback</td><td>点击按钮时的回调函数</td><td>-</td></tr>
            </tbody>
          </table>
        </div>
    </div>
    <div class="part">
        <h2>Bind Event</h2>
        <div class="table">
          <table>
            <thead><tr><th>事件名称</th><th>说明</th><th>传入参数</th></tr></thead>
            <tbody>
              <tr><td>@change.native</td><td>检测已经选中的文件信息</td><td>$event</td></tr>
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
  name: 'pkue-button',
  data () {
    return {
      disabled: true,
      file: true,
      accept: 'text/csv'
    }
  },
  methods: {
    onAlert () {
      this.$alert('这是一段内容xxx', '标题名称xxx', {
        closeButtonText: 'CLOSE'
      })
    },
    onConfirm () {
      this.$confirm('这是一段内容yyy', '标题名称xxx', {
        closeButtonText: 'www',
        submitButtonText: '确认',
        action: (val = this.accept) => {
          console.log(this, 123, val)
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
