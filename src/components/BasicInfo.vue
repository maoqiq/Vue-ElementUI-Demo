<template>
  <div>
    <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px">
      <div class="center">
        <el-form-item label="姓名" prop="name">
          <el-col :span="6">
            <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="身份证号" prop="idNumber">
          <el-col :span="6">
            <el-input v-model="ruleForm.idNumber" placeholder="请输入18位身份证号码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="本人所在地" prop="region">
          <el-select style="width: 264px; margin-right: 40px;"
                  v-model="selectProvince"
                  placeholder="请选择省份"
                  @change="getProvince($event)">
            <el-option v-for="item in city" :label="item.label"
                      :value="item" :key="item.value">
            </el-option>
          </el-select>
          <el-select style="width: 264px"
                    v-if="selectProvince!=''"
                    v-model="selectCity"
                    placeholder="请选择城市"
                    @change="getCity($event)">
            <el-option v-for="item in cityList" :label="item.label"
                      :value="item" :key="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请选择年龄段" prop="grade">
          <el-col :span="13">
            <el-checkbox-group v-model="ruleForm.grade">
              <el-checkbox v-for="(item,index) in checkList" @change="clickCheckbox(item,index)" :label="item.label" :key="item.label"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-form-item>
      </div>
      <div class="background_gray">
        <div class="center">
          <div class="sub_title">请完善「<span>{{String(ruleForm.grade)}}」</span>信息</div>
          <el-form-item label="就读学校所在地" prop="schoolRegion">
            <el-select style="width: 264px; margin-right: 40px;"
                    v-model="schoolSelectProvince"
                    placeholder="请选择省份"
                    @change="getSchoolProvince($event)">
            <el-option v-for="item in city" :label="item.label"
                      :value="item" :key="item.value">
            </el-option>
          </el-select>
          <el-select style="width: 264px"
                    v-if="schoolSelectProvince!=''"
                    v-model="schoolSelectCity"
                    placeholder="请选择城市"
                    @change="getSchoolCity($event)">
            <el-option v-for="item in schoolCityList" :label="item.label"
                      :value="item" :key="item.value">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="就读学校名称" prop="schoolName">
            <el-col :span="13">
              <el-input v-model="ruleForm.schoolName" placeholder="请输入学校名称"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="就读学校班级" prop="className">
            <el-col :span="13">
              <el-input v-model="ruleForm.className" placeholder="请输入学校班级"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-col :span="13">
              <el-input v-model="ruleForm.phone" placeholder="请输入电话号码"></el-input>
            </el-col>
          </el-form-item>
        </div>
      </div>
      <div class="center">
      <el-form-item>
        <el-col :span="13">
          <el-button type="primary submit_form" @click="submitForm('ruleForm')">保存并进入下一步</el-button>
        </el-col>
      </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
// import { provinceAndCityData } from 'element-china-area-data'
import City from '@/assets/staticData/second-level-address.json'
import Validity from '@/utils/validity.js'
export default {
  data () {
    return {
      nextStep: 1,
      checkList: [
        {
          label: '小学组',
          name: 'grade',
          isChecked: true
        },
        {
          label: '初中组',
          name: 'grade',
          isChecked: false
        },
        {
          label: '高中组',
          name: 'grade',
          isChecked: false
        }
      ],
      // options: provinceAndCityData,
      // selectedOptions: [],
      city: City,
      cityList: [],
      selectProvince: {},
      selectCity: {},
      regionStr: '',
      schoolCityList: [],
      schoolSelectProvince: {},
      schoolSelectCity: {},
      schoolRegionStr: '',
      ruleForm: {
        name: '',
        idNumber: '',
        region: '',
        grade: ['小学组'],
        schoolRegion: '',
        schoolName: '',
        className: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        idNumber: [
          { required: true, message: '请输入18位身份证号码', trigger: 'blur' },
          { validator: Validity.idCardValidity, trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择本人所在地', trigger: 'change' }
        ],
        grade: [
          { type: 'array', required: true, message: '请选择年龄段', trigger: 'change' }
        ],
        schoolRegion: [
          { required: true, message: '请选择就读学校所在地', trigger: 'change' }
        ],
        schoolName: [
          { required: true, message: '请输入就读学校名称', trigger: 'blur' }
        ],
        className: [
          { required: true, message: '请输入就读学校班级', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { validator: Validity.mobilePhoneValidity, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    clickCheckbox (item, index) {
      this.checkList.forEach((element, idx) => {
        if (index === idx) {
          element.isChecked = true
        } else {
          element.isChecked = false
        }
      })
      this.ruleForm.grade = Array(item.label)
    },
    // handleSelectCity (value) {
    //   console.log(value)
    // },
    getProvince (event) {
      if (event) {
        this.cityList = event.children
        this.regionStr = event.label
      } else {
        this.cityList = []
      }
    },
    getCity (event) {
      this.regionStr += event.label
      this.ruleForm.region = this.regionStr
    },
    getSchoolProvince (event) {
      if (event) {
        this.schoolCityList = event.children
        this.schoolRegionStr = event.label
      } else {
        this.schoolCityList = []
      }
    },
    getSchoolCity (event) {
      this.schoolRegionStr += event.label
      this.ruleForm.schoolRegion = this.schoolRegionStr
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
.center{
  .sub_title{
    text-align: left;
    padding: 18px 0 22px 0;
  }
}
.background_gray{
  background-color: #f7f7f7;
}
.el-form-item__content{
  display: flex;
  justify-content: flex-start;
}
.el-checkbox-group {
    font-size: 0;
    display: flex;
    justify-content: space-between;
}
.el-select-dropdown__item,.el-select-dropdown__item.selected {
  color: #606266;
  font-weight: 400;
}
.submit_form{
  float: right;
  margin: 80px 0;
}
</style>
