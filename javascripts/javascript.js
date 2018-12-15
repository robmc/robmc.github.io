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

// --------------------------------------------------------------------------------------------------

// JavaScript for ARIA Checkbox Example

// This function binds the event keycode 32 (space bar) to run the function toggleState
// This is needed since the default functionality of a check box is triggered with the space bar
function ARIA_Checkbox_Key(event) {
  if(event.keyCode == 32){
    toggleState(event.target)
  }
}

// This function gets the aria-checked attribute of an element. If it is false, it makes it true and vice versa. It also toggles between the checked and unchecked checkbox images.
function toggleState(el) {
     var img = el.getElementsByTagName('img')[0],
  getvalue = el.getAttribute("aria-checked");

  if (getvalue == "false") {
    el.setAttribute("aria-checked", "true");
    img.setAttribute("src", "/images/checked.png");
  } else {
    el.setAttribute("aria-checked", "false");
    img.setAttribute("src", "/images/unchecked.png");
  }
}

// --------------------------------------------------------------------------------------------------
