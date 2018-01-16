<template>
  <div id="dialog">
    <div>
        <h1>Dialog 模态框</h1>
        <p class="description">基于模态框构建的组件，可以插入系统自带的组件组成各式各样的模态框提醒。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
          <pku-button 
            value="点击出现模态框" 
            @callback="visible_1 = true"></pku-button>
          <pku-dialog 
            title="标题"
            :visible="visible_1"
            @closeEvent="visible_1 = false" >提示内容</pku-dialog>
        </div>
    </div>
    <div class="part">
        <h2>置顶模态框</h2>
        <p class="description">可以将模态框放置在浏览器可视部分顶部，并加上动画渲染。</p>
        <div class="codeblock">
          <pku-button 
            value="点击出现模态框" 
            @callback="visible_2 = true"></pku-button>
          <pku-dialog 
            title="标题"
            :fixed="fixed"
            :visible="visible_2"
            @closeEvent="visible_2 = false" >提示内容</pku-dialog>
        </div>
    </div>
    <div class="part">
        <h2>添加确认按钮模态框</h2>
        <p class="description">可以将模态框添加确认按钮，并且在回调函数中编辑确认后的进一步操作。</p>
        <div class="codeblock">
          <pku-button 
            value="点击出现模态框" 
            @callback="visible_3 = true"></pku-button>
          <pku-dialog 
            title="标题"
            :submit="submit"
            :fixed="fixed"
            :visible="visible_3"
            @callback="onSubmitEventHandler"
            @closeEvent="visible_3 = false" >提示内容</pku-dialog>
        </div>
    </div>
    <div class="part">
        <h2>插入表格模态框</h2>
        <p class="description">Dialog 的功能比 Messagebox 强大，可以插入任意组件，但是需要配置的参数也更多。</p>
        <div class="codeblock">
          <pku-button 
            value="点击出现模态框" 
            @callback="visible_4 = true"></pku-button>
          <pku-dialog 
            title="标题"
            :fixed="fixed"
            :visible="visible_4"
            @closeEvent="visible_4 = false" >
            <pku-table 
                :rawdata="rawdata" 
                :lens="lenArr" 
                :tolen="len" 
                :pageLen="pageLen" 
                :menu="menu" 
                :exportdata="!exportdata" 
                :pagination="exportdata"></pku-table>
          </pku-dialog>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>visible</td><td>默认为 false，作为模态框的开关</td><td>Boolean</td><td>false</td></tr>
              <tr><td>title</td><td>Dialog 标题</td><td>String</td><td>标题</td></tr>
              <tr><td>fixed</td><td>Dialog 模态框置顶的开关</td><td>Boolean</td><td>false</td></tr>
              <tr><td>submit</td><td>Dialog 模态框确认按钮的开关</td><td>Boolean</td><td>false</td></tr>
              <tr><td>slot</td><td>Dialog 插入的组件内容</td><td>Slot</td><td>-</td></tr>
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
              <tr><td>callback</td><td>点击 Dialog 内部确认按钮的回调函数</td><td>-</td></tr>
              <tr><td>closeEvent</td><td>点击 Dialog 内部关闭按钮时的回调函数</td><td>-</td></tr>
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
  name: 'pkue-dialog',
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
      visible_1: false,
      visible_2: false,
      visible_3: false,
      visible_4: false,
      submit: true,
      fixed: true,
      lenArr: [5, 10, 15], // 每页显示长度设置
      len: 5, // 每页的长度
      pageLen: 5,
      exportdata: true,
      menu: [
        {name: '序号', key: 'id'},
        {name: '编号', key: 'userid'},
        {name: '姓名', key: 'username'}
      ]
    }
  },
  methods: {
    onSubmitEventHandler () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
