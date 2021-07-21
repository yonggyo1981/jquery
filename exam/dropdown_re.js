$(function() {
	/** 메뉴 열고 닫기 */
	$(".menu_open").click(function() {
		const nav = $("nav");
		const menuOpen = $(".menu_open");
		if (nav.hasClass("on")) { // 열려 있음
			// classList.contains()
			// 닫기
			nav.removeClass("on");
			// classList.remove()
			menuOpen.text("메뉴열기");
		} else { // 닫혀 있음 
			// 열기
			nav.addClass("on");
			// classList.add()
			menuOpen.text("메뉴닫기");
		}
	});
});