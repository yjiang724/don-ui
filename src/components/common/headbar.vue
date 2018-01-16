<template>
  <div id="headbar">
    <div class="headbar">
      <div class="logo">
        <img src="./../../assets/pkulogo_white.png">
      </div>
      <div class="menu">
        <ul>
          <li><a>Guide</a></li>
          <li><a class="is-active">Component</a></li>
          <li><a>Version</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headbar',
  components: {
  }
}
</script>

<style scoped>
#headbar {
  background-color: #8f000b;
  height: 120px;
  line-height: 120px;
  position: fixed;
  width: 100%;
  z-index: 1;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.headbar {
  max-width: 1120px;
  width: 96%;
  margin: 0 auto;
}
.headbar::after {
  content: '\20';
  display: block;
  height: 0;
  clear: both;
}
.logo {
  float: left;
}
.logo img {
  vertical-align: middle;
}
.menu {
  float: right;
  height: 80px;
  margin: 20px 0;
  line-height: 80px;
}
ul {
  list-style:none;
}
li {
  position: relative;
  display: inline-block;
}
li a {
  color: #e5e3e3;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  display: block;
  padding: 0 22px;
  cursor: pointer;
}
li a:hover {
  color: #ffffff;
}
a.is-active::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 15px;
    left: calc(50% - 20px);
    width: 40px;
    height: 3px;
    background: #ff9607;
}
@media (max-width: 768px) {
  #headbar {
    height: 60px;
    line-height: 60px;
  }
  a.is-active::after {
    bottom: 5px;
  }
  img {
    height: 30px;
  }
  .menu {
    height: 40px;
    margin: 10px 0;
    line-height: 40px;
  }
  li a {
    font-size: 12px;
    padding: 0 6px;
  }
}
</style>
