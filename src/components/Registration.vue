<template>
  <div>
    <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="188px">
      <div class="center">
        <el-form-item label="作品类型" prop="type">
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
        <el-form-item label="作品材质" prop="classify">
          <el-select style="width: 264px; margin-right: 40px;"
                  v-model="selectClassify"
                  placeholder="请选择作品材质"
                  @change="getClassify($event)">
            <el-option v-for="item in classifyList" :label="item.label"
                      :value="item" :key="item.value">
            </el-option>
          </el-select>
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
        <el-form-item label="作品备注说明" prop="remarks">
          <el-col :span="13">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入作品备注说明"
              v-model="ruleForm.remarks"
              maxlength="200"
              show-word-limit
            >
            </el-input>
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
    return {
      nextStep: 2,
      typeList: [
        {
          label: '雕塑手工',
          name: 'type',
          isChecked: true,
          type: 'Handwork'
        },
        {
          label: '书法',
          name: 'type',
          isChecked: false,
          type: 'Handwriting'
        },
        {
          label: '数字绘画',
          name: 'type',
          isChecked: false,
          type: 'DigitalPainting'
        },
        {
          label: '绘画',
          name: 'type',
          isChecked: false,
          type: 'Painting'
        }
      ],
      classifyOptionList: ClassifyOptionList,
      selectClassify: {},
      classifyList: [],
      ruleForm: {
        type: ['雕塑手工'],
        productionName: '',
        classify: '',
        originality: '',
        remarks: ''
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
        originality: [
          { required: true, message: '请输入作品创意文字说明', trigger: 'change' }
        ]
      }
    }
  },
  created: function () {
    this.getClassifyOptionList(this.typeList[0].type)
  },
  // mounted: function () {
  //   this.$nextTick(function () {
  //     // Code that will run only after the
  //     // entire view has been rendered
  //   })
  // },
  methods: {
    clickCheckbox (item, index) {
      this.typeList.forEach((element, idx) => {
        if (index === idx) {
          element.isChecked = true
        } else {
          element.isChecked = false
        }
      })
      // const checkedArr = this.typeList.filter(item => item.isChecked === true)
      this.ruleForm.type = Array(item.label)
      this.getClassifyOptionList(item.type)
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
    getClassify (event) {
      console.log(event)
      this.ruleForm.classify = event.label
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

<style>

</style>
