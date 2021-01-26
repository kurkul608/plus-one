let dots          = 4;
let sliderElem    = document.querySelector('.slider')
let dotElems      = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) => {	
	dotElem.addEventListener('click', (e) => {
		let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
		let newPos     = parseInt(dotElem.getAttribute('data-pos'))
		let newDirection     = (newPos > currentPos ? 'right' : 'left')
		let currentDirection = (newPos < currentPos ? 'right' : 'left')

		indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
		indicatorElem.classList.add(`slider__indicator--${ newDirection }`)		
		sliderElem.setAttribute('data-pos', newPos)
	})
	
})
document.getElementsByClassName('BannerOpt')[0].addEventListener('click', function(){
	let num = document.getElementsByClassName('slider')[0].getAttribute('data-pos')
	if(parseInt(num) - 1 >= 0){
		indicatorElem.classList.add('slider__indicator--left')
		indicatorElem.classList.remove('slider__indicator--right')
		document.getElementsByClassName('slider')[0].setAttribute('data-pos', parseInt(num) - 1)
	}
})


document.getElementsByClassName('BannerOpt')[1].addEventListener('click', function(){
	let num = document.getElementsByClassName('slider')[0].getAttribute('data-pos')
	if(parseInt(num) + 1 <= dots-1){
		indicatorElem.classList.remove('slider__indicator--left')
		indicatorElem.classList.add('slider__indicator--right')

		document.getElementsByClassName('slider')[0].setAttribute('data-pos', parseInt(num) + 1)
	}

})