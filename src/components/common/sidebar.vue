<template>
  <div id="sidebar">
    <ul class="sidebar">
      <li class="sidebar-item" v-for="(item, id) in menu">
        <router-link :to="item.key" v-if="item.url">{{item.name}}</router-link>
        <a v-else>{{item.name}}</a>
        <ul class="nav-list" v-if="item.data">
          <li class="nav-item" @click="onMiniShow(id)" v-for="(val, id) in item.data" :class="{'mini-show': val.show, 'is-label': val.label === true, 'is-tag': val.key === tag}">
            <router-link :to="val.key">{{val.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    tag: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      menu: [
        {
          name: '更新日志',
          key: '/',
          url: true
        },
        {
          name: '开发指南',
          key: '',
          data: [
            {name: '安装', key: 'installation'},
            {name: '快速上手', key: 'quickstart'},
            {name: '自定义主题', key: 'custom'}
          ]
        },
        {
          name: '组件',
          key: 'changelog',
          data: [
            {name: 'Basic', key: '', label: true, show: false},
            {name: 'Button 按钮', key: 'button', show: false},
            {name: 'Dropdown 按钮组', key: 'dropdown', show: false},
            {name: 'Form', key: '', label: true, show: false},
            {name: 'Table 表格', key: 'table', show: false},
            {name: 'Pagination 分页', key: 'pagination', show: false},
            {name: 'Checkbox 多选框', key: 'checkbox', show: false},
            {name: 'Select 选择器', key: 'select', show: false},
            {name: 'Cascader 级联选择器', key: 'cascader', show: false},
            {name: 'Switch 开关', key: 'switch', show: false},
            {name: 'Data', key: '', label: true, show: false},
            {name: 'Tag 标签', key: 'tag', show: false},
            {name: 'Navigation', key: '', label: true, show: false},
            {name: 'Header 导航', key: 'header', show: false},
            {name: 'Banner 横幅', key: 'banner', show: false},
            {name: 'Breadcrumb 面包屑', key: 'breadcrumb', show: false},
            {name: 'Message', key: '', label: true, show: false},
            {name: 'Dialog 模态框', key: 'dialog', show: false},
            {name: 'Messagebox 消息框', key: 'messagebox', show: false},
            {name: 'Loading 载入提示', key: 'loading', show: false},
            {name: 'Notice 提示', key: 'notice', show: false}
          ]
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    onMiniShow (id) {
      let len = this.menu[2].data.length
      for (let i = 0; i < len; i++) {
        this.menu[2].data[i].show = false
      }
      for (let i = id + 1; i < len; i++) {
        if (this.menu[2].data[i].key === '') {
          break
        }
        this.menu[2].data[i]['show'] = true
      }
      for (let i = id; i >= 0; i--) {
        if (this.menu[2].data[i].key === '') {
          break
        }
        this.menu[2].data[i]['show'] = true
      }
    }
  }
}
</script>

<style scoped>
#sidebar {
  position: fixed;
  width: 220px;
  top: 0;
  bottom: 0;
  margin-right: 20px;
  margin-top: 100px;
  padding-bottom: 150px;
  text-align: left;
  overflow-y: scroll;
}
.sidebar-item {
  display: block;
}
.sidebar-item > a{
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  font-weight: 700;
}
.sidebar-item .nav-item a {
  display: block;
  height: 40px;
  color: #444;
  line-height: 40px;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 400;
  transition: all 150ms ease-out;
  text-decoration: none;
  cursor: pointer;
}
.sidebar-item .nav-item a:hover {
  color: #409eff;
}
.nav-list .nav-item.is-label a{
  font-size: 12px;
  color: #999;
  line-height: 26px;
  margin-top: 16px;
  height: 26px;
  cursor: unset;
}
.nav-list .nav-item.is-label a:hover{
  color: #999;
}
ul {
  list-style: none;
}
.nav-list .nav-item.is-tag a{
  color: #409eff;
}
@media (max-width: 768px) {
  .nav-list li{
    display: none;
  }
  .nav-list li.mini-show {
    display: block;
  }
  .nav-list li[class~='is-label']{
    display: block;
  }
}
</style>
