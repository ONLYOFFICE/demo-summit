window.addEventListener("load", function () {
	const agenda = document.querySelector(".agenda-event");
	const heroLeftTopIcon = document.querySelector(".left-top-icon");
	const heroLeftCenterIcon = document.querySelector(".left-center-icon");
	const heroLeftBottomIcon = document.querySelector(".left-bottom-icon");

	const heroRightTopIcon = document.querySelector(".right-top-icon");
	const heroRightCenterIcon = document.querySelector(".right-center-icon");
	const heroRightCenterFillIcon = document.querySelector(".right-center-fill-icon");
	const heroRightBottomIcon = document.querySelector(".right-bottom-icon");

	const agendaLeftTopIcon = document.querySelector(".agenda-left-top-icon");
	const agendaLeftCenterIcon = document.querySelector(".agenda-left-center-icon");
	const agendaLeftBottomIcon = document.querySelector(".agenda-left-bottom-icon");

	const agendaRightTopIcon = document.querySelector(".agenda-right-top-icon");
	const agendaRightCenterIcon = document.querySelector(".agenda-right-center-icon");
	const agendaRightBottomIcon = document.querySelector(".agenda-right-bottom-icon");

	if (document.querySelector(".main-page")) {
		window.addEventListener("scroll", handleScroll);
	}

	function handleScroll() {
		const scrollValue = window.scrollY;
		const agendaScrollValue = -agenda.getBoundingClientRect().top;

		if (scrollValue > 0) {
			updateHeroIcons(scrollValue);
		}

		if (agendaScrollValue > -200) {
			updateAgendaIcons(agendaScrollValue);
		}
	};

	function updateHeroIcons(scrollValue) {
		heroLeftTopIcon.style.top = 154 + scrollValue * 1.2 + "px";
		heroLeftTopIcon.style.left = -69 - scrollValue * -2.4 + "px";
		heroLeftTopIcon.style.transform = `rotate(${scrollValue * 0.4}deg)`;

		heroLeftCenterIcon.style.top = 511 + scrollValue * -0.7 + "px";
		heroLeftCenterIcon.style.left = -27 - scrollValue * -2.4 + "px";
		heroLeftCenterIcon.style.transform = `rotate(${-scrollValue * 0.3}deg)`;

		heroLeftBottomIcon.style.top = 644 + scrollValue * -1.2 + "px";
		heroLeftBottomIcon.style.left = 3 - scrollValue * -1 + "px";
		heroLeftBottomIcon.style.transform = `rotate(${-scrollValue * 0.6}deg)`;

		heroRightTopIcon.style.top = 125 + scrollValue * 2 + "px";
		heroRightTopIcon.style.right = 20 - scrollValue * -2.8 + "px";
		heroRightTopIcon.style.transform = `rotate(${scrollValue * 0.5}deg)`;

		heroRightCenterIcon.style.top = 248 + scrollValue * -0.7 + "px";
		heroRightCenterIcon.style.right = -23 - scrollValue * -2.4 + "px";
		heroRightCenterIcon.style.transform = `rotate(${scrollValue * 0.4}deg)`;

		heroRightCenterFillIcon.style.top = 542 + scrollValue * -0.5 + "px";
		heroRightCenterFillIcon.style.right = 102 - scrollValue * -3 + "px";
		heroRightCenterFillIcon.style.transform = `rotate(${scrollValue * -0.25}deg)`;

		heroRightBottomIcon.style.top = 704 + scrollValue * -1.2 + "px";
		heroRightBottomIcon.style.right = 3 - scrollValue * -1 + "px";
		heroRightBottomIcon.style.transform = `rotate(${scrollValue * 0.45}deg)`;
	}

	function updateAgendaIcons(agendaScrollValue) {
		agendaLeftTopIcon.style.top = 185 + (agendaScrollValue + 200) * 1.2 + "px";
		agendaLeftTopIcon.style.left = -58 - (agendaScrollValue + 200) * -2.4 + "px";
		agendaLeftTopIcon.style.transform = `rotate(${(agendaScrollValue + 200) * 0.4}deg)`;

		agendaLeftCenterIcon.style.top = 343 + (agendaScrollValue + 200) * -0.2 + "px";
		agendaLeftCenterIcon.style.left = 35 - (agendaScrollValue + 200) * -2.4 + "px";
		agendaLeftCenterIcon.style.transform = `rotate(${-(agendaScrollValue + 200) * 0.3}deg)`;

		agendaLeftBottomIcon.style.top = 631 + (agendaScrollValue + 200) * -1.2 + "px";
		agendaLeftBottomIcon.style.left = -78 - (agendaScrollValue + 200) * -1 + "px";
		agendaLeftBottomIcon.style.transform = `rotate(${-(agendaScrollValue + 200) * 0.6}deg)`;

		agendaRightTopIcon.style.top = 157 + (agendaScrollValue + 200) * 2 + "px";
		agendaRightTopIcon.style.right = -45 - (agendaScrollValue + 200) * -2.8 + "px";
		agendaRightTopIcon.style.transform = `rotate(${(agendaScrollValue + 200) * 0.5}deg)`;

		agendaRightCenterIcon.style.top = 551 + (agendaScrollValue + 200) * -0.7 + "px";
		agendaRightCenterIcon.style.right = -15 - (agendaScrollValue + 200) * -2.4 + "px";
		agendaRightCenterIcon.style.transform = `rotate(${(agendaScrollValue + 200) * 0.4}deg)`;

		agendaRightBottomIcon.style.top = 710 + (agendaScrollValue + 200) * -1.2 + "px";
		agendaRightBottomIcon.style.right = -47 - (agendaScrollValue + 200) * -1 + "px";
		agendaRightBottomIcon.style.transform = `rotate(${(agendaScrollValue + 200) * 0.45}deg)`;
	};

	if (document.querySelector(".phone_label")) {
		document.addEventListener("click", function () {
			if (!document.querySelector(".country-list")?.classList.contains("hide")) {
				document.querySelector(".phone_label").classList.add("active")
			} else {
				document.querySelector(".phone_label").classList.remove("active")
			}
		});
	}
});