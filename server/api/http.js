//引入数据库连接用户密码等
const models = require('../db')
//引入服务对象
const express = require('express')
const router = express.Router()
//引入mysql模块
const mysql = require('mysql')
//引入sql语句
const $sql  = require('../sqlMap')

// 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()
const jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        })
    } else {
        res.json(
            ret
        )
    }
}

router.all('/*',(req,res,next)=>{
	const sqluser = $sql.sqlMap_user.getuser
	conn.query(sqluser, function (err, result) {
	    if (err) {
	        console.log(err)
	    }
	    if (result) {
			console.log(result[0].password);
			for(let i = 0;i < result.length;i++){
				let getAccount = 'admin' // 这里从请求头获取
				let getPassword = 'admin' // 这里从请求头获取
				let role = result[i].role // 这个字段代表是管理员，有最高权限
				if(result[i].account == getAccount && result[i].password == getPassword && role == 'admin'){
					// 能进来代表具有权限
					next()
				}
			}
	    }
	})
	next()
})

// 接口：增加信息
router.post('/document', (req, res) => {
    const sql = $sql.sqlMap_document.add
    const params = req.body
    console.log('添加', params)
    conn.query(sql, [params.name,params.describes, params.https, params.icon, params.lastdate, params.type], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
			console.log('添加成功')
			let message = {
				message:'添加成功'
			}
            jsonWrite(res, message)
        }
    })
})

// 接口：查询全部
router.get('/document', (req, res) => {
    const sql = $sql.sqlMap_document.show
    const params = req.body
    console.log(params)
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})

// 接口：分类查询
router.post('/document_type', (req, res) => {
    const sql = $sql.sqlMap_document.show_type
    const params = req.body
    console.log('条件查询',	params)
    conn.query(sql, [params.type], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
			let page = 0,pagesize = 0
			if(params.page  < 0){
				page = params.page * -1
			}else {
				page = params.page
			}
			if(params.pagesize < 0){
				pagesize = params.pagesize * -1
			}else {
				pagesize = params.pagesize
			}
			let start = page * pagesize - pagesize
			let end = page * pagesize
			if(result.length < 5){
				// console.log("分页钱的数据：",result[0])
				let message = {
					data:result,
					total:result.length
				}
				jsonWrite(res, message)
				// console.log(result.tools)
			}else{
				console.log(start,end)
				let fillter = result.slice(start,end);  //截取第三个元素到第六个元素前的所有元素
				// let fillter = result.slice(2,4);
				// console.log("分页后的数据：",fillter)
				console.log("查出来的数据",result.length)
				let message = {
					data:fillter,
					total:result.length
				}
				jsonWrite(res, message)
				// console.log(fillter.tools)
			}
			
            
        }
    })
})

// 接口：删除信息
router.delete('/document', (req, res) => {
    const sql = $sql.sqlMap_document.del
    const params = req.query
    console.log('删除', params)
    conn.query(sql, [params.id], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
			console.log(result)
			let message = {
				message:'删除成功'
			}
            jsonWrite(res, message)
        }
    })
})

// 接口：修改信息
router.put('/document', (req, res) => {
    const sql = $sql.sqlMap_document.update
    const params = req.body
    console.log('修改', params)
    conn.query(sql, [params.name,params.describes, params.https, params.icon, params.lastdate, params.id], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
			let message = {
				status:200,
				message:'修改成功'
			}
            jsonWrite(res, message)
        }
    })
})

// 接口：修改信息
router.get('/test', (req, res) => {
    res.send('获取成功??')
})

module.exports = router