const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '',
        component: () => import('../layout/index.vue'),
        childrenL: [{
            path: '/home',
            name: 'Home',
            component: () => import('../views/Home.vue')
        }]
    }
]


const routes = [
    // {
    //     path: '/',
    //     redirect: '/home'
    // },
    {
        path: '/',
        component: () => import('../layout/index.vue'),
        redirect: '/home',
        children: [{
            path: '/home',
            name: 'Home',
            component: () => import('../views/Home.vue')
        }]
    }
]
