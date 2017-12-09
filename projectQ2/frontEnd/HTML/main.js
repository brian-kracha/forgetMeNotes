$(document).ready(function() {
  console.log('here')
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 200, // Creates a dropdown of 50 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  let securityQuestion
  let foreignCountry = $('.foreignCountry');
  let petName = $('.petName');
  let luckyNumber = $('.luckyNumber');
  let favoriteColor = $('.favoriteColor');
  let elementarySchool = $('.elementarySchool');
  let questionDropdown = $('.questionDropdown');
  let signup = $("#sign-up");
  signup.submit(function() {
    let username = signup[0].elements[0].value
    let email = signup[0].elements[1].value
    let password = signup[0].elements[2].value
    let DOB = signup[0].elements[9].value
    let answer = signup[0].elements[10].value
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(DOB)
    console.log(securityQuestion)
    console.log(answer)
    event.preventDefault();
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
