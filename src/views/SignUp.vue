<template>
  <div>
    <header-top></header-top>
    <el-container>
      <el-main>sign up</el-main>
    </el-container>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTop from '@/components/HeaderTop.vue'
import FooterBottom from '@/components/FooterBottom.vue'

export default {
  name: 'Home',
  components: {
    HeaderTop,
    FooterBottom
  }
}
</script>
