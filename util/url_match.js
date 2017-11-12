module.exports = function(urlConfig, path, callback) {

	var matchedConfig = Object.keys(urlConfig).filter((key) => {

		return new RegExp(key, 'i').test(path)
	})
	return matchedConfig && matchedConfig.length && urlConfig[matchedConfig[0]]
}
