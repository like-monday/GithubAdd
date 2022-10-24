<template>
    <div class="navbar">
        <div class="w">
            <div class="logo">
                DX-CXY
            </div>
            <div>
                <ul id="navbar" @click="toModular($event)">
                    <li :class={li_active:arr[0].home}>首页</li>
                    <li :class={li_active:arr[1].frontEnd}>前端</li>
                    <li :class={li_active:arr[0].backEnd}>后端</li>
                    <li :class={li_active:arr[0].journal}>迭代日志</li>
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
import { onMounted, ref, reactive } from 'vue'

let arr = reactive([
    {
        name: '首页',
        home: true
    },
    {
        name: '前端',
        frontEnd: false
    },
    {
        name: '后端',
        backEnd: false
    },
    {
        name: '迭代日志',
        journal: false
    }])

let toModular = function (e) {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
        case '首页':
            arr[0].home = true
            for (const key in arr) {
                console.log(arr[key]);
            }
            break;
    }
}

</script>
   
<style lang = "less" scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background-color: #fff;
    // overflow: hidden;
    // background: rgba(255, 255, 255, 0.1);
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
                // margin: 0 10px;
                font-size: 16px;
                // line-height: 27px;
                // height: 27px;
                height: 100%;
                line-height: 60px;
                padding: 0 30px;
                // border-radius: 7px;
                cursor: pointer;
            }

            .li_active {
                color: #0077f7;
                border-top: 3px solid #0077f7;
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

            li:nth-child(n+3) {
                margin: 0 7px;
            }

            li:nth-child(5) {
                color: #ffc300;
            }
        }
    }
}
</style>
