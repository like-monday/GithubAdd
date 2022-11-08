<template>
    <div class="web">
        <div class="navbar">
            <ul @click="toModular($event)">
                <li class="active">web框架</li>
                <li>代码检查风格</li>
                <li>node.js</li>
                <li>react框架</li>
                <li>css</li>
                <li>vue(PC)</li>
                <li>可视化工具</li>
                <li>编译&构建</li>
                <li>小程序框架</li>
                <li>vue(Mobile)</li>
                <li>ant系列</li>
                <li>状态管理</li>
                <li>项目模板</li>
            </ul>
        </div>
        <div class="header">
            <span id="left"></span>
            <div id=title>
                <span></span>
                <span>Web框架</span>
                <span></span>
            </div>
            <span id="right"></span>
        </div>
        <ul class="card">
            <li v-for="(item, index) in 4">
                <a href="javascript:;" class="content">
                    <img src="../assets/images/react.svg" alt="">
                    <span>React</span>
                </a>
                <div class="describe">构建用户界面的JavaScript库</div>
                <div class="Github">
                    <a href="javascript:;" class="homeImg">
                    </a>
                    <a href="javascript:;" class="githubImg">
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { } from 'vue'

let toModular = function (e) {
    // console.log(e.target.innerText);
    switch (e.target.innerText) {
        case '热门推荐':
            if (hot_line.value.offsetTop > 77) {
                window.scrollTo({
                    letf: 0,
                    top: hot_line.value.offsetTop - 77,
                    behavior: 'smooth'
                }) // 距离顶部最佳距离57
            }
            // e.target.style.background = 'rgba(42, 130, 228, 0.14)'
            console.log('热门推荐');
            break;
    }
}
</script>
 
<style lang = "less" scoped>
.web {
    overflow: hidden;

    .navbar {
        margin-top: 10px;
        width: 100%;
        background-color: #fff;
        font-size: 14px;

        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            li {
                text-align: center;
                min-width: 100px;
                padding: 5px 10px;
                border-radius: 8px;
                margin: 10px;
                border: 1px solid #d4d5dc;
                cursor: pointer;
            }

            .active {
                background-color: #39bae8;
                border: none;
                color: #fff;
            }
        }
    }

    .header {
        margin-top: 20px;
        position: relative;
        width: 100%;
        height: 40px;
        font-size: 15px;
        background-color: #fff;

        #left {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 13px;
            // background-color: #0077f7;
        }

        #title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            height: 100%;
            width: 500px;

            span:nth-child(2) {
                padding: 0 20px;
                border-bottom: 2px solid #39bae8;
            }

            span:nth-child(1),
            span:nth-child(3) {
                display: block;
                width: 150px;
                height: 2px;
                // background-color: #0077f7;
            }
        }

        #right {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 13px;
            // background-color: #0077f7;
        }

    }

    .card {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        width: 100%;

        li {
            position: relative;
            width: 24%;
            height: 130px;
            background-color: #fff;

            .content {
                font-size: 18px;
                display: flex;
                align-items: center;

                img {
                    margin: 10px;
                    width: 50px;
                    height: 50px;
                }
            }

            .describe {
                font-size: 15px;
                margin-left: 10px;
            }

            .Github {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 10px;
                background-color: #b9edf8;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                transition: all 0.5s;
                justify-content: center;
                display: flex;
                align-items: center;
                overflow: hidden;

                a {
                    margin: 0 20px;
                    width: 30px;
                    height: 30px;
                    transform: translateY(50px);
                    transition: all 1s;
                }

            }
        }

        li:hover .Github {
            height: 40px;
        }

        li:hover .homeImg {
            background: url('../assets/images/主页.svg');
            background-size: 30px;
            transform: translateY(0);
        }

        li:hover .githubImg {
            background: url('../assets/images/github-fill.svg');
            background-size: 30px;
            transform: translateY(0);
        }
    }
}
</style>
