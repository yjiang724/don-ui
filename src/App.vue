<template>
  <div id="app">
    <pku-header logo="/static/img/logo.jpg" :methods="methods"></pku-header>
    <div id="wrapper">
      <sidebar :tag="tag"></sidebar>
      <router-view id="content"/>
    </div>
  </div>
</template>

<script>
import headbar from '@/components/common/headbar'
import sidebar from '@/components/common/sidebar'

export default {
  name: 'pkue',
  data () {
    return {
      tag: '',
      methods: ['没想好放什么']
    }
  },
  mounted () {
    this.tag = this.$router.history.current.name
  },
  methods: {
  },
  watch: {
    '$route' (to, from) {
      this.tag = to.name
    }
  },
  components: {
    headbar,
    sidebar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Helvetica Neue', 'Helvetica', 'PingFang SC', 'Avenir', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#wrapper {
  max-width: 1080px;
  width: 96%;
  margin: 0 auto;
}
#wrapper h1 {
  font-size: 28px;
  font-weight: 400;
}
#wrapper .description {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
  margin: 12px 0;
}
#wrapper h2 {
  font-size: 22px;
  font-weight: 400;
  color: #1f2f3d;
  margin-bottom: 20px;
}
#wrapper .part {
  margin: 50px 0 20px;
}
#wrapper .codeblock {
  text-align: left;
  padding: 20px;
  border: 1px solid #ebebeb;
  transition: all 300ms ease;
}
#wrapper .codeblock:hover {
  box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5);
}
.codeblock > ul{
  padding: 10px 30px;
}
.codeblock > ul li {
  background-color: #f9fafc;
  padding: 0 4px;
  color: #5e6d82;
  font-size: 14px;
  border: 1px solid #eaeefb;
  margin-bottom: 4px;
  border-radius: 4px;
}
#wrapper .part > .table table{
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
}
#wrapper .part > .table table th {
  border-bottom: 1px solid #d8d8d8;
  padding: 15px;
  max-width: 250px;
  text-align: left;
  white-space: nowrap;
  color: #5e6d82;
}
#wrapper .part > .table table td {
  padding: 15px;
  border-bottom: 1px solid #d8d8d8;
}
.part-arrow {
  display: flex;
  justify-content: space-between;
  margin: 100px 0 100px;
}
.arrow-left a, .arrow-right a{
  color: #333;
  font-size: 14px;
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: color 300ms ease;
}
.part-arrow a:hover{
  color: #409eff;
}
.part-arrow svg {
  vertical-align: middle;
} 
.part-arrow span{
  padding: 0 10px;
  vertical-align: middle;
}
#content {
  padding-top: 100px;
  padding-left: 260px;
  text-align: left;
}
@media (max-width: 768px) {
  #wrapper #sidebar {
    position: relative;
    width: 96%;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 20px;
  }
  #content {
    padding: 0 10px;
  }
  #wrapper {
    padding: 0px 0;
  }
  .codeblock button.btn {
    min-width: 80px;
    margin: 5px;
  }
}
</style>
