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
        <li v-for="(item, index) in commonData.arr ">
          <img :src="item.icon" alt="">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeUnmount, watch, onUpdated, reactive, toRefs, ref } from 'vue'
import {
  reqDocument,
  updateDocument,
  addDocument,
  deleteDocument,
} from "../../api/Document/index";
import axios from 'axios'

let search_form = reactive({
  pagesize: 100, // 每页展示条数
  page: 1, // 当前页数
  type: 'CommonTools'
})
let list_web = reactive([])
let commonData = reactive({
  arr:['小明','小红']
})
// let getDocuments = function () { 
//   reqDocument(search_form).then((result) => {
//         console.log("获取信息列表", result.data.data);
//         commonToolsData = result.data.data
//         console.log(commonToolsData);
//       })
//  }
function showData () { 
  commonData.arr = ['下辖','洪都']
 }
onMounted(() => {
  axios({
    method: 'post',
    data: search_form,
    url: 'http://localhost:3000/api/document_type'
  }).then(res => {
    console.log(res);
    commonData.arr = res.data.data
  })
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
