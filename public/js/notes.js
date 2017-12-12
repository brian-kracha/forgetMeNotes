$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.modal').modal();
  $(".button-collapse").sideNav()
let logOut = $('.logOut')

logOut.click(function(event){
  var delete_cookie = function(jwt) {
    document.cookie = jwt + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
})



});
