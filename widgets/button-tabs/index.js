activeTab = 1

function openTab(num) {
	oldTab = document.getElementById("tab-" + activeTab)
	newTab = document.getElementById("tab-" + num)
	oldPage = document.getElementById("page-" + activeTab)
	newPage = document.getElementById("page-" + num)
	oldTab.className = ""
	oldPage.className = "page"
	newTab.className = "active"
	newPage.className = "page active"
	activeTab = num
}
