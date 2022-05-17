/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
$.fn.autoResize = function(){
	let r = e => {
		e.style.height = '';
		e.style.height = e.scrollHeight + 'px'
	};
	return this.each((i,e) => {
		e.style.overflow = 'hidden';
		r(e);
		$(e).bind('input', e => {
			r(e.target);
		})
	})
};