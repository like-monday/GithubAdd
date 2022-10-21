const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../layout/index.vue'), //.vue不能省略
        redirect: '/home',
        children:[{
          path: 'home',
          name: 'Home',
          component: ()=> import('../views/Home.vue')
        }]
    }
]
export default routes
