function MyFunction(){
    alert('Hello World!');
}

// This function binds the event keycode 32 (space bar) to run the function toggleState
// This is needed since the default functionality of a check box is triggered with the space bar
//function ARIA_Checkbox_Key(event) {
//  if(event.keyCode == 32){
//    toggleState(event.target)
//  }
//}

// This function gets the aria-checked attribute of an element. If it is false, it makes it true and vice versa.
//function toggleState(el) {
  //   var img = el.getElementsByTagName('img')[0],
//  getvalue = el.getAttribute("aria-checked");

  //if (getvalue == "false") {
  //  el.setAttribute("aria-checked", "true");
  //  img.setAttribute("src", "checked.png");
 // } else {
   // el.setAttribute("aria-checked", "false");
   // img.setAttribute("src", "unchecked.png");
 // }
//}
