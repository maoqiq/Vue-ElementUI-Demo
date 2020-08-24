<template>
  <div>
    <el-main>
      <div class="custom-container">
        <div class="center">
          <div class="title">
            <div>填写信息</div>
            <div class="tips">
              <span>请确保录入信息真实有效，以确保填写成功后我们能联系到您</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="center steps">
            <el-steps :active="active" :align-center='true'>
              <el-step :class="active== key+1 ? stepActive: '' " :title="item.title" @click.native ="stepClick(item.index)" v-for="item in stepData" :key ="item.title"></el-step>
            </el-steps>
          </div>
          <div class="basicInfo" v-if="active===0">
            <basic-info @nextStep="changeStep"></basic-info>
          </div>
          <div class="uploadSample" v-if="active===1">
            <registration @nextStep="changeStep"></registration>
          </div>
          <div class="success" v-if="active===2">
            <submit-success></submit-success>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import BasicInfo from '@/components/BasicInfo.vue'
import Registration from '@/components/Registration.vue'
import SubmitSuccess from '@/components/SubmitSuccess.vue'

export default {
  data () {
    return {
      token: '',
      active: 0, // 控制步骤条及填写条目的显示
      stepData: [
        { index: 0, title: '基本信息' },
        { index: 1, title: '作品提交' },
        { index: 2, title: '报名成功' }
      ],
      nextTile: '下一步'
    }
  },
  components: {
    BasicInfo,
    Registration,
    SubmitSuccess
  },
  created () {
  },
  methods: {
    stepClick (stepItem) {
      this.active = stepItem
    },
    changeStep (nextStep) {
      this.active = nextStep
    }
  }
}
</script>

<style lang="scss">
.el-main{
  padding: 0;
}
.custom-container{
  padding: 200px 0;
}
.center{
  width: 74%;
  margin: 0 auto;
  overflow: hidden;
  .title{
    text-align: left;
    font-size: 26px;
    letter-spacing: 0;
    &:first-child{
      padding: 12px 0;
    }
    .tips{
      background-color: #FFFBF4;
      font-size: 12px;
      color: #D58217;
      letter-spacing: 0;
      span{
        background: url('../assets/images/icons/icon_tips.png') no-repeat left center / 18px 18px;
        margin-left: 20px;
        padding-left: 28px;
        line-height: 30px;
        display: inline-block;
      }
    }
  }
  &.steps{
    margin: 32px auto;
    width: 480px;
    font-size: 14px;
    color: #ED4135;
  }
}
.content{
  .el-step{
    .el-step__head{
      &.is-process{
        color: #409eff;
        border-color: #409eff;
      }
      &.is-finish{
        .el-step__line{
        // 当前步骤数横线样式设置
          .el-step__line-inner{
            width: 50% !important;
            border-width: 1px !important;
          }
        }
      // 当前步骤数圆圈样式设置
        .el-step__icon.is-text{
          // background: #409eff;
          border-color: #409eff;
          color:#409eff;
        }
      }
    }
    &.stepActive{
      .el-step__head.is-finish{
        .el-step__line{
          // 当前步骤数横线样式设置
          .el-step__line-inner{
            width: 50% !important;
            border-width: 1px !important;
          }
        }
        // 当前步骤数圆圈样式设置
        .el-step__icon.is-text{
          background: #409eff;
          color:#fff;
        }
      }
    }
  }
}
.el-input__inner{
  height: 46px;
  line-height: 46px;
  border: 1px solid rgba(0,0,0,0.25);
}
</style>
