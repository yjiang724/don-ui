<template>
  <div class="home">
    <pku-breadcrumb style="padding: 0px; font-size: 16px;" :value="menu"></pku-breadcrumb>
    <div style="padding: 30px 0px 0; font-weight: 700;">
    日志没时间打理，点击<a href="https://github.com/yjiang724/vue-pku" target="_BLANK" style="text-decoration: none; color: #409eff; padding: 0 10px;">传送门</a>
    </div>
    <ul>
      <li v-for="item in data">
        <span>{{item.title}}</span>
        <ul>
          <li>{{item.add.title}}
            <ul>
              <li v-for="val in item.add.list">{{val}}</li>
            </ul>
          </li>
          <li v-if="item.update">{{item.update.title}}
            <ul>
              <li v-for="val in item.update.list">{{val}}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menu: ['首页', '更新日志'],
      data: [
        {
          title: '0.6.4 beta 1/10/2018',
          add: {
            title: 'update compontent <pku-message>',
            list: [
              '`<pku-messagebox>` 中 `<pku-button>` 的 `value` 不能自定义，通过将 `<pku-button>` 换成原生 `<button>` 解决'
            ]
          },
          update: {
            title: 'update compontent <pku-table>',
            list: [
              '修改了 `click` 回调时间发生后，`checkbox` 状态变量丢失的情况'
            ]
          }
        },
        {
          title: '0.6.3 beta 1/9/2018',
          add: {
            title: 'update compontent <pku-notice>',
            list: [
              '去除 `autoclose` 参数',
              '添加 ["success", "error", "info", "warning"] 四种提示类型',
              '多个 Notice 会以出现的先后顺序在右侧从上至下排列',
              '多个 Notice 存在时，关闭任意 Notice，其底下 Notice 会向上移动',
              '在 Element UI 源码基础上修改得到'
            ]
          },
          update: {
            title: 'update compontent <pku-messagebox>',
            list: [
              '在 `<pku-notice>` 源码基础上修改得到',
              '更改需要设置的参数和格式',
              '添加了关闭、确认事件的回调函数',
              '`this.$text` 打开后能自动获取焦点，设置输入框的默认值，确认事件时能返回输入框的数据'
            ]
          }
        },
        {
          title: '0.6.2 beta 1/8/2018',
          add: {
            title: 'update compontent',
            list: [
              '<pku-notice>: 每次调用 `this.$notice` 时会额外产生全新的 dom 节点，并且关闭 `notice` 时，节点的高度会自适应调整'
            ]
          }
        },
        {
          title: '0.6.1 beta 1/3/2018',
          add: {
            title: 'update compontent',
            list: [
              '<pku-select>: the Attribute list could be an array of object, add Attribute importKey, if list is array of object, importKey is the showed text in the object, if not, show the item of list, add Attribute exportKey, if list is array of object, exportKey is the callback text in the object, if not, export the item of list',
              '<pku-checkbox> used in the <pku-table>, if the renderdata of <pku-table> changed, the checked status of <pku-checkbox> would not changed. Now fixed!'
            ]
          }
        },
        {
          title: '0.6.0 beta 1/2/2018',
          add: {
            title: '放假休息了3天，回来继续更！',
            list: [
            ]
          },
          update: {
            title: 'add compontent',
            list: [
              'Loading'
            ]
          }
        },
        {
          title: '0.5.0 beta 12/27/2017',
          add: {
            title: 'add compontent',
            list: [
              'notice'
            ]
          },
          update: {
            title: 'update compontent',
            list: [
              '<pku-button>: fix the color of disabled button '
            ]
          }
        },
        {
          title: '0.4.0 beta 12/26/2017',
          add: {
            title: 'add compontent',
            list: [
              'dialog'
            ]
          },
          update: {
            title: 'update compontent',
            list: [
              '<pku-select>: watch `props.value` from vuex, bind the real time value',
              '<pku-messagebox>: add $text method, you can use input in it'
            ]
          }
        },
        {
          title: '0.3.0 beta 12/25/2017',
          add: {
            title: 'add compontents',
            list: [
              'table',
              'pagination'
            ]
          },
          update: {
            title: 'update compontent <pku-button>',
            list: [
              'add callback Event in unfile type button'
            ]
          }
        },
        {
          title: '0.2.0 beta 12/23/2017',
          add: {
            title: 'add compontent',
            list: [
              'select'
            ]
          },
          update: {
            title: 'update: transform length unit from rem to px',
            list: [
            ]
          }
        },
        {
          title: '0.1.0 beta 12/22/2017',
          add: {
            title: 'add compontents',
            list: [
              '$alert',
              '$confirm'
            ]
          }
        },
        {
          title: '0.0.3 beta 12/21/2017',
          add: {
            title: 'add compontents',
            list: [
              'breadcrumb',
              'button',
              'checkbox',
              'switch'
            ]
          }
        },
        {
          title: '0.0.2 beta 12/20/2017',
          add: {
            title: 'add compontent',
            list: [
              'banner'
            ]
          }
        },
        {
          title: '0.0.1 beta 12/19/2017',
          add: {
            title: 'init project',
            list: [
            ]
          }
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: left;
  padding-left: 240px;
}
ul {
  list-style: none;
}
.home > ul {
  padding: 20px 0;
  font-size: 16px;
  line-height: 32px;
}
.home > ul > li > span {
  font-weight: 700;
}
.home > ul > li{
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
.home > ul > li > ul > li::before{
  content: '\20';
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background: #000;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}
.home > ul > li > ul > li{
  text-indent: 2ch;
}
.home > ul > li > ul > li > ul > li::before{
  content: '- ';
}
.home > ul > li > ul > li > ul > li{
  padding-left: 10ch;
  text-indent: -5ch;
}
</style>
