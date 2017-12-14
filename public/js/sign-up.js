$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 200, // Creates a dropdown of 50 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  let securityQuestion = $('#SecurityQuestion')[0].innerText;
  let foreignCountry = $('.foreignCountry');
  let petName = $('.petName');
  let luckyNumber = $('.luckyNumber');
  let favoriteColor = $('.favoriteColor');
  let elementarySchool = $('.elementarySchool');
  let questionDropdown = $('.questionDropdown');
  let signup = $("#sign-up");
  signup.submit(function(event) {
    event.preventDefault();
    const username = $('#Username').val().trim();
    const email = $('#EmailSignup').val().trim();
    const password = $('#PasswordSignup').val();
    const confirmPassword = $('#ConfirmPassword').val();
    const DOB = $('#DOB').val();
    const answer = $('#Answer').val().trim()
    if(password !== confirmPassword) {
      return Materialize.toast('password does not match', 3000);
    }
    if(!DOB) {
      return Materialize.toast('DOB must not be blank', 3000);
    }
    if(securityQuestion === 'SECURITY QUESTION') {
      return Materialize.toast('please select the security Question', 3000);
    }
    if(!answer) {
      return Materialize.toast('please asnwer the security Question', 3000);
    }
    console.log(username, email, password, confirmPassword, DOB, answer, securityQuestion);
    securityQuestion = securityQuestion.replace(/[\t\n]+/g,' ')
    const options = {
      contentType: 'application/json',
      data: JSON.stringify({username, email, password, DOB, securityQuestion,answer}),
      dataType: 'json',
      type: 'POST',
      url: '/new-signup'
    }

    $.ajax(options)
      .done(() => {
        window.location.href = '/landing.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      })
  })
  foreignCountry.click(function() {
    securityQuestion = foreignCountry[0].innerText
    questionDropdown[0].innerText = securityQuestion
  })
  petName.click(function() {
    securityQuestion = petName[0].innerText
    questionDropdown[0].innerText = securityQuestion
  })
  luckyNumber.click(function() {
    securityQuestion = luckyNumber[0].innerText
    questionDropdown[0].innerText = securityQuestion
  })
  favoriteColor.click(function() {
    securityQuestion = favoriteColor[0].innerText
    questionDropdown[0].innerText = securityQuestion
  })
  elementarySchool.click(function() {
    securityQuestion = elementarySchool[0].innerText
    questionDropdown[0].innerText = securityQuestion
  })
})
