<template>
  <el-container>
  <el-header height="76px">
    <div class="center">
      <div class="connection">
        <span><img src="../assets/images/icon_phone.png">0571-88888888</span>
        <span><img src="../assets/images/icon_email.png">CACAart@mail.com</span>
      </div>
      <div class="sign_in">
        <el-button type="text" @click="linkToSignIn('signUp')">注册</el-button><span> | </span><el-button type="text" @click="linkToSignIn('signIn')">登录</el-button>
      </div>
      <div @click="linkToEnter">Enter</div>
    </div>
  </el-header>
</el-container>
</template>

<script>
export default {
  // name: 'HeaderTop'
  methods: {
    linkToSignIn (type) {
      console.log(type)
      this.$router.push('/signup')
    },
    linkToEnter () {
      this.$router.push('/enter')
    }
  }
}
</script>

<style lang="scss">
.el-header {
    background-color: #F6C323;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    line-height: 76px;
}
.el-button{
  color: #ffffff;
  font-size: 18px;
  &:hover,:focus,:active{
    color: #ffffff;
    font-size: 18px;
  }

}
.center{
    width: 84%;
    margin: 0 auto;
    overflow: hidden;
}
.connection{
    float: left;
    span{
      padding: 0 48px 0 0;
      img{
        width: 22px;
        text-align: center;
        vertical-align: middle;
        padding-right: 20px;
      }
    }
}
.sign_in{
  float: right;
}
</style>
