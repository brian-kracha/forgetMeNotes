$(document).ready(function(){
  var textOnNotes= ""
  var priority = "";
  $('.collapsible').collapsible();
  $('.modal').modal();

  function addNote (title,content, priority, comments) {
    return `<li> <div class="collapsible-header">${title}
        <span class="badge"><i class='material-icons chatBubble'>chat_bubble_outline</i>${comments}
        <i class='material-icons ${priority}'>fiber_manual_record</i></span></div>
        <div class="collapsible-body"><span>${content}</span></div></li>`
  }
  function addCategory (title, color){
    return `<div class="carousel-item ${color} white-text" href="#one!">
            <h2>${Title}</h2>
            </div>`
  }
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 200, // Creates a dropdown of 50 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  let pin = ""
  let Public = $('.public')
  let Private = $('.private')
  Public.click(function(){
    pin = Public[0].innerText
    $('#Pin')[0].innerText = pin
  })
  Private.click(function(){
    pin = Private[0].innerText
    $('#Pin')[0].innerText = pin
  })
  // $('.modal').modal();
  // $('#agree').click(function(event){
  //     console.log('click')
  // })
  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the moda // Ending top style attribute
      complete: function() { // Callback for Modal open. Modal and trigger parameters available.
        textOnNotes = $('#final_span').val()
        const selected = $("input[type='radio'][name='priority']:checked");
        priority = selected[0].id
        let title = $('.title').val();
        let tag = $('#Tag').val();
        let reminder = $('#Reminder').val()
        // console.log(textOnNotes)
        // console.log(priority)
        // console.log(title)
        // console.log(tag)
        // console.log(reminder)
        // console.log(pin)
        const options = {
          contentType: 'application/json',
          data: JSON.stringify({title, textOnNotes, priority,tag,reminder,pin}),
          dataType: 'json',
          type: 'POST',
          url: '/notes'
        }
        ajax(options)
        .done(() => {
          window.location.href = '/notes.html';
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        })
      }
  });
});
