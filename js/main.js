window.onload = function() {
	var menu = document.querySelector(".header-nav-menu"),
		navbar = document.querySelector(".header-nav-bar");

	// Taken from Udacity's Responsive Fundamentals Course
	// https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3561069759/m-3530719305
	menu.addEventListener('click', function(e) {
			navbar.classList.toggle('open');
			e.stopPropagation();
	});
};