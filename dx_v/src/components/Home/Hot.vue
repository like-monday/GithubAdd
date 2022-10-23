<template>
    <div class="hot">
        <ul>
            <li><span>热门:</span></li>
            <li>
                <a href="https://www.baidu.com" target="_blank">
                    <span>百</span>
                    <span>度</span>
                </a>
            </li>
            <li>
                <a href="https://cn.bing.com/search" target="_blank">
                    <span>B</span>
                    <span>ing</span>
                </a>
            </li>
            <li><a href="https://github.com/" target="_blank"><span>Github</span></a></li>
            <li><a href="https://www.zhihu.com/" target="_blank"><span>知乎</span></a></li>
            <li>
                <a href="https://www.xiaopiu.com" target="_blank"><span>即时原型</span></a>
            </li>
            <li><a href="https://www.bilibili.com" target="_blank"><span>bilibili</span></a></li>
            <li><a href="https://juejin.cn" target="_blank"><span>稀土掘金</span></a></li>
            <li><a href="https://www.zhipin.com" target="_blank"><span>BOSS直聘</span></a></li>
            <li>
                <a href="https://www.csdn.net" target="_blank">
                    <span>C</span>
                    <span>SDN</span>
                </a>
            </li>
            <li><a href="http://fanyi.baidu.com/" target="_blank"><span>百度翻译</span></a></li>
            <li><a href="https://gitee.com" target="_blank"><span>Gitee</span></a></li>
            <li>
                <a href="https://google.cn/" target="_blank">
                    <span>G</span>
                    <span>o</span>
                    <span>o</span>
                    <span>g</span>
                    <span>l</span>
                    <span>e</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { } from 'vue'

</script>
 
<style lang = "less" scoped>
.hot {
    height: 60px;
    background-color: #fff;

    ul {
        box-sizing: border-box;
        padding: 0 20px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 19px;

        li {
            cursor: pointer;
        }

        li:nth-child(1) {
            font-weight: 600;
            font-size: 20px;
            padding-right: 5px;
        }

        li:nth-child(2) {
            span:nth-child(1) {
                color: #ff5733;
            }

            span:nth-child(2) {
                color: #2932e1;
            }
        }

        li:nth-child(3) {
            span:nth-child(1) {
                color: #3070f0;
            }

            span {
                color: #1bcded;
            }
        }

        li:nth-child(5) {
            span {
                color: #0066ff;
            }
        }

        li:nth-child(6) {
            span {
                color: #fa6469;
            }
        }

        li:nth-child(7) {
            span {
                color: #fb7299;
            }
        }

        li:nth-child(8) {
            span {
                color: #3a90ff;
            }
        }

        li:nth-child(9) {
            span {
                color: #00bebd;
            }
        }

        li:nth-child(10) {
            span:nth-child(1) {
                color: #fc5531;
            }

            span {
                color: #000;
            }
        }

        li:nth-child(11) {
            span {
                color: #089bff;
            }
        }

        li:nth-child(12) {
            span {
                color: #c71d23;
            }
        }

        li:nth-child(13) {
            span:nth-child(1) {
                color: #4285f4;
            }

            span:nth-child(2) {
                color: #ea4335;
            }

            span:nth-child(3) {
                color: #fbbc05;
            }

            span:nth-child(4) {
                color: #4285f4;
            }

            span:nth-child(5) {
                color: #34a853;
            }

            span:nth-child(6) {
                color: #ea4335;
            }
        }

    }
}
</style>
