Dackage = (function() {
	var init = function(element) {
		window.addEventListener('load', (function(element) {
			document.title = element.title
			if (element.style) {
				style(element)
			}
			if (element.icon) {
				icon(element)
			}
		})(element))
	}
	var style = function(element) {
		element.style = (typeof element.style === 'string') ?
			Array.call(null, element.style) :
			element.style
		var length = element.style.length
		var i = 0
		for (; i < length; i += 1) {
			(function(style, i) {
				var link = document.createElement('link')
				link.setAttribute('rel', 'stylesheet')
				link.setAttribute('type', 'text/css')
				link.setAttribute('href', style[i])
				document.getElementsByTagName('head')[0].appendChild(link)
			})(element.style, i)
		}
	}
	var icon = function(element) {
		var errored = function() {
			// ToDo: deal with Error
			console.error('image not found')
			return 0
		}
		var setIcon = function(src) {
			var link = document.createElement('link')
			link.setAttribute('rel', 'icon')
			link.setAttribute('href', src)
			document.getElementsByTagName('head')[0].appendChild(link)
			link = null;
			var link = document.createElement('link')
			link.setAttribute('rel', 'short icon')
			link.setAttribute('href', src)
			document.getElementsByTagName('head')[0].appendChild(link)
		}
		if (typeof element.icon === 'string') {
			setIcon(element.icon)
		}
		else if (element.icon instanceof Image) {
			element.icon.addEventListener('error', errored)
			element.icon.addEventListener('load', setIcon(element.icon.src))
		}
	}
	var $ = function(id) {
		return document.querySelector(id)
	}
	var $All = function(id) {
		return document.querySelectorAll(id)
	}
	var setCss = function(id, styleId, value) {
		if (document.querySelector(id) instanceof HTMLElement) {
			var element = document.querySelectorAll(id);
		}
		else if (typeof id === 'string' && Dackage._lastObj instanceof HTMLElement) {
			var element = Darryl._lastObj
			value = styleId
			styleId = id
		}
		else if (typeof id === 'object') {
			var element = id
		}
		else {
			throw new Error('元素不存在')
		}
		if (element.length === 1 || typeof element.length !== 'undefined') {
			element = element[0] || element
			element.style[styleId] = value
		} else if (element.length > 1) {
			var length = element.length, 
			i = 0
			for (;i < length; i += 1) {
				element.style[styleId] = value
			}
		}
		Dackage._lastObj = element;
		return this;
	}
	return {
		init: init,
		$: $,
		$All: $All,
		setCss: setCss
	}
})()
HTMLElement.prototype._listener = function(event, listener, useCapTrue) {
	this.addEventListener(event, listener, useCapTrue);
	return this;
}