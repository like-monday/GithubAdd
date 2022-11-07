<template>
    <div class="hotspot">
        <span class="title">最新热点</span>
        <div class="line"></div>
        <div class="content_list">
            <div class="list_hot">
                <div class="title_weibo">微博热搜</div>
                <ul v-loading="weibo_loading">
                    <li v-for="(item, index) in list_web">
                        <a :href="item.url" target="_blank">
                            <span>{{ index + 1 }}</span>
                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list_hot">
                <div class="title_dy">抖音热搜</div>
                <ul v-loading="dy_loading">
                    <li v-for="(item, index) in list_dy">
                        <a :href="item.url" target="_blank">
                            <span>{{ index + 1 }}</span>
                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list_hot">
                <div class="title_baidu">百度热搜</div>
                <ul v-loading="baidu_loading">
                    <li v-for="(item, index) in list_baidu">
                        <a :href="item.url" target="_blank">
                            <span>{{ index + 1 }}</span>
                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list_hot">
                <div class="title_b">bilibii热搜</div>
                <ul v-loading="B_loading">
                    <li v-for="(item, index) in list_B">
                        <a :href="item.url" target="_blank">
                            <span>{{ index + 1 }}</span>
                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, reactive, toRefs } from 'vue'
import axios from 'axios'

let list_web = reactive([])
let list_dy = reactive([])
let list_baidu = reactive([])
let list_B = reactive([])

// 加载loading
let weibo_loading = ref(true)
let dy_loading = ref(true)
let baidu_loading = ref(true)
let B_loading = ref(true)

onMounted(() => {
    axios({
        method: 'get',
        url: 'https://tenapi.cn/resou/'
    }).then(res => {
        if (res.status == 200) {
            for (let i = 0; i < 10; i++) {
                list_web[i] = res.data.list[i]
            }
            weibo_loading.value = false
            // console.log(list_web);
        }
    })
    axios({
        method: 'get',
        url: 'https://tenapi.cn/douyinresou/'
    }).then(res => {
        if (res.status == 200) {
            for (let i = 0; i < 10; i++) {
                list_dy[i] = res.data.list[i]
            }
            dy_loading.value = false
            // console.log(list_web);
        }
    })
    axios({
        method: 'get',
        url: 'https://tenapi.cn/baiduhot/'
    }).then(res => {
        if (res.status == 200) {
            for (let i = 0; i < 10; i++) {
                list_baidu[i] = res.data.list[i]
            }
            baidu_loading.value = false
        }
    })
    axios({
        method: 'get',
        url: 'https://tenapi.cn/bilihot/'
    }).then(res => {
        if (res.status == 200) {
            for (let i = 0; i < 10; i++) {
                list_B[i] = res.data.list[i]
            }
            B_loading.value = false
        }
    })
})


</script>
 
<style lang = "less" scoped>
.hotspot {
    margin-top: 20px;
    height: 425px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 15px 20px 20px 20px;
    border-radius: 8px;

    .title {
        font-weight: 600;
    }

    .line {
        width: 100%;
        height: 2px;
        background-color: #f5f7fd;
        margin: 10px 0;
    }

    .content_list {
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: space-between;

        .list_hot {
            width: 20%;
            height: 100%;	
            box-sizing: border-box;
            /* padding: 10px; */
            /* box-shadow: 0 0 10px rgba(0, 119, 247, 0.33); */
			box-shadow: 0 0 10px 4px #d0d0d0;

            .title_weibo {
                box-sizing: border-box;
                padding-left: 5px;
                height: 30px;
                color: #fff;
                line-height: 30px;
                background-image: linear-gradient(to right, #e22529, #fff);
            }

            .title_dy {
                box-sizing: border-box;
                padding-left: 5px;
                height: 30px;
                color: #fff;
                line-height: 30px;
                background-image: linear-gradient(to right, #200c1c, #fff);
            }

            .title_baidu {
                box-sizing: border-box;
                padding-left: 5px;
                height: 30px;
                color: #fff;
                line-height: 30px;
                background-image: linear-gradient(to right, #1d27df, #fff);
            }

            .title_b {
                box-sizing: border-box;
                padding-left: 5px;
                height: 30px;
                color: #fff;
                line-height: 30px;
                background-image: linear-gradient(to right, #01a1d6, #fff);
            }

            ul {
                width: 100%;
                height: calc(100% - 30px);
                box-sizing: border-box;
				padding-top: 10px;

                li {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    overflow: hidden;
					box-sizing: border-box;
					padding:10px;

                    span:nth-child(1) {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                        line-height: 20px;
                        background-color: #fff;
                        margin-right: 5px;
                    }

                    span:nth-child(2) {
                        display: inline-block;
                        width: calc(100% - 25px);
                        height: 20px;
                        // line-height: 20px;
                        font-size: 8px;
                        white-space: nowrap;
                        /*设置内容不换行*/
                        text-overflow: ellipsis;
                        /*设置文字超出文本框的内容显示成...*/
                        overflow: hidden;
                        /*超出部分隐藏*/
                    }
                }

                li:hover {
                    background-color: #b1eaff55;
                }



                li:nth-child(1) {
                    span:nth-child(1) {
                        background-color: #ff5722;
                    }
                }

                li:nth-child(2) {
                    span:nth-child(1) {
                        background-color: #1e9fff;
                    }
                }

                li:nth-child(3) {
                    span:nth-child(1) {
                        background-color: #ffb800;
                    }
                }
            }
        }
    }

}
</style>
