$(document).ready(function(){
  function addCategory (title, color){
    return `<div class="carousel-item ${color} white-text" href="#one!">
            <h2>${Title}</h2>
            </div>`
  }
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    complete: function(){
      let title = $('.title').val()
      let color = $('.color').val()
      const options = {
        contentType: 'application/json',
        data: JSON.stringify({title,color}),
        dataType: 'json',
        type: 'POST',
        url: '/categories'
      }
      $.ajax(options)
        .done(() => {
          addCategory(title,color)
          // window.location.href = '/dashboard.html';
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
       console.log(res);
     })
     .fail(($xhr) => {
       Materialize.toast($xhr.responseText, 3000);
     })

     $('#newCategory').click(function(){
       let roughdata = addCategory(title,color)
       const options = {
         contentType: 'application/json',
         data: JSON.stringify({username, email, password, DOB, securityQuestion,answer}),
         dataType: 'json',
         type: 'POST',
         url: '/new-signup'
       }

       $.ajax(options)
         .done(() => {
           window.location.href = '/dashboard.html';
         })
         .fail(($xhr) => {
           Materialize.toast($xhr.responseText, 3000);
         })
     })
});
