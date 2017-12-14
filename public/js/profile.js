$(document).ready(function(event) {
  $('.logOut').click(function(){
    document.cookie = 'jwt' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href= '/landing.html'
  })
    let a = 1
    let b = 1
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: 0, // Opacity of modal background
      ready: function() {
        $('.modal-overlay')[0].style.zIndex = "1"
        // $('.comment').focus()
      },
      complete: function() {
        comment = ($('.comment').val())
        $('.comment')[0].value = ""
        console.log(comment)
      }
    })
    $('.thumbup').click(function() {
      console.log($('.like')[0].innerText)
      $('.like')[0].innerText = a
      a++
    })
    $('.thumbdown').click(function() {
      console.log($('.dislike')[0].innerText)
      $('.dislike')[0].innerText = b
      b++
    })
});
