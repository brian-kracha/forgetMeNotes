$(document).ready(function(event) {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    // $('.modal').modal();
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: 0 // Opacity of modal background
    }) // Ending top style attribute
});
