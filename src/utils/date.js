cn.honchy.utils.namespace('cn.honchy.utils.date', {
	formateDate: function(date) {
		var d = new Date(date)
		return [d.getHours(), d.getMinutes(), d.getSeconds()].join(':')
	}
})
