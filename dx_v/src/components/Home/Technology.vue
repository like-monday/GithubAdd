<template>
    <!-- 技术社区 -->
    <div class="technology">
        <div class="title">
            <span>技术社区</span>
        </div>
        <div class="line"></div>
        <div class="content">
            <ul>
                <li v-for="item in technologyData.arr">
                    <div class="bg"></div>
                    <div class="text">
                        <a href="javascript:;">
                            <div class="img_title">
                                <img :src="item.icon" alt="">
                                <span>{{item.name}}</span>
                            </div>
                            <div class="describe">{{item.describes}}</div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted,reactive} from 'vue'
import {reqDocument} from '../../api/Document/index'
import axios from 'axios'

let search_form = reactive({
  pagesize: 100, // 每页展示条数
  page: 1, // 当前页数
  type: 'technology'
})
let technologyData = reactive({
  arr:[]
})

onMounted(() => {
  reqDocument(search_form).then((res)=>{
    if(res.status == 200){
      technologyData.arr = res.data.data
    }
    console.log('接口接收数据',res);
  })
  // axios({
  //   method: 'post',
  //   data: search_form,
  //   url: 'http://localhost:3000/api/document_type'
  // }).then(res => {
  //   console.log(res);
  //   technologyData.arr = res.data.data
  // })
});

</script>
 
<style lang = "less" scoped>
.technology {
    width: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 15px 20px 20px 20px;
    background-color: #fff;

    .title {
        span {
            padding: 0 0 5px 0;
            display: inline-block;
            margin-right: 20px;
            font-weight: 600;
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
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            overflow: hidden;

            li {
                position: relative;
                border-radius: 8px;
                margin-top: 10px;
                width: 15.5%;
                height: 90px;
                margin-right: 10px;
                align-items: center;
                overflow: hidden;
                background-color: #f5f7fd;

                .text {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 10px;
                    align-items: center;

                    .img_title {
                        display: flex;
                        align-items: center;

                        img {
                            width: 35px;
                            height: 35px;
                            margin-right: 5px;
                        }

                        span {
                            font-size: 18px;
                        }
                    }

                    .describe {
                        margin-top: 10px;
                        font-size: 12px;
                    }
                }

                .bg {
                    width: 0;
                    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                    background-color: #2351da;
                }

            }

            li:hover .bg {
                width: 100%;
                height: 100%;
                background-color: rgba(99, 191, 239, 0.27);
                // transition: all .2s ease-in-out;
            }
        }
    }
}
</style>
