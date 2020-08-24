<template>
  <div>
    <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="188px">
      <div class="center">
        <el-form-item class="required_style" label="作品编号" prop="number">
          <el-col :span="13">
            <div class="id_number">{{number}}</div>
          </el-col>
        </el-form-item>
        <el-form-item label="比赛类型" prop="type">
          <el-col :span="13">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox v-for="(item,index) in typeList" @change="clickCheckbox(item,index)" :label="item.label" :key="item.label"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-form-item>
        <el-form-item label="作品名称" prop="productionName">
          <el-col :span="13">
            <el-input v-model="ruleForm.productionName" placeholder="请输入作品名称"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="作品类型" prop="classify">
          <el-select style="width: 264px; margin-right: 40px;"
                  v-model="selectClassify"
                  placeholder="请选择作品材质"
                  @change="getClassify($event)">
            <el-option v-for="item in classifyList" :label="item.label"
                      :value="item" :key="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作品视角图" prop="picture">
          <div class="upload_picture">
            <span class="upload_picture_tips">图片电子文件请上传JPG格式，组图/连环画最多不要6张。每张大小不得小于2 MB，不得超过20 MB</span>
            <el-upload
              class="picture-uploader"
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              :limit='5'
              :on-exceed='uploadOverrun'
              :http-request='submitUpload'
              :before-upload="beforeAvatarUpload">
                <i slot="default" class="el-icon-plus picture-uploader-icon"></i>
                <div slot="file" slot-scope="{file}">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                  >
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
            </el-upload>
          </div>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="指导老师" prop="teacher">
          <el-col :span="13">
            <el-input v-model="ruleForm.teacher" placeholder="请输入指导老师姓名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="作品创意文字说明" prop="originality">
          <el-col :span="13">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入作品创意文字说明"
              v-model="ruleForm.originality"
              maxlength="200"
              show-word-limit
            >
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item prop="check" class="check_themselves">
          <el-col :span="13">
            <el-checkbox v-model="ruleForm.checked">本人承诺作品为原创</el-checkbox>
          </el-col>
        </el-form-item>
        <el-form-item class="save_submit">
          <el-button type="primary" @click="submitForm('ruleForm')">保存并进入下一步</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import ClassifyOptionList from '@/assets/staticData/productionTypeList.js'
export default {
  data () {
    const checkByThemselves = (rule, value, callback) => {
      if (value === false) {
        callback(new Error('请勾选本人承诺作品为原创'))
      } else callback()
    }
    return {
      number: '1010000012345',
      nextStep: 2,
      typeList: [
        {
          label: '雕塑手工',
          name: 'type',
          isChecked: true,
          type: 'Handwork',
          pages: [4]
        },
        {
          label: '书法',
          name: 'type',
          isChecked: false,
          type: 'Handwriting',
          pages: [1]
        },
        {
          label: '数字绘画',
          name: 'type',
          isChecked: false,
          type: 'DigitalPainting',
          pages: [1, 6]
        },
        {
          label: '绘画',
          name: 'type',
          isChecked: false,
          type: 'Painting',
          pages: [1]
        }
      ],
      currentType: {},
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      classifyOptionList: ClassifyOptionList,
      selectClassify: {},
      classifyList: [],
      ruleForm: {
        type: ['雕塑手工'],
        productionName: '',
        classify: '',
        teacher: '',
        originality: '',
        checked: true
      },
      rules: {
        type: [
          { type: 'array', required: true, message: '请选择作品类型', trigger: 'change' }
        ],
        productionName: [
          { required: true, message: '请输入作品名称', trigger: 'change' }
        ],
        classify: [
          { required: true, message: '请选择作品材质', trigger: 'change' }
        ],
        picture: [
          { type: 'array', required: true, message: '请根据要求上传作品视角图', trigger: 'change' }
        ],
        teacher: [
          { required: true, message: '请输入指导老师姓名', trigger: 'change' }
        ],
        originality: [
          { required: true, message: '请输入作品创意文字说明', trigger: 'change' }
        ],
        check: [
          { validator: checkByThemselves, trigger: 'blur' }
        ]
      }
    }
  },
  created: function () {
    this.getClassifyOptionList(this.typeList[0].type)
    this.currentType = this.typeList[0]
  },
  // mounted: function () {
  //   this.$nextTick(function () {
  //     // Code that will run only after the
  //     // entire view has been rendered
  //   })
  // },
  methods: {
    clickCheckbox (item, index) {
      console.log(item)
      this.typeList.forEach((element, idx) => {
        if (index === idx) {
          element.isChecked = true
          this.currentType = element
        } else {
          element.isChecked = false
        }
      })
      // const checkedArr = this.typeList.filter(item => item.isChecked === true)
      this.ruleForm.type = Array(item.label)
      this.getClassifyOptionList(item.type)
      this.defaultPictureSum()
    },
    // 根据checkbox显示不同的options
    getClassifyOptionList (selectType) {
      for (const type in this.classifyOptionList) {
        const element = this.classifyOptionList[type]
        if (selectType === type) {
          this.classifyList = element
        }
      }
    },
    // 根据checkbox显示不同的图片数量
    defaultPictureSum () {
      console.log(this.currentType)
    },
    getClassify (event) {
      console.log(event)
      this.ruleForm.classify = event.label
    },
    uploadOverrun () {

    },
    submitUpload () {

    },
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片必须是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$emit('nextStep', this.nextStep)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.el-form-item{
  .el-form-item__content{
    .id_number{
      text-align: left;
    }
    .upload_picture{
      text-align: left;
      .upload_picture_tips{
        font-size: 12px;
        color: #D58217;
      }
    }
  }
  &.required_style{
    .el-form-item__label:before {
        content: '*';
        color: #F56C6C;
        margin-right: 4px;
    }
  }
  &.check_themselves{
  .el-form-item__content{
    margin-left: 0 !important;
    text-align: left;
  }
}
}
.picture-uploader .el-upload {
  background: rgba(0,0,0,0.09);
  border: 1px solid rgba(0,0,0,0.25);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  .picture-uploader .el-upload:hover {
    border-color: #409EFF;
    }
    .picture-uploader-icon {
    font-size: 28px;
    color: #ffffff;
    width: 222px;
    height: 178px;
    line-height: 118px;
    text-align: center;
    }
    .upload_tips{
    position: absolute;
    bottom: 12px;
    left: center;
    left: 0;
    right: 0;
    font-size: 10px;
    color: #FFFFFF;
    }
    .avatar {
    width: 222px;
    height: 178px;
    display: block;
    }
}
</style>
