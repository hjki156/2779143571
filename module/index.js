var qq = {
	name: '湲子',
	number: '2779143571',
	ups: 17166,
	birthday: '2007--',
	sexy: '女',
	tags: '10月5日 天秤座 | 现居陕西 | 黑夜也 别枯萎.我的向日葵. | 学生',
	signal: '他知道风从哪个方向里来.'
}
function display(element) {
	console.log(element)
	return function() {
		element.style.opacity = 1
	}
}
function amn(j) {
	var hrs = document.getElementsByTagName('hr')
	if (hrs.length === 0) {
		return 0
	}
	console.log('run ', hrs.length);
	hrs[j].style.marginLeft = '10%'
	j += 1
	if (j < hrs.length) {
		setTimeout(function() {
			amn(j)
		}, 309)
	}
}
function main() {
	document.title = qq.name + document.title
	Dackage.$('.headerimg').addEventListener('load', display(Dackage.$('.headerimg')))
	Dackage.$('.avatar').src += qq.number
	Dackage.$('.avatar').addEventListener('load', display(Dackage.$('.avatar')))
	Dackage.$('.qq').innerText = qq.number
	Dackage.$('.name').innerText = qq.name
	Dackage.$('#ups').innerText = qq.ups
	Dackage.$('.signal').innerHTML = '<p>' + qq.signal + '</p>'
	if (typeof qq.tags === 'string') {
		qq.tags = qq.tags.split('|')
	}
	var length = qq.tags.length
	var i = 0
	var tags = Dackage.$('.tags')
	var age = new Date().getFullYear() - qq.birthday.split('-')[0]
	if (qq.sexy === 'female' || qq.sexy === '女') {
		tags.innerHTML += '<p class="female">' + age + '</p>\n'
	} else {
		tags.innerHTML += '<p class="male">' + age + '</p>\n'
	}
	for (; i < length; i += 1) {
		tags.innerHTML += '<p>' + qq.tags[i] + '</p>\n'
	}
	amn(0)
	return 0
}
window.addEventListener('load', main)