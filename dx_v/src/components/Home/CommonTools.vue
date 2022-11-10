<template>
  <!-- 常用工具 -->
  <div class="commonTools">
    <div class="title">
      <span class="span_bg">常用工具</span>
      <span>VSCode必备插件</span>
    </div>
    <div class="line"></div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in commonToolsData.arr ">
          <a :href="item.https" target="_blank">
            <img :src="item.icon" alt="">
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup>
import { onMounted, onUnmounted, onBeforeUnmount, watch, onUpdated, reactive, toRefs, ref } from 'vue'
import {
  reqDocument
} from "../../api/Document/index";

let search_form = reactive({
  pagesize: 100, // 每页展示条数
  page: 1, // 当前页数
  type: 'CommonTools'
})

let commonToolsData = reactive({
  arr: []
})

let getDocuments = function () {
  reqDocument(search_form).then((result) => {
    commonToolsData.arr = result.data.data
  })
}
onMounted(() => {
  getDocuments()
});

</script>
 
<style lang = "less" scoped>
.commonTools {
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 15px 20px 20px 20px;
  background-color: #fff;

  .title {
    span {
      padding: 5px 5px;
      display: inline-block;
      margin-right: 20px;
    }

    .span_bg {
      background-color: rgba(8, 155, 255, 0.12);
    }
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: #f5f7fd;
    margin: 10px 0 0 0;
  }

  .content {
    ul {
      overflow: hidden;

      li {
        margin-top: 15px;
        float: left;
        width: 16.6%;
        display: flex;
        align-items: center;

        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
