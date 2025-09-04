
window.onload = function(){
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
			} else {
				//entry.target.classList.remove('in-view');
			}
		});
	}, {threshold:0.25});
	const me = document.querySelectorAll(".parallax p");
	me.forEach(element => {
		observer.observe(element);
	})
	
};
window.addEventListener("scroll", ()=>{
	if(window.scrollY >= 300) {
		$("nav ul li").addClass("navIn");
	} else {
		//$("nav ul li").removeClass("navIn");
	}
});