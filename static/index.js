//jshint esversion:6
// If display name set remove form to enter display name and display welcome message
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('displayname')){

  let name = localStorage.getItem('displayname');

  const div = document.createElement('div');
  div.setAttribute('class', "welcome")

  const message = document.createElement('h3');
  message.innerHTML = "Hi " + name + ", thanks for using All Chat! Feel free to start a new conversation and join ongoing conversations!";

  const form = document.createElement('form');
  form.setAttribute('action', "/newchannel");

  const button = document.createElement('button');
  button.setAttribute('type', "submit");
  button.setAttribute('class', "btn btn-dark");
  button.innerHTML = "Start a new conversation";

  form.appendChild(button);

  const hr = document.createElement('hr');

  div.appendChild(message);
  div.appendChild(hr);
  div.appendChild(form);

  document.querySelector(".display-name-form").remove();
  document.querySelector(".top-box").appendChild(div);
}
});

// enable submit button when input field length greater than 0
document.addEventListener('keyup', e => {
  if (e.target.name === 'displayname') {
    let input = document.querySelector("#myForm input[name='displayname']").value;

    if (input.length > 0) {
      document.querySelector("#myForm button[type='submit']").disabled = false;
    } else {
      document.querySelector("#myForm button[type='submit']").disabled = true;
    }
  }
});

// When form submitted store display name in local localStorage
document.addEventListener('submit', e => {
  if (e.target.id === 'myForm'){
    let input = document.querySelector("#myForm input[name='displayname']").value;
    localStorage.setItem('displayname', input);
    e.preventDefault();
    location.reload();
  }
});

//Add link functionality to table rows
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('tbody tr').onclick = function (){
    const link = this.firstElementChild.firstElementChild.getAttribute('href');
    window.location.href = link;
  }
});
