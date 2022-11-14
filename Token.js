const express = require('express')
const cors = require('cors')
const app = express()
app.options('*', cors());
app.use(express.urlencoded())
app.use(express.json())
var { getToken, setToken } = require('./token/token')
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    // res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    res.header("Access-Control-Allow-Headers", "content-type,Authorization");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
});

// 解析token获取用户信息
app.use(function (req, res, next) {
    var token = req.headers['authorization'];
    // console.log('拦截器生效', token);

    // const URL = req.url
    // if (URL === '/login') {
    // // 登录接口无需校验
    //     return next()
    // }else{

    // }
    if (token) {
        getToken(token).then((data) => {
            console.log('解析出token:', data);
            return next();
        }).catch((err) => {
            let message = {
                status: 1,
                message: '登录过期，请重新登录'
            }
            console.log(err);
            return res.send(message)
        })
    } else {
        return next()
    }
});


app.post('/login', (req, res) => {
    const data = req.body
    var username = req.body.username;
    var password = req.body.password;
    console.log('获取信息', data);
    setToken(username, password).then((data) => {
        res.json({ token: data });
    })
})

app.get('/userinfo', (req, res) => {
    const data = req.headers
    res.send('接口能用')
    // console.log('获取信息', data);

})

app.listen(8088, () => {
    console.log("服务已经启动，8088端口监听中...")
    console.log('http://localhost:8088')
})
