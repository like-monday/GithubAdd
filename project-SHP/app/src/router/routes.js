//引入路由组件
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Detail from '@/pages/Detail';
// import AddCartSuccess from '@/pages/AddCartSuccess';
// import ShopCart from '@/pages/ShopCart';
// import Trade from '@/pages/Trade';
// import Pay from '@/pages/Pay';
// import PaySuccess from '@/pages/PaySuccess';
// import Center from '@/pages/Center';
// //引入二级路由组件
// import MyOrder from '@/pages/Center/myOrder';
// import GroupOrder from '@/pages/Center/groupOrder';

//当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
//如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
// const foo = () => {
//     console.log(11111);
//     return import("@/pages/Home");
// }

//路由配置的信息
export default [{
        path: "/center",
        component: () => import("@/pages/Center"),
        meta: {
            isShow: true
        }, //显示底层的footer组件
        //子路由
        children: [{
                path: "myorder",
                component: () => import("@/pages/Center/myOrder"),
            },
            {
                path: "grouporder",
                component: () => import("@/pages/Center/groupOrder"),
            },
            {
                path: "/center",
                redirect: "/center/myorder",
            }
        ]
    },
    {
        path: "/paysuccess",
        component: () => import("@/pages/PaySuccess"),
        meta: {
            isShow: true
        }, //显示底层的footer组件
    },
    {
        path: "/pay",
        component: () => import("@/pages/Pay"),
        meta: {
            isShow: true
        }, //显示底层的footer组件
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next();
            } else {
                next(false);
            }
        }
    },
    {
        path: "/trade",
        component: () => import("@/pages/Trade"),
        meta: {
            isShow: true
        }, //显示底层的footer组件
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            //去交易页面，必须是从购物车而来 
            if (from.path == "/shopcart") {
                next();
            } else {
                //其他的路由而来停留在当前
                next(false);
            }
        }
    },
    {
        path: "/shopcart",
        component: () => import("@/pages/ShopCart"),
        meta: {
            isShow: true
        }, //显示底层的footer组件
    },
    {
        name: 'addcartsuccess',
        path: "/addcartsuccess",
        component: () => import("@/pages/AddCartSuccess"),
        meta: {
            isShow: true
        }, //显示底层的footer组件
    },
    {
        path: "/detail/:skuid",
        component: () => import("@/pages/Detail"),
        meta: {
            isShow: true
        },
    },
    {
        path: "/home",
        component: () => import("@/pages/Home"),
        //路由信息不能瞎写
        meta: {
            isShow: true
        },
    },
    {
        name: 'search',
        path: "/search/:keyword?",
        component: () => import("@/pages/Search"),
        meta: {
            isShow: true
        },
        // 路由组件能不能传递props数据？
        //布尔值的写法:params
        // props:true,
        //对象写法：额外的给路由组件传递一些props
        // props:{a:1,b:2},
        //函数写法:可以params参数、query参数，通过props传递给路由组件
        props: ($route) => {
            return {
                keyword: $route.params.keyword,
                k: $route.query.k
            };
        }

    },
    {
        path: "/login",
        component: () => import("@/pages/Login"),
        meta: {
            isShow: false
        },
    },
    {
        path: "/register",
        component: () => import("@/pages/Register"),
        meta: {
            isShow: false
        },
    },
    {
        //重定向,在项目跑起来的时候，访问/,立马让他定向到首页
        path: '*',
        redirect: '/home'
    }
]