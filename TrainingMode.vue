<template>
  <!-- 校招生专区-培养模式 -->
  <div id="TrainingMode">
    <!-- 左侧导航栏start -->
    <div class="SubMenu"><SubMenu @sendClass="getClass" /></div>
    <!-- 左侧导航栏start -->

    <!-- 滚动图片区start -->
    <div class="content">
      <div class="title">菁幹班培养模式介绍</div>
      <!-- 轮播图 Start -->
      <div class="navbar">
        <div
          class="imgList"
          v-for="(item, index) in navBar"
          ref="imgList"
          :key="index"
        >
          <img :src="item.url" alt="" @click="showImg($event)" />
          <span>{{ item.content }}</span>
        </div>
      </div>
      <!-- 轮播图 End -->
      <!-- 介绍内容start -->
      <div>具体介绍内容：</div>
      <!-- 介绍内容end -->
    </div>
    <!-- 滚动图片区end -->

    <!-- 图片点击弹出框start -->
    <el-dialog title="查看图片" :visible.sync="dialogVisible" width="50%">
      <img :src="bigImg" style="width: 100%" alt="" />
    </el-dialog>
    <!-- 图片点击弹出框end -->
  </div>
</template>

<script>
import SubMenu from './SubMenu.vue'
export default {
  name: 'TrainingMode',
  components: { SubMenu },
  data () {
    return {
      navBar: [ // 图片数据
        {
          id: '5',
          url: 'http://10.167.214.11:8011/forward/edufile/uploadFile/2020-11-13/20201113144506703.jpg',
          content: '这个是讲师上课的情景'
        },
        {
          id: '1',
          url: 'http://10.167.214.11:8011/forward/edufile/uploadFile/2022-06-11/20220611150005973.jpg',
          content: '同学们在室外大合照'
        },
        {
          id: '2',
          url: 'http://10.167.214.11:8011/forward/edufile/uploadFile/2022-06-11/20220611150016547.jpg',
          content: '校招新入职新人训'
        },
        {
          id: '4',
          url: 'http://10.167.214.11:8011/forward/edufile/uploadFile/2022-06-11/20220611150016609.jpg',
          content: '好象是在举办元旦晚会呀'
        }
      ],
      class: '', // 当前显示哪个班别的详情
      sumWidth: 0, // 图片总宽度
      dialogVisible: false, // 控制弹出框
      bigImg: '' // 放大后的图片地址
    }
  },
  created () {
    // 复制一份图片集合
    this.navBar.forEach((element) => {
      this.navBar.push(element)
    })
  },
  mounted () {
    this.getWidth()
  },
  methods: {
    // 获取全部图片的总宽度
    getWidth () {
      setTimeout(() => {
        // console.log(this.$refs.imgList[0].offsetWidth)
        this.$refs.imgList.forEach(element => {
          //   console.log(element.offsetWidth)
          this.sumWidth += element.offsetWidth
        })
      }, 2000)
    },
    // 放大图片
    showImg (e) {
      this.bigImg = e.target.currentSrc
      this.dialogVisible = true
    },
    // 接收子组件传递过来的班别信息
    getClass (data) {
      this.class = data
    }
  }
}
</script>

<style lang="scss" scoped>
#TrainingMode {
  display: flex;

  .content {
    overflow: hidden;
    width: 100%;

    .title {
      margin: 0 auto;
      width: 180px;
      font-size: 20px;
      font-weight: 600;
    }

    .navbar {
      display: flex;
      margin: 20px 0;

      .imgList {
        animation: rolling 18s linear infinite;
        height: 140px;
        margin-right: 10px;
        position: relative;

        img {
          height: 100%;
        }
        span {
          width: 100%;
          height: 30px;
          color: #fff;
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
        }
        @keyframes rolling {
          from {
            transform: translateX(0px);
          }

          to {
            transform: translateX(-953px);
          }
        }
      }
    }
  }
}
</style>
