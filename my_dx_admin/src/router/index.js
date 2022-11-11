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
            // redirect: '/Main/Home',
            meta: {
                index: 3,
            },
        },
        // {
        //     path: '/Main', // 骨架
        //     name: 'pages',
        //     component: () => import('@/pages/index.vue'),
        //     redirect: '/Main/Home',
        //     children: [
        //         {
        //             path: 'Home',
        //             name: 'Home',
        //             component: () => import('@/views/Home'),
        //             meta: {
        //                 index: 2,
        //             },
        //         }
        //     ]
        // },
    ]
})

export default router
