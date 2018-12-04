// JavaScript for Accorion Example

function togglediv() {
    var div = document.getElementById("information");
    var link = document.getElementById("toggleLink");
    var value = link.getAttribute("aria-expanded");
    div.style.display = div.style.display == "none" ? "block" : "none";
    if (value == "false") {
    	link.setAttribute("aria-expanded", "true");
    	link.innerHTML = "Hide";
    } else {
    	link.setAttribute("aria-expanded", "false");
    	link.innerHTML = "Show";
    }
}
