//扩展函数，目前仅支持浅复制，会过滤原型字段
let assign = null

if (typeof Object.assign === 'function') {
	assign = Object.assign
}else{
	assign =  function (){
		let target = arguments[0]
		let source = null
		if (target == null){
			throw new TypeError('Cannot convert undefined or null to object')
		}
		target = Object(target)
		for (let i = 1, len = arguments.length; i < len; i++) {
			source = arguments[i]
			if (source != null){
				for(let key in source) {
					if(Object.prototype.hasOwnProperty.call(source,key)){
						target[key] = source[key]
					}
				}
			} 
		}
		return target
	}
}

module.exports = assign