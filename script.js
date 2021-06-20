const CONSOLE = document.getElementById('console')
const CLOSE = document.getElementById('close')
const TOP = document.getElementById('top')
const CONTENT = document.getElementById('content').querySelector('pre')

const formatConsole = (elem) => {
	elem.innerHTML = 'web-console nathan-pham 2020'
	const colors = {
		warn: '#FF0000',
		error: '#FF0000',
		success: '#7FFF00',
		info: '#1E90FF',
		log: '#FFFFFF'
	}
	let temp = {}
	for(let key in colors) {
		temp[key] = (words) => {
			if(typeof words === 'object') 
				words = JSON.stringify(words, null, 2)
			elem.innerHTML += `<span style="color: ${colors[key]}">${words}</span>`
		}
	}
	temp.clear = () => elem.innerHTML = 'TheConsole AdCharity 2020'
	return temp
}

CLOSE.addEventListener('click', () => {
	CONSOLE.remove()
})

window.console = formatConsole(CONTENT)
window.onerror = msg => console.warn(msg)

console.success('Loaded Console!')

drags(CONSOLE)