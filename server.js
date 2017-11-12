

var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var http = require('http')

var app = express()
var httpServer = http.createServer(app);

app.use(bodyParser.json())

app.use(function(req, res, next) {
	// 默认返回json数据结构
	res.header('content-type', 'application/json;charset=utf-8')
	// 解决cors跨域问题
	res.header('access-control-allow-credentials', 'true')
	res.header('access-control-allow-headers', 'content-type,cookieorigin,x-requested-with')
	res.header('access-control-allow-methods', 'POST, GET, OPTIONS')
	res.header('access-control-allow-origin', req.get('origin'))

	if(req.method === 'OPTIONS') {
		res.end()
	} else {
		next()
	}
})
// url 返回规则配置
app.use(function(req, res, next) {
	if(new RegExp('/api/order/list', 'i').test(req.url)) {
		res.end(fs.readFileSync('./mock/order_center/list.json'))
	} else {
		next()
	}
})

httpServer.listen(8088);

console.log('http server at 8088');
