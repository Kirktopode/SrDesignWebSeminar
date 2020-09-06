function showNavAndSidebar() {
	nav = document.getElementById("navbar");
	sidebar = document.getElementById("sidebar");
	mainbody = document.getElementById("main-body");
	showbutton = document.getElementById("show-button");
	if (nav.style.display !== "block") {
		nav.style.display = "block";
		sidebar.style.display = "block";
		showbutton.innerText = "Hide Sidebar and Nav"
		mainbody.style.marginTop = "25px";
	} else {
		nav.style.display = "none";
		sidebar.style.display = "none";
		mainbody.style.marginTop="0px";
		showbutton.innerText = "Show Sidebar and Nav"
	}
}
