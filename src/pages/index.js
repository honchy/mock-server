cn.honchy.utils.namespace('cn.honchy.pages', {
	index: (function() {
		// 假设对于页面来说是自动执行
		window.addEventListener('DOMContentLoaded', function() {
			var div = document.createElement('div')
			document.body.appendChild(div)
			div.innerHTML = cn.honchy.utils.date.formateDate(new Date().getTime())
			
			var div2 = document.createElement('div')
			document.body.appendChild(div2)
			div2.innerHTML = cn.honchy.utils.number.add(100, 120)

			setInterval(function() {
				div.innerHTML = cn.honchy.utils.date.formateDate(new Date().getTime())
			}, 1000)
		})
	})()
})
