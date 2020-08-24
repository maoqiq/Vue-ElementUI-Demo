<template>
  <div id="app">
    <header-top></header-top>
    <router-view/>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop.vue'
export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
html,body{
  height:100%;
}
*{ margin:0; padding:0; }
ul,li{ padding:0;margin:0;list-style:none}
a {
  color: rgba(255,255,255,0.80);
}
/*正常的未被访问过的链接*/
a:link {
  color: rgba(255,255,255,0.80);
}
/*已经访问过的链接*/
a:visited {
  color: rgba(255,255,255,0.80);
}
/*鼠标划过(停留)的链接*/
a:hover {
  color: rgba(255,255,255,0.80);
}
/* 正在点击的链接*/
a:active {
  color: rgba(255,255,255,0.80);
}

#app {
  margin: 0;
  font-family: PingFangSC-Medium, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0,0,0,0.80);
  font-size: 14px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: rgba(0,0,0,0.80);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
