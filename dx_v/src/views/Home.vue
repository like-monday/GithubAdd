<template>
    <div class="home">
        <Search></Search>
        <div class="w">
            <div class="zw">
                <div :class="{navbar: isTrue === false}" ref="navbar" id="navbar">
                    <ul @click="toModular($event)">
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
                <div ref="hot_line" class="line"></div>
                <Hot></Hot>
                <div ref="hotSpot_line" class="line"></div>
                <HotSpot></HotSpot>
                <div ref="commonTools_line" class="line"></div>
                <CommonTools></CommonTools>
                <div ref="technology_line" class="line"></div>
                <Technology></Technology>
                <div ref="entertainment_line" class="line"></div>
                <Entertainment></Entertainment>
            </div>
        </div>
    </div>
    <transition name="goTop">
        <div v-if="goTop" class="goTop" @click="goTop_bt"></div>
    </transition>
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
let navbar = ref(null)

// 定位用
let hot_line = ref(null)
let hotSpot_line = ref(null)
let commonTools_line = ref(null)
let technology_line = ref(null)
let entertainment_line = ref(null)

let goTop = ref(false)

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
        case '最新热点':
            if (hotSpot_line.value.offsetTop > 57) {
                window.scrollTo({
                    letf: 0,
                    top: hotSpot_line.value.offsetTop - 57,
                    behavior: 'smooth'
                }) // 距离顶部最佳距离57
            }
            // e.target.style.background = 'rgba(42, 130, 228, 0.14)'
            console.log('最新热点');
            break;
        case '常用工具':
            if (commonTools_line.value.offsetTop > 57) {
                window.scrollTo({
                    letf: 0,
                    top: commonTools_line.value.offsetTop - 57,
                    behavior: 'smooth'
                }) // 距离顶部最佳距离57
            }
            // e.target.style.background = 'rgba(42, 130, 228, 0.14)'
            console.log('常用工具');
            break;
        case '技术社区':
            // console.log(technology_line.value.offsetTop);
            // console.log(technology_line.value.getBoundingClientRect().top);
            if (technology_line.value.offsetTop > 57) {
                window.scrollTo({
                    letf: 0,
                    top: technology_line.value.offsetTop - 57,
                    behavior: 'smooth'
                }) // 距离顶部最佳距离57
            }
            // e.target.style.background = 'rgba(42, 130, 228, 0.14)'
            console.log('技术社区');
            break;
        case '日常摸鱼':
            if (entertainment_line.value.offsetTop > 57) {
                window.scrollTo({
                    letf: 0,
                    top: entertainment_line.value.offsetTop - 57,
                    behavior: 'smooth'
                }) // 距离顶部最佳距离57
            }
            // e.target.style.background = 'rgba(42, 130, 228, 0.14)'
            console.log('日常摸鱼');
            break;
    }
}

let goTop_bt = function () {
    window.scrollTo({
        letf: 0,
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    // 监听滚动条位置
    window.addEventListener('scroll', scrollTop, true)
}
)
// 实时滚动条高度
const scrollTop = () => {
    // let top = navbar.value.getBoundingClientRect().top
    // let top = navbar.value
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log('滚动条滚动距离：', scroll)
    // console.log('元素距离顶部距离：', top);
    if (scroll > 75) {
        isTrue.value = false
    } else {
        isTrue.value = true
    }

    if (scroll > 10) {
        goTop.value = true
    } else {
        goTop.value = false
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
                        cursor: pointer;
                        // background-color: #0077f7;
                    }

                    .li_bg {
                        background-color: rgba(42, 130, 228, 0.14);
                    }

                    li:hover {
                        color: #2a82e4;
                    }
                }
            }

            .navbar {
                position: fixed;
                top: 90px;
            }
        }

        .content {
            width: 100%;
            box-sizing: border-box;
            padding: 0 0 0 50px;

            .entertainment_line,
            .line {
                width: 100%;
                height: 1px;
            }
        }
    }
}

.goTop {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 300px;
    cursor: pointer;
    right: 50px;
    background: url(../assets/images/goTop.png);
    background-size: 60px 60px;
}

// .goTop-enter-from,
// .goTop-leave-to {
//     animation: bounceInUp 1s ease-in;
// }

// .goTop-enter-to,
// .goTop-leave-from {
//     animation: bounceInUp 1s ease-in reverse;
// }

// .goTop-enter-active,
// .goTop-leave-active {
//     transition: all 1s ease;
// }

.goTop-enter-active {
    animation: bounceInUp 1s ease-in;
}

.goTop-leave-active {
    animation: bounceInUp 2s ease-in reverse;
}
</style>
