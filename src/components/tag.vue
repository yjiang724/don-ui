<template>
  <div id="button">
    <div>
        <h1>Tag 标签</h1>
        <p class="description">用于标记和选择。</p>
    </div>
    <div class="part">
        <h2>基本用法</h2>
        <div class="codeblock">
           <pku-tag type="primary"></pku-tag>
           <pku-tag type="warning"></pku-tag>
           <pku-tag type="danger"></pku-tag>
           <pku-tag type="success"></pku-tag>
           <pku-tag type="default"></pku-tag>
        </div>
    </div>
    <div class="part">
        <h2>可移除标签</h2>
        <p class="description">可以通过设置预置的 class 属性更换不用颜色。</p>
        <div class="codeblock">
            <pku-tag :closable="true" type="primary"></pku-tag>
            <pku-tag :closable="true" type="warning"></pku-tag>
            <pku-tag :closable="true" type="danger"></pku-tag>
            <pku-tag :closable="true" type="success"></pku-tag>
            <pku-tag :closable="true" type="default"></pku-tag>
        </div>
    </div>
    <div class="part">
        <h2>动态编辑标签</h2>
        <p class="description">动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现</p>
        <div class="codeblock">
          <pku-tag :closable="true" type="primary" v-for="(tag, id) in tags" :value="tag.name" :key="id" @close="onCloseEventHandler" v-if="tag.show"></pku-tag>
        </div>
    </div>
    <div class="part">
        <h2>结合输入框设置筛选条件</h2>
        <p class="description">结合输入框设置筛选条件。</p>
        <div class="codeblock">
          <pku-form class="codeform" :inline="false">
            <pku-form-item :label="search" v-for="search in searchs" :key="search">
              <pku-input :border="false" ref="search"></pku-input>
            </pku-form-item>
            <pku-form-item>
                <pku-button @callback="onSubmitEventHandler" value="确定"></pku-button>
            </pku-form-item>
          </pku-form>
          <div class="codetags">
            <pku-tag type="primary" v-for="(tag) in searchTag" :value="tag" :key="tag"></pku-tag>
          </div>
        </div>
    </div>
    <div class="part">
        <h2>Attributes</h2>
        <div class="table">
          <table>
            <thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>
            <tbody>
              <tr><td>type</td><td>主题</td><td>String</td><td>success / info / warning / danger</td>default</tr>
              <tr><td>value</td><td>Tag 标签提示语</td><td>String</td><td>标签</td></tr>
              <tr><td>closable</td><td>是否可关闭</td><td>Boolean</td><td>false</td></tr>
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
              <tr><td>close</td><td>关闭 Tag 时触发的事件</td><td>-</td></tr>
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
  name: 'pkue-tag',
  data () {
    return {
      tags: [
        {name: 'label1', show: true},
        {name: 'label2', show: true},
        {name: 'label3', show: true},
        {name: 'label4', show: true},
        {name: 'label5', show: true}
      ],
      searchs: ['label1', 'label2', 'label3'],
      searchTag: []
    }
  },
  methods: {
    onCloseEventHandler (val) {
      this.tags.forEach((item, id) => {
        if (item.name === val) {
          item.show = false
        }
      })
    },
    onSubmitEventHandler () {
      this.searchTag = []
      for (let i = 0; i < this.$refs.search.length; i++) {
        let item = this.$refs.search[i]
        if (item.value.length > 0) {
          this.searchTag.push(this.searchs[i] + ': ' + item.value)
        }
      }
    }
  }
}
</script>

<style scoped>
.codeblock >>> .tag {
  margin: 0 4px;
}
.codeform {
  display: inline-block;
  width: 300px;
}
.codetags {
  padding: 40px 0;
  vertical-align:top;
  display: inline-block;
}
</style>
