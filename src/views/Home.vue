<template>
  <div class="home">
    <el-main>
      <div class="home_container">
        <el-carousel height="600px" :autoplay="false">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgSrc" style="width: 100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="home_center">
        <div class="home_sub_enter">
          <div v-for="item in subIconList" :key="item.id">
            <img :src="item.imgSrc">
            <p :class="{'first_style':item.id === 0, 'second_style':item.id === 1, 'third_style':item.id === 2}" class="enter_title">{{item.title}}</p>
            <p :style="{color:item.subFontColor}" class="enter_sub">{{item.subTitle}}</p>
          </div>
        </div>
        <div class="diplay_list">
          <div class="list_header">
            <p class="list_title">云展览</p>
            <p class="more">更多 ></p>
          </div>
          <div class="list_groups">
            <div class="list_item" v-for="(item,index) in displayList" :key="index">
              <div class="img_background">
                <div class="img_content">
                  <img :src="item.imgSrc">
                </div>
              </div>
              <div class="img_info">
                <span>{{item.author}}</span>
                <span>{{item.rank}}</span>
                <span class="icon like_icon">{{item.likeSum}}</span>
                <span class="icon forward_icon">{{item.forward}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="news_list">
          <div class="list_header">
            <p class="list_title">新美育播报</p>
            <p class="more">更多 ></p>
          </div>
          <div class="news_content">
            <div class="news_left">
              <el-carousel height="368px" :autoplay="false">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                  <img :src="item.imgSrc" style="width: 100%;">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="news_right">
              <ul ref="control" :class="{anim:animate==true}" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
                <li class="news_list_item" v-for="(item,index) in newsItems" :key="index">{{item.title}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="partner_list">
          <div class="list_header">
            <p class="list_title">合作机构</p>
          </div>
          <div class="list_group">
            <div class="list_item" v-for="(item,index) in partnerList" :key="index">
              <div class="list_item_background">
                <img :src="item.logoSrc">
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterBottom from '@/components/FooterBottom.vue'

export default {
  name: 'Home',
  data () {
    return {
      imgHeight: '',
      // banner图片地址数组
      bannerList: [
        {
          id: 0,
          imgSrc: require('../assets/images/banners/banner_01.jpeg')
        },
        {
          id: 1,
          imgSrc: require('../assets/images/banners/banner_02.jpeg')
        },
        {
          id: 2,
          imgSrc: require('../assets/images/banners/banner_03.jpeg')
        }
      ],
      // 图片父容器高度
      bannerHeight: 600,
      // 浏览器宽度
      screenWidth: 0,
      // three sub tabss list
      subIconList: [
        {
          id: 0,
          imgSrc: require('../assets/images/icons/img_sub_type_01.png'),
          title: '大赛背景',
          subTitle: '中国少年儿童造型艺术学会',
          subFontColor: '#F76D6D'
        },
        {
          id: 1,
          imgSrc: require('../assets/images/icons/img_sub_type_02.png'),
          title: '新美育',
          subTitle: '新时代多学科交叉交融',
          subFontColor: '#E79327'
        },
        {
          id: 2,
          imgSrc: require('../assets/images/icons/img_sub_type_03.png'),
          title: '云展览',
          subTitle: '数字化展示与体验方式',
          subFontColor: '#6095D2'
        }
      ],
      // 展览列表数据
      displayList: [
        {
          imgSrc: require('../assets/images/icons/img_sub_type_01.png'),
          gameTitle: '中国少年儿童造型艺术雕塑手工比赛',
          author: '潇小小',
          rank: '一等奖',
          likeSum: 450,
          forward: 670
        },
        {
          imgSrc: require('../assets/images/icons/img_sub_type_02.png'),
          gameTitle: '中国少年儿童造型艺术雕塑手工比赛',
          author: '满笑笑',
          rank: '一等奖',
          likeSum: 450,
          forward: 670
        },
        {
          imgSrc: require('../assets/images/icons/img_sub_type_01.png'),
          gameTitle: '中国少年儿童造型艺术雕塑手工比赛',
          author: '满笑笑',
          rank: '一等奖',
          likeSum: 450,
          forward: 670
        },
        {
          imgSrc: require('../assets/images/icons/img_sub_type_02.png'),
          gameTitle: '中国少年儿童造型艺术雕塑手工比赛',
          author: '满笑笑',
          rank: '一等奖',
          likeSum: 450,
          forward: 670
        },
        {
          imgSrc: require('../assets/images/icons/img_sub_type_01.png'),
          gameTitle: '中国少年儿童造型艺术雕塑手工比赛',
          author: '满笑笑',
          rank: '一等奖',
          likeSum: 450,
          forward: 670
        },
        {
          imgSrc: require('../assets/images/icons/img_sub_type_02.png'),
          gameTitle: '中国少年儿童造型艺术雕塑手工比赛',
          author: '满笑笑',
          rank: '一等奖',
          likeSum: 450,
          forward: 670
        }
      ],
      animate: false,
      // news banner
      // news列表数组
      newsItems: [
        { title: '1--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' },
        { title: '2--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' },
        { title: '3--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' },
        { title: '4--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' },
        { title: '5--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' },
        { title: '6--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' },
        { title: '7--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' },
        { title: '8--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' },
        { title: '9--3D打印在艺术造型中的运用XXXXXXXXXXXXXXXXXXXXXXXXXX' }
      ],
      partnerList: [
        { name: '中国美术学院', logoSrc: require('../assets/images/icons/img_sub_type_01.png') },
        { name: '少儿艺术教育', logoSrc: require('../assets/images/icons/img_sub_type_02.png') },
        { name: '中国儿童少年基金会', logoSrc: require('../assets/images/icons/img_sub_type_01.png') },
        { name: '中国美术学院', logoSrc: require('../assets/images/icons/img_sub_type_03.png') },
        { name: '中国美术学院', logoSrc: require('../assets/images/icons/img_sub_type_02.png') },
        { name: '中国美术学院', logoSrc: require('../assets/images/icons/img_sub_type_01.png') },
        { name: '中国美术学院', logoSrc: require('../assets/images/icons/img_sub_type_03.png') },
        { name: '中国美术学院', logoSrc: require('../assets/images/icons/img_sub_type_01.png') }
      ]
    }
  },
  components: {
    FooterBottom
  },
  mounted () {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth
    this.setSize()
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.setSize()
    }
    // 消息滚动
    this.timer = setInterval(this.scroll, 3000)
  },
  methods: {
    setSize () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = 600 / 1920 * this.screenWidth
    },
    scroll () {
      const control = this.$refs.control
      control.style.marginTop = '-60px'
      this.animate = !this.animate
      const that = this // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function () {
        that.newsItems.push(that.newsItems[0])
        that.newsItems.shift()
        control.style.marginTop = '0px'
        that.animate = !that.animate // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 2000)
    },
    mouseEnter () {
      clearInterval(this.timer)
    },
    mouseLeave () {
      this.timer = setInterval(this.scroll, 3000)
    }
  }
}
</script>
<style lang="scss">
.el-main{
  padding: 0;
  padding-top: 164px;
}
.home_center{
  height: 90%;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  .home_sub_enter{
    margin: 48px 0;
    display: flex;
    justify-content: space-between;
    img{
      width: 261px;
    }
    .enter_title{
      padding: 12px;
      font-size: 16px;
    }
    .first_style{
      background: linear-gradient(to right, #EB4444, #FF7B41);
      -webkit-background-clip: text;
      color: transparent
    }
    .second_style{
      background: linear-gradient(to right, #FFDD34, #EE8708);
      -webkit-background-clip: text;
      color: transparent
    }
    .third_style{
      background: linear-gradient(to right, #15A8F3, #32DCFF);
      -webkit-background-clip: text;
      color: transparent
    }
  }
  .list_header{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    .list_title{
      margin: 0;
      font-size: 28px;
      color: #000000;
      background: url('../assets/images/icons/icon_tips.png') no-repeat left bottom / 120px 30px;
      width: 120px;
      height: 48px;
      text-align: left;
    }
    .more{
      font-size: 16px;
      color: rgba(139,139,139,0.80);

    }
  }
  .diplay_list{
    margin: 100px 0;
    .list_groups{
      margin: 28px 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .list_item{
        width: 268px;
        height: 360px;
        margin-right: 22px;
        .img_background{
          width: 268px;
          height: 268px;
          background: rgba(216,216,216,0.36);
          overflow: hidden;
          .img_content{
            margin: 16px;
            overflow: hidden;
            img{
              height: 236px;
            }
          }
        }
        .img_info{
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          span{
            width: 48%;
            text-align: left;
            font-size: 14px;
            color: rgba(139,139,139,0.80);
            padding: 6px 0;
            &.icon{
              padding-left: 16px;
              width: 42%;
            }
            &.icon.like_icon{
              background: url('../assets/images/icons/icon_tips.png') no-repeat left center / 12px;
            }
            &.icon.forward_icon{
              background: url('../assets/images/icons/icon_tips.png') no-repeat left center / 12px;
            }
          }
        }
      }
    }
  }
  .news_list{
    .list_title{
      background: url('../assets/images/icons/icon_tips.png') no-repeat left bottom / 180px 30px;
      width: 180px;
      height: 48px;
    }
    .news_content{
      display: flex;
      flex-direction: row;
      height: 368px;
      margin: 24px 0;
      .news_left{
        width: 620px;
        background: #f1f1f1;
      }
      .news_right{
        margin-left: 60px;
        overflow: hidden;
        width: 42%;
          transition: all 2s;
        .anim{
          transition: all 2s;
        }
        .news_list_item{
          font-size: 16px;
          color: rgba(0,0,0,0.85);
          // padding: 20px 0;
          height: 60px;
          line-height: 60px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  .partner_list{
    margin: 100px 0;
    .list_title{
      background: url('../assets/images/icons/icon_tips.png') no-repeat left bottom / 160px 30px;
      width: 160px;
      height: 48px;
    }
    .list_group{
      display: flex;
      overflow-x: auto;
      justify-content: flex-start;
      flex-wrap: nowrap;
      padding-top: 18px;
      .list_item{
        padding: 18px;
        .list_item_background{
          width: 198px;
          height: 198px;
          overflow: hidden;
          border-radius: 50%;
          border: 1px solid rgba(226,226,226,0.50);
          box-shadow: 2px 2px 10px 5px rgba(226,226,226,0.50);
          flex: none;
          img{
            width: 198px;
          }
        }
      }
    }
  }
}
</style>
