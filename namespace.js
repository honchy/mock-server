function namespace(packageName, implementation) {
	if(packageName) {
		var nm = window
		packageName.split('.').forEach(function(name) {
			if(name) {
				nm[name] = nm[name] || {}
				nm = nm[name]
			}
		})
		if(implementation) {
			for(var k in implementation) {
				nm[k] = implementation[k]
			}
		}
		return nm
	}
}

namespace('cn.honchy.utils', {
	namespace: namespace
})