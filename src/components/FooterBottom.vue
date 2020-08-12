<template>
  <el-container>
  <el-footer height="200px">
    <div class="center">Footer
    </div>
    </el-footer>
</el-container>
</template>

<script>
export default {
  name: 'FooterBottom'
}
</script>

<style>
.el-footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
}
.center{
    width: 84%;
    margin: 0 auto;
    overflow: hidden;
}
</style>
