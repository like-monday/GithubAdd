<template>
    <div class="navbar">
        <div class="w">
            <div class="logo">DX-CXY</div>
            <div>
                <ul id="navbar" @click="toModular($event)">
                    <li :class="{ li_active: arr[0].value }">首页</li>
                    <li :class="{ li_active: arr[1].value }">前端</li>
                    <li :class="{ li_active: arr[2].value }">后端</li>
                    <li :class="{ li_active: arr[3].value }">迭代日志</li>
                </ul>
            </div>
            <ul class="date_weather">
                <li>2022年10月10日</li>
                <li>星期五</li>
                <li>19℃</li>
                <li>深圳</li>
                <li>☀</li>
                <li>良</li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';   // 1. 引入路由
import { onMounted, ref, reactive, watch } from 'vue'

const $router = useRouter();   // 2. 定义路由
let arr = reactive([
    {
        name: '首页',
        value: false
    },
    {
        name: '前端',
        value: false
    },
    {
        name: '后端',
        value: false
    },
    {
        name: '迭代日志',
        value: false
    }])

let toModular = function (e) {
    switch (e.target.innerText) {
        case '首页':
            for (const key in arr) {
                arr[key].value = false
            }
            arr[0].value = true
            $router.replace('/home')
            break;
        case '前端':
            for (const key in arr) {
                arr[key].value = false
            }
            arr[1].value = true
            $router.replace('/Web')   // 3.使用路由
            break;
    }
}

if ($router.currentRoute.value.path == '/Web') {
    arr[1].value = true
} else if ($router.currentRoute.value.path == '/home') {
    arr[0].value = true
}

// watch()

</script>
   
<style lang = "less" scoped>
.navbar {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background-color: #fff;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.8);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    box-shadow: 0px 3px 3px 0px rgba(42, 130, 228, 0.2);

    .w {
        display: flex;
        max-width: 1440px;
        min-width: 1100px;
        margin: 0 auto;
        height: 100%;

        .logo {
            flex: 2;
            height: 100%;
            line-height: 60px;
            font-style: italic;
            font-weight: 600;
            font-size: 35px;
            color: #0077f7;
        }

        #navbar {
            flex: 6;
            margin-left: 50px;
            height: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;

            li {
                color: #505050;
                margin: 0 10px;
                font-size: 16px;
                line-height: 27px;
                height: 100%;
                line-height: 60px;
                padding: 0 30px;
                cursor: pointer;
                transition: all .5s;
            }

            .li_active {
                box-sizing: border-box;
                color: #0077f7;
                border-top: 2px solid #0077f7;
                background-color: rgba(64, 158, 255, 0.16);
            }
        }

        .date_weather {
            flex: 6;
            height: 100%;
            display: flex;
            justify-content: flex-end;

            li {
                height: 60px;
                line-height: 60px;
            }

            li:nth-child(1) {
                margin: 0 10px;
            }

            li:nth-child(2) {
                margin: 0 40px 0 10px;
            }

            li:nth-child(n + 3) {
                margin: 0 7px;
            }

            li:nth-child(5) {
                color: #ffc300;
            }
        }
    }
}
</style>
