import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'

// 注册全局方法
import formateDate from '@/utils/formateDate'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$formateDate = formateDate

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
