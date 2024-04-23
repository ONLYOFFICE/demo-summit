const agenda = document.querySelector('.agenda__event')
const heroLeftTopIcon = document.querySelector('.left-top-icon')
const heroLeftCenterIcon = document.querySelector('.left-center-icon')
const heroLeftBottomIcon = document.querySelector('.left-bottom-icon')

const heroRightTopIcon = document.querySelector('.right-top-icon')
const heroRightCenterIcon = document.querySelector('.right-center-icon')
const heroRightCenterFillIcon = document.querySelector(
	'.right-center-fill-icon '
)
const heroRightBottomIcon = document.querySelector('.right-bottom-icon ')

const agendaLeftTopIcon = document.querySelector('.agenda-left-top-icon')
const agendaLeftCenterIcon = document.querySelector('.agenda-left-center-icon')
const agendaLeftBottomIcon = document.querySelector('.agenda-left-bottom-icon')

const agendaRightTopIcon = document.querySelector('.agenda-right-top-icon')
const agendaRightCenterIcon = document.querySelector(
	'.agenda-right-center-icon'
)
const agendaRightBottomIcon = document.querySelector(
	'.agenda-right-bottom-icon '
)

window.addEventListener('scroll', handleScroll)

function handleScroll() {
	const scrollValue = window.scrollY
	const agendaScrollValue = -agenda.getBoundingClientRect().top

	if (scrollValue > 0) {
		updateHeroIcons(scrollValue)
	}

	if (agendaScrollValue > -200) {
		updateAgendaIcons(agendaScrollValue)
	}
}

function updateHeroIcons(scrollValue) {
	heroLeftTopIcon.style.top = 154 + scrollValue * 1.2 + 'px'
	heroLeftTopIcon.style.left = -69 - scrollValue * -2.4 + 'px'
	heroLeftTopIcon.style.transform = `rotate(${scrollValue * 0.4}deg)`

	heroLeftCenterIcon.style.top = 511 + scrollValue * -0.7 + 'px'
	heroLeftCenterIcon.style.left = -27 - scrollValue * -2.4 + 'px'
	heroLeftCenterIcon.style.transform = `rotate(${-scrollValue * 0.3}deg)`

	heroLeftBottomIcon.style.top = 644 + scrollValue * -1.2 + 'px'
	heroLeftBottomIcon.style.left = 3 - scrollValue * -1 + 'px'
	heroLeftBottomIcon.style.transform = `rotate(${-scrollValue * 0.6}deg)`

	heroRightTopIcon.style.top = 125 + scrollValue * 2 + 'px'
	heroRightTopIcon.style.right = 20 - scrollValue * -2.8 + 'px'
	heroRightTopIcon.style.transform = `rotate(${scrollValue * 0.5}deg)`

	heroRightCenterIcon.style.top = 248 + scrollValue * -0.7 + 'px'
	heroRightCenterIcon.style.right = -23 - scrollValue * -2.4 + 'px'
	heroRightCenterIcon.style.transform = `rotate(${scrollValue * 0.4}deg)`

	heroRightCenterFillIcon.style.top = 542 + scrollValue * -0.5 + 'px'
	heroRightCenterFillIcon.style.right = 102 - scrollValue * -3 + 'px'
	heroRightCenterFillIcon.style.transform = `rotate(${scrollValue * -0.25}deg)`

	heroRightBottomIcon.style.top = 704 + scrollValue * -1.2 + 'px'
	heroRightBottomIcon.style.right = 3 - scrollValue * -1 + 'px'
	heroRightBottomIcon.style.transform = `rotate(${scrollValue * 0.45}deg)`
}

function updateAgendaIcons(agendaScrollValue) {
	agendaLeftTopIcon.style.top = 185 + (agendaScrollValue + 200) * 1.2 + 'px'
	agendaLeftTopIcon.style.left = -58 - (agendaScrollValue + 200) * -2.4 + 'px'
	agendaLeftTopIcon.style.transform = `rotate(${
		(agendaScrollValue + 200) * 0.4
	}deg)`

	agendaLeftCenterIcon.style.top = 343 + (agendaScrollValue + 200) * -0.2 + 'px'
	agendaLeftCenterIcon.style.left = 35 - (agendaScrollValue + 200) * -2.4 + 'px'
	agendaLeftCenterIcon.style.transform = `rotate(${
		-(agendaScrollValue + 200) * 0.3
	}deg)`

	agendaLeftBottomIcon.style.top = 631 + (agendaScrollValue + 200) * -1.2 + 'px'
	agendaLeftBottomIcon.style.left = -78 - (agendaScrollValue + 200) * -1 + 'px'
	agendaLeftBottomIcon.style.transform = `rotate(${
		-(agendaScrollValue + 200) * 0.6
	}deg)`

	agendaRightTopIcon.style.top = 157 + (agendaScrollValue + 200) * 2 + 'px'
	agendaRightTopIcon.style.right = -45 - (agendaScrollValue + 200) * -2.8 + 'px'
	agendaRightTopIcon.style.transform = `rotate(${
		(agendaScrollValue + 200) * 0.5
	}deg)`

	agendaRightCenterIcon.style.top =
		551 + (agendaScrollValue + 200) * -0.7 + 'px'
	agendaRightCenterIcon.style.right =
		-15 - (agendaScrollValue + 200) * -2.4 + 'px'
	agendaRightCenterIcon.style.transform = `rotate(${
		(agendaScrollValue + 200) * 0.4
	}deg)`

	agendaRightBottomIcon.style.top =
		710 + (agendaScrollValue + 200) * -1.2 + 'px'
	agendaRightBottomIcon.style.right =
		-47 - (agendaScrollValue + 200) * -1 + 'px'
	agendaRightBottomIcon.style.transform = `rotate(${
		(agendaScrollValue + 200) * 0.45
	}deg)`
}


// window.addEventListener("DOMContentLoaded", function() {
//     [].forEach.call( document.querySelectorAll('.phone_flag'), function(input) {
//     var keyCode;
//     function mask(event) {
//         event.keyCode && (keyCode = event.keyCode);
//         var pos = this.selectionStart;
//         if (pos < 3) event.preventDefault();
//         var matrix = "+7 XXX XX XX XX",
//             i = 0,
//             def = matrix.replace(/\D/g, ""),
//             val = this.value.replace(/\D/g, ""),
//             new_value = matrix.replace(/[_\d]/g, function(a) {
//                 return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//             });
//         i = new_value.indexOf("_");
//         if (i != -1) {
//             i < 5 && (i = 3);
//             new_value = new_value.slice(0, i)
//         }
//         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//             function(a) {
//                 return "\\d{1," + a.length + "}"
//             }).replace(/[+()]/g, "\\$&");
//         reg = new RegExp("^" + reg + "$");
//         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//         if (event.type == "blur" && this.value.length < 5)  this.value = ""
//     }

//     input.addEventListener("input", mask, false);
//     input.addEventListener("focus", mask, false);
//     input.addEventListener("blur", mask, false);
//     input.addEventListener("keydown", mask, false)

//   });

// });
