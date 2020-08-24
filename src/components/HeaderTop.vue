<template>
  <div>
    <el-header height="164px">
      <div class="main_header">
        <div class="center">
          <div class="header_label">
            <span><img src="../assets/images/icons/icon_tips.png">中国少年儿童造型艺术汇</span>
          </div>
          <div class="sign_in">
            <span class="connect"><img src="../assets/images/icons/icon_tips.png">0571-88888888</span>
            <span class="connect"><img src="../assets/images/icons/icon_tips.png">CACAart@mail.com</span>
            <div class="login">
              <img src="../assets/images/icons/icon_tips.png"><el-button type="text" @click="linkToSignIn('signUp')">注册</el-button><span> | </span><el-button type="text" @click="linkToSignIn('signIn')">登录</el-button>
            </div>
          </div>
          <div @click="linkToEnter">Enter</div>
        </div>
      </div>
      <div class="sub_header">
        <div class="center">
          <div class="header_tabs">
            <el-tabs v-model="activeTabName" class="custom_tab" type="card" @tab-click="handleClick($event)">
              <el-tab-pane label="首 页" name="home">首 页</el-tab-pane>
              <el-tab-pane label="赛事汇" name="saishihui">赛事汇</el-tab-pane>
              <el-tab-pane label="云展览" name="yunzhanlan">云展览</el-tab-pane>
              <el-tab-pane label="新美育播报" name="xinmeiyubobao">新美育播报</el-tab-pane>
              <el-tab-pane label="合作圈" name="hezuoquan">合作圈</el-tab-pane>
              <el-tab-pane label="证书查询" name="zhengshuchaxun">证书查询</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  // name: 'HeaderTop'
  data () {
    return {
      activeTabName: 'home'
    }
  },
  mounted () {
    console.log(window.location.href)
    console.log(this.$route.path)
    if (this.$route.path !== '/') {
      const pathName = this.$route.path.substring(1)
      console.log(pathName)
      this.activeTabName = pathName
    }
  },
  watch: {
    $route (to, from) {
      console.log(window.location.href)
      console.log(this.$route.path)
      console.log(this.$route.params)
    }
  },
  methods: {
    linkToSignIn (type) {
      console.log(type)
      this.$router.push('/signup')
    },
    linkToEnter () {
      this.$router.push('/enter')
    },
    handleClick (event) {
      console.log(event.label)
      console.log(event.name)
      this.$router.push(`/${event.name}`)
      this.activeTabName = event.name
    }
  }
}
</script>

<style lang="scss">
.el-header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: #ffffff;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  padding: 0;
}
.el-button{
  color:rgba(0,0,0,0.50);
  font-size: 18px;
  // &:hover,:focus,:active{
  //   color: #ffffff;
  //   font-size: 18px;
  // }

}
.main_header{
  font-size: 18px;
  height: 76px;
  line-height: 76px;
  color: rgba(0,0,0,0.50);
  .header_label{
    float: left;
    color: #6A6969;
    span{
      padding: 0 48px 0 0;
      img{
        width: 22px;
        text-align: center;
        vertical-align: middle;
        padding-right: 10px;
      }
    }
  }
  .sign_in{
    color:rgba(0,0,0,0.50);
    float: right;
    .connect{
      margin-left: 24px;
    }
    .login{
      display: inline-block;
      margin-left: 40px;
    }
    img{
      width: 22px;
      text-align: center;
      vertical-align: middle;
      padding-right: 10px;
    }
  }
}
.sub_header{
  background-color: #F6C323;
  color: #ffffff;
  font-size: 24px;
  .center{
    height: 88px;
    line-height: 88px;
    display: flex;
    justify-content: space-between;
  }
}

.custom_tab.el-tabs--card{
  .el-tabs__header {
    border: none;
    margin: 0;
    .el-tabs__nav{
      border: none;
      .el-tabs__item{
        border: none;
        color: #ffffff;
        &.is-active {
          color: #F7B500;
          background: #ffffff;
          border-radius: 12.5px;
        }
      }
    }
  }
  .el-tabs__content {
    display: none;
  }
}
.center{
  width: 84%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
