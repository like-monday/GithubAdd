import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";

// create an axios instance
const service = axios.create({
  baseURL: "http://43.139.80.187:5000/api", // url = base url + request url
  // baseURL:'http://127.0.0.1:5000/api',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
});
// headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

// request interceptor
service.interceptors.request.use(
  (config) => {
    config.headers.account = sessionStorage.getItem('account')
    config.headers.password = sessionStorage.getItem('password')
    // if (config.method === "get") {
    //   console.log('这是get亲求');
    //   config.data = { unused: 0 }; // 这个是关键点，加入这行就可以了,解决get,请求添加不上Content-Type
    // }
    // config.headers["Content-type"] = "application/json;charset=UTF-8";
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (res) => {
    //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
    if (res.status >= 200 && res.status < 300){
    console.log(res);
    return res
    }else{
      return Promise.reject(res.data.message || 'ERROR')
    }
    
  },
  (error) => {
    //响应失败的回调函数
    return "Error";
    // return Promise.reject(new Error('fail'));
  }
);

export default service;
