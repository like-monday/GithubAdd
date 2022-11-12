import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('../layout/index.vue'),
            redirect: '/Home',
            children: [
                {
                    path: '/Home',
                    name: 'Home',
                    component: () => import('../views/Document/index.vue'),
                    meta: {
                        index: "1",
                        jurisdiction: true,
                        title: '首页文档数据',
                        icon: 'el-icon-s-order'
                    }
                },
                {
                    path: '/WebSever',
                    name: 'WebSever',
                    component: () => import('../views/WebSever/index.vue'),
                    meta: {
                        index: '2',
                        jurisdiction: true,
                        title: '前端文档数据',
                        icon: 'el-icon-collection'
                    }
                },
                {
                    path: '/Journal',
                    name: 'Journal',
                    component: () => import('../views/Document/index.vue'),
                    meta: {
                        index: '3',
                        jurisdiction: true,
                        title: '迭代日志数据',
                        icon: 'el-icon-table-lamp'
                    }
                },
                {
                    path: '/Role',
                    name: 'Role',
                    component: () => import('../views/Document/index.vue'),
                    meta: {
                        index: '4',
                        jurisdiction: true,
                        title: '角色设定数据',
                        icon: 'el-icon-user-solid'
                    }
                }
            ]
        },
        {
            path: 'web',
            name: 'web',
            component: () => import('../views/Document/index.vue')
        }

    ]
})

export default router
