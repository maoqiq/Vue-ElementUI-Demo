<template>
  <el-footer height="200px">
    <div class="footer_center">
      <div class="footer_content">
        <div class="content_item">
          <p class="item_title">关于我们</p>
          <div class="item_sub about">
            <p>中国少年儿童造型艺术学会（China Association For Childrenis Art）是文化部批准，民政部注册登记，以少年儿童造型艺术为范畴的全国性艺术类社会团体</p>
            <p class="copyright">版权所有保留2019-2020   XXXXX版权所有</p>
          </div>
        </div>
        <div class="content_item">
          <p class="item_title">联系我们</p>
          <div class="item_sub contact">
            <div>
              <p>咨询电话</p>
              <p class="value">0571-12345678</p>
            </div>
            <div>
              <p>联系邮箱</p>
              <p class="value">aasddff@Hotmail.com</p>
            </div>
          </div>
        </div>
        <div class="content_item">
          <p class="item_title">友情链接</p>
          <div class="item_sub">
            <a href="#">中国少年儿童造型艺术学会</a>
            <a href="#">中国少年儿童造型艺术学会</a>
            <a href="#">中国少年儿童造型艺术学会</a>
            <a href="#">中国少年儿童造型艺术学会</a>
          </div>
        </div>
        <div class="content_item qr_code">
          <img src="../assets/images/icons/img_wechat.png">
        </div>
      </div>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'FooterBottom'
}
</script>

<style lang="scss">
.el-footer{
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0; */
  background: #525252;
  padding: 42px 0;
}
.footer_center {
  color: rgba(255,255,255,0.80);
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  .footer_content{
    text-align: left;
    display: flex;
    justify-content: space-between;
    .content_item{
      .item_title{
        font-size: 20px;
        margin-bottom: 12px;
      }
      .item_sub{
        height: 80px;
        font-size: 12px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &.about{
          width: 320px;
        }
      }
      &.qr_code{
        width: 122px;
        height: 122px;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>
