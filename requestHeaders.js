// request拦截器
service.interceptors.request.use(
    config => {
        config.headers.sites = store.state.user.sites;
        config.headers.empNo = sessionStorage.getItem('empNo');
        // console.log('请求拦截器里：', store.state.user.sites);
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
);



// node接收不同请求参数
app.use(express.urlencoded())
app.use(express.json())


// node接收请求头参数
var site = req.headers.sites
