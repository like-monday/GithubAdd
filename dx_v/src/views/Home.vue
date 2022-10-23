<template>
  <div class="home">
    <Search></Search>
    <div class="w">
      <div class="zw">
        <div v-if="isTrue" id="navbar">
          <ul>
            <li>热门推荐</li>
            <li>最新热点</li>
            <li>常用工具</li>
            <li>技术社区</li>
            <li>日常摸鱼</li>
            <li>视频专区</li>
            <li>练习专区</li>
            <li>图片专区</li>
            <li>学习平台</li>
            <li>资源推荐</li>
            <li>效率工具</li>
            <li>简历专区</li>
            <li>工作机会</li>
          </ul>
        </div>
        <div v-else ref="navbar" class="navbar">
          <ul>
            <li>热门推荐</li>
            <li>最新热点</li>
            <li>常用工具</li>
            <li>技术社区</li>
            <li>日常摸鱼</li>
            <li>视频专区</li>
            <li>练习专区</li>
            <li>图片专区</li>
            <li>学习平台</li>
            <li>资源推荐</li>
            <li>效率工具</li>
            <li>简历专区</li>
            <li>工作机会</li>
          </ul>
        </div>
      </div>
      <div class="content">
        <Hot></Hot>
        <HotSpot></HotSpot>
        <CommonTools></CommonTools>
        <Technology></Technology>
        <Entertainment></Entertainment>
      </div>
    </div>
  </div>
  <!-- <div>
        "element-plus": "^1.0.2-beta.28",
    </div> -->
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeUnmount, watch, onUpdated, reactive, toRefs, ref } from 'vue'
import Search from "../components/Home/Search.vue"
import Hot from "../components/Home/Hot.vue"
import HotSpot from "../components/Home/HotSpot.vue"
import CommonTools from "../components/Home/CommonTools.vue"
import Technology from "../components/Home/Technology.vue"
import Entertainment from "../components/Home/Entertainment.vue"

// onMounted(() => {
// 		});

let isTrue = ref(true)

onMounted(() => {
     // 监听滚动条位置
     window.addEventListener('scroll', scrollTop, true)
     }
 )
 // 实时滚动条高度
 const scrollTop = () => {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scroll)
      if(scroll > 140){
        isTrue.value = false
      }else{
        isTrue.value = true
      }
}


</script>
 
<style lang = "less" scoped>
.home {
  max-width: 1440px;
  min-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 70px;

  .w {
    width: 100%;
    display: flex;

    .zw {
      width: 111px;
      height: 700px;

      #navbar {
        border: 1px solid #000;
        width: 100px;
        height: 700px;
        background-color: #fff;
        border-radius: 10px;

        ul {
          display: flex;
          flex-direction: column;
          // align-content: space-between;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 15px 10px;
          box-shadow: 0px -8px 0px 0px #2a82e4;
          border-radius: 10px;

          li {
            padding: 7px 0;
            text-align: center;
            height: 20px;
            border-radius: 8px;
            // background-color: #0077f7;
          }

          li:nth-child(2) {
            background-color: rgba(42, 130, 228, 0.14);
          }
        }
      }

      .navbar {
        position: fixed;
        top: 90px;
        border: 1px solid #000;
        width: 100px;
        height: 700px;
        background-color: #fff;
        border-radius: 10px;

        ul {
          display: flex;
          flex-direction: column;
          // align-content: space-between;
          justify-content: space-between;
          width: 100px;
          height: 100%;
          box-sizing: border-box;
          padding: 15px 10px;
          box-shadow: 0px -8px 0px 0px #2a82e4;
          border-radius: 10px;

          li {
            padding: 7px 0;
            text-align: center;
            height: 20px;
            border-radius: 8px;
            // background-color: #0077f7;
          }

          li:nth-child(2) {
            background-color: rgba(42, 130, 228, 0.14);
          }
        }
      }

    }

    .content {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0 0 50px;
    }
  }
}
</style>
