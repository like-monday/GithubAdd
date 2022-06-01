//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
//引入store
import store from '@/store';

//使用插件
Vue.use(VueRouter);

//先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push | replace
//第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
//call||apply区别
//相同点，都可以调用函数一次，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用都好隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location,resolve,reject) { 
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
 }
VueRouter.prototype.replace = function (location,resolve,reject) { 
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject);
    }else{ 
        originReplace.call(this,location,()=>{},()=>{});
    }
 }

//对外暴露VueRouter类的实例
let router = new VueRouter({
    // 配置路由
    routes,
    //滚动行为
    scrollBehavior (to,from,savedPosition){
        //返回的这个y等于0，代表的滚动条在最下方
        return{y:0}
    }
})

//全局守卫：前置守卫（在路由跳转之前进行判断）
router.beforeEach(async(to,from,next)=>{
    //to:可以获取到你要跳转到那个路由信息
    //from：可以获取到你从哪个路由而来的信息
    //next：放行函数 next()放行
    //next('/login') 放行到指定路由
    next()
    //用户登录了才有token,未登录一定不会有token
    let token = store.state.user.token;
    //用户信息
    let name = store.state.user.userInfo.name;
    //用户已经登录了
    if(token){
        //用户已经登录了还想去login
        if(to.path=='/login'||to.path=='/register'){
            next('/home')
        }else{
            //登录了但是去的不是login
            //如果用户名已有
            if(name){
                next();
            }else{
                //没有用户信息，派发action让仓库存储用户信息在跳转
                try {
                    //获取用户信息成功
                    await store.dispatch('getUserInfo');
                    //放行
                    next();
                } catch (error) {
                    //token失效了获取不到用户的信息,重新登录
                    //清除token
                    await store.dispatch('userLogout')
                    next('/login');
                }

            }
        }
    }else{
        //未登录:不能去交易相关、不能去支付相关【pay| paysuccess】、不能去个人中心
        //未登录去上面的路由因该去登录页面
        let toPath = to.path;
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){
            //把未登录的时候想去的信息存储域地址栏中
            next('/login?redirect='+toPath)
        }else{
            //去的不是上面这些路由---放行
            next();
        }
    }
})

export default router;