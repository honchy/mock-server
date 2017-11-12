// 假设我们src下所有的文件
var fs = require('fs')
var path = require('path')
var execSync = require('child_process').execSync

var files = fs.readdirSync(path.resolve(__dirname , './src'))
// 读取到文件之后需要拍下顺序，把pages放到最后面
files.sort(function(a, b) {
	if(a === 'pages') {
		return 1
	} else if(b === 'pages') {
		return -1
	} else {
		return a.localeCompare(b)
	}
})

var build = path.resolve(__dirname, './build')
execSync('rm -rf ' + build)	
execSync('mkdir -p ' + build)
var bundle = path.resolve(build, './bundle.js')
execSync('touch ' + bundle)

function appendFile(fp) {
	var content = fs.readFileSync(fp).toString()
	content = '!(function() {' + content + '})();'
	fs.appendFileSync(bundle, "/* " + fp + " */\r\n")
	fs.appendFileSync(bundle,  content + "\r\n")
}

function processFile(fp) {
	var stat = fs.lstatSync(fp)
	if(stat.isFile()) {
		appendFile(fp)
	} else if(stat.isDirectory()) {
		var children = fs.readdirSync(fp)
		children.forEach(function(child) {
			var cfp = path.resolve(fp, child)
			processFile(cfp)
		})
	}
}

// 优先注入namespace
var namespacepath = path.resolve(__dirname, './namespace.js')
appendFile(namespacepath)

// 然后把读取到的文件包装成为立即执行表达式
files.forEach(function(file) {
	var fp = path.resolve(__dirname, './src', file)
	processFile(fp)
})

