$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('#logIn').click(function(event) {
    event.preventDefault();
    const email = $('#Email').val().trim();
    const password = $('#Password').val();
    if(!email) {
      return Materialize.toast('email field is empty', 3000);
    }
    if(!password) {
      return Materialize.toast('password field is empty', 3000);
    }
    console.log(email, password);

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({email, password}),
      dataType: 'json',
      type: 'POST',
      url: '/login'
    };

    $.ajax(options)
      .done((response) => {
        let cookie = `jwt=${response.token}`
        document.cookie = cookie;
        window.location.href = '/dashboard.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  })
})
  $('#log-In').click(function(event) {
    console.log('here');
    event.preventDefault();
    const email = $('#email').val().trim();
    const password = $('#password').val();
    if(!email) {
      return Materialize.toast('email field is empty', 3000);
    }
    if(!password) {
      return Materialize.toast('password field is empty', 3000);
    }
    console.log(email, password);
    const options = {
      contentType: 'application/json',
      data: JSON.stringify({email, password}),
      dataType: 'json',
      type: 'POST',
      url: '/login'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/dashboard.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  })
