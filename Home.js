<template>
    <div class="home">
        <form class="search" :action="http" method="get">
            <!-- action="https://www.baidu.com/s" -->
            <!-- action="https://cn.bing.com/search" -->
            <!-- action="https://so.csdn.net/so/search" -->
            <!-- action="https://www.zhihu.com/search" -->
            <!-- action="https://www.google.com.hk/search" -->
            <!-- action="https://github.com/search" -->
            <select ref="select" v-model="http" class="select">
                <option value="https://www.baidu.com/s">百度</option>
                <option value="https://www.google.com.hk/search">Goole</option>
                <option value="https://cn.bing.com/search">必应</option>
                <option value="https://www.zhihu.com/search">知乎</option>
                <option value="https://github.com/search">Github</option>
                <option value="https://so.csdn.net/so/search">CSDN</option>
            </select>
            <input type="text" :name="params">
            <!-- 百度搜索关键 name="word" -->
            <!-- 必应搜索关键 name="q" -->
            <el-icon color="#bcbcbc">
                <CircleCloseFilled />
            </el-icon>
            <span class="line"></span>
            <div class="search_bt">
                <button type="submit">搜索</button>
            </div>
        </form>
    </div>
    <!-- <div>
        "element-plus": "^1.0.2-beta.28",
    </div> -->
</template>

<script setup>
import { onMounted, onUpdated, reactive, toRefs, ref } from 'vue'

let obj = {
    http: 'https://www.baidu.com/s',
    params: 'https://www.baidu.com/s'
}

let select = ref(null);
let objRet = reactive(obj)
let { http, params } = toRefs(objRet)



onMounted(() => {
    // select.value.selectedIndex = 0
    // http = 'https://www.baidu.com'
});

onUpdated(() => {
    // http = select.value.options[select.value.selectedIndex].value
    params = select.value.options[select.value.selectedIndex].value
    if (http == 'https://www.baidu.com/s') {
        params = ref('word')
        console.log('百度');
        console.log(params);
    } else {
        params = ref('q')
        console.log('非百度');
        console.log(params);
    }
    console.log("http", http);
})



</script>
 
<style lang = "less" scoped>
.home {
    max-width: 1440px;
    background-color: antiquewhite;
    margin: 0 auto;
    height: 1000px;
    overflow: hidden;

    .search {
        margin: 20px auto;
        width: 600px;
        height: 50px;
        background-color: #fff;
        border: 2px solid #0077f7;
        border-radius: 10px;
        overflow: hidden;

        .select {
            float: left;
            text-align: center;
            font-size: 15px;
            margin: 0 10px;
            background-color: #fff;
            border: 0;
            width: 75px;
            height: 50px;
        }

        .select:focus {
            outline: none;
        }

        .line {
            float: left;
            display: block;
            width: 2px;
            height: 100%;
            background-color: #0077f7;
        }

        input {
            border: 0;
            margin: 0;
            padding: 0;
            width: 390px;
            height: 100%;
            font-size: 18px;
            margin-left: 10px;
        }

        input:focus {
            outline: none;
        }

        .search_bt {
            display: flex;
            justify-content: center;
            align-items: center;
            float: right;
            width: 70px;
            height: 100%;
            background-color: #0077f7;
            color: #fff;

            button {
                background-color: none;
            }
        }

    }
}
</style>
