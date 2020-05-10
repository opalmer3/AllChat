// jshint esversion:6
// If user has not set a display name and they are trying to access a conversation then redirect back to home page
let url = window.location.href;
if (!localStorage.getItem("displayname") && url != "http://127.0.0.1:5000/") {
  window.location.href= "/";
}

// If display name set then display display name
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('displayname')){
    let name = localStorage.getItem('displayname');
    document.querySelector("#displayname").innerHTML = "Posting as: " + name;
    document.querySelector("#displayname").style.padding = "5px";
  }
});

// If lastviewed url variable set then take the user back to that page and reset the variable if user didnt arrive via refresh or back/forward click
// Get the navigation method
var p = performance.getEntriesByType("navigation");

// If the user didnt refresh or arrive by back/forward  then ask if they want to be redirected to their last viewed conversation
if (p[0].type != 'reload' && p[0].type != 'back_forward'){
  // If last viewed variable exists and isnt blank
  if (localStorage.getItem('lastviewed')){
    if (localStorage.getItem('lastviewed') != ""){
      // Get url of last viewed page
      let url = localStorage.getItem('lastviewed');
      // reset last viewed variable
      localStorage.setItem('lastviewed', "");
      if (confirm('Would you like to return to your last viewed channel?')){
          window.location.href= url;
      }
    }
  }
}
// Reset last viewed variable
localStorage.setItem('lastviewed', "");
