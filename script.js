const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header .navigation');
const navLinks = document.querySelectorAll('.header .navigation a');

if (header && burger && navigation) {
	// Toggle menu only when burger is clicked
	burger.addEventListener('click', event => {
		event.stopPropagation();
		header.classList.toggle('menu-open');
		burger.classList.toggle('open');
	});

	// Close when a nav link is clicked
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (header.classList.contains('menu-open')) {
				header.classList.remove('menu-open');
				burger.classList.remove('open');
			}
		});
	});

	// Close on resize above breakpoint
	window.addEventListener('resize', () => {
		if (window.innerWidth > 768 && header.classList.contains('menu-open')) {
			header.classList.remove('menu-open');
			burger.classList.remove('open');
		}
	});

	// Close when clicking outside header
	document.addEventListener('click', event => {
		if (header.classList.contains('menu-open') && !header.contains(event.target)) {
			header.classList.remove('menu-open');
			burger.classList.remove('open');
		}
	});
}
