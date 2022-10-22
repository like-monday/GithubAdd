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
                <li v-for="item in 18">
                    <img src="../../assets/images/logo.png" alt="">
                    <span>Linux命令大全</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { } from 'vue'

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
