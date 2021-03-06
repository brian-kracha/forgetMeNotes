$(document).ready(function(){
  window.getCookie = function(name) {
    match = document.cookie.match(new RegExp(name + '=([^;]+)'));
    if (match) return match[1];
  }
  $('.logOut').click(function(){
    document.cookie = 'jwt' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href= '/landing.html'
  })
  $('#profileButton').click(function(){
    window.location.href = '/profile.html'
  })
  $('.phoneUser').click(function(){
    window.location.href = '/profile.html'
  })
  let username =window.getCookie('username')
  console.log(username)
  $('.phoneUser').html(username);
  $('#profileButton').html(username)
  $('.button-collapse').sideNav();
  var title=""
  var color=""
  function addCategory (title, color,catID){
    return '<div class="carousel-item ' + color +  ' white-text"><h2>' + title + '</h2><div class="center categoryButton"><a class="btn waves-effect white grey-text darken-text-2" id='+catID+'>open</a></div></div>'
  }
  // <div class="carousel-fixed-item center">
  //       <a class="btn waves-effect white grey-text darken-text-2">button</a>
  //     </div>

  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    complete: function(){
      title = $('.title').val()
      color = $('.color').val()
      if(title === ""){
        return Materialize.toast('please add title to category', 3000);
      }
      if(color===""){
        color = "red"
      }
      const options = {
        contentType: 'application/json',
        data: JSON.stringify({title,color}),
        dataType: 'json',
        type: 'POST',
        url: '/categories'
      }
      $.ajax(options)
        .done(() => {
          var slider = $('.carousel')
          slider.carousel();
          // console.log(appendData)
          console.log(title)
          slider.prepend(addCategory(title, color))
          if (slider.hasClass('initialized')){
			         slider.removeClass('initialized')
          }
          slider.carousel();
          $('.title').val("")
          $('.color').val("")
          window.location.href = '/dashboard.html'
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        })
    }
  });

     $('.carousel').carousel();
     const options = {
       contentType: 'application/json',
       dataType: 'json',
       type: 'GET',
       url: '/categories'
     }
     $.ajax(options)
     .done((res) => {
       console.log(res)
       var slider = $('.carousel')
      //  slider.carousel();

       for(let i=0; i<res.length; i++){
         console.log(slider)
        //  slider.style.href="https://www.google.com/"
         slider.append(addCategory(res[i].title, res[i].image_url,res[i].id))
         if (slider.hasClass('initialized')){
              slider.removeClass('initialized')
              console.log('here')
         }
         slider.carousel();
         $(`#${res[i].id}`).on('click touchstart',function(){
           console.log('here')
           let cookie = `catID=${res[i].id}`
           document.cookie = cookie;
           window.location.href = '/notes.html'
         })
      }
       console.log(res)
     })
     .fail(($xhr) => {
       Materialize.toast($xhr.responseText, 3000);
     })
     const options1 = {
     contentType: 'application/json',
     dataType: 'json',
     type: 'GET',
     url: '/image'
   }

   $.ajax(options1)
     .done((data) => {
       var imgPreview = document.getElementById('img-preview');
       imgPreview.src = data[data.length-1].image_url;
       console.log(data[0])
      //  $('#img-preview').attr('src',data.image_url)

     })
     .fail(($xhr) => {
       Materialize.toast($xhr.responseText, 3000);
     })
    //  $('#newCategory').click(function(){
    //    let roughdata = addCategory(title,color)
    //    const options = {
    //      contentType: 'application/json',
    //      data: JSON.stringify({username, email, password, DOB, securityQuestion,answer}),
    //      dataType: 'json',
    //      type: 'POST',
    //      url: '/new-signup'
    //    }
    //
    //    $.ajax(options)
    //      .done(() => {
    //        window.location.href = '/dashboard.html';
    //      })
    //      .fail(($xhr) => {
    //        Materialize.toast($xhr.responseText, 3000);
    //      })
    //  })
});
