<template>
    <!-- 日常摸鱼 -->
    <div class="entertainment">
        <div class="title">
            <span>日常摸鱼</span>
        </div>
        <div class="line"></div>
        <div class="content">
            <ul>
                <li v-for="item in 18">
                    <a href="javascript:;">
                        <div class="img_title">
                            <img src="" alt="">
                            <span>CSDN</span>
                        </div>
                        <div class="describe">专业开发者社区</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { } from 'vue'

</script>
 
<style lang = "less" scoped>
.entertainment {
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
                border-radius: 8px;
                box-sizing: border-box;
                padding: 10px;
                margin-top: 10px;
                width: 15.5%;
                height: 90px;
                margin-right: 10px;
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

            li:hover {
                background-color: rgba(99, 191, 239, 0.27);
            }
        }
    }
}
</style>
