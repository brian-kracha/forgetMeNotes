$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.modal').modal();

  function addNote (title,content, priority, comments) {
    return `<li> <div class="collapsible-header">${title}
        <span class="badge"><i class='material-icons chatBubble'>chat_bubble_outline</i>${comments}
        <i class='material-icons ${priority}'>fiber_manual_record</i></span></div>
        <div class="collapsible-body"><span>${content}</span></div></li>`
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
      opacity:0.5,
      ready: function() {
        $('.modal-overlay')[0].style.zIndex = "1"
        $('.modal-overlay')[0].style.opacity = "0"
        // $('.comment').focus()

      },
      complete: function() { // Callback for Modal open. Modal and trigger parameters available.
        textOnNotes = $('#final_span').val()
        const selected = $("input[type='radio'][name='priority']:checked");
        let priority = selected[0].id
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
        $.ajax(options)
        .done(() => {
          $('.collapsible').append(addNote (title, textOnNotes, priority, 0))
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        })
      }
  })
  const options = {
    contentType: 'application/json',
    dataType: 'json',
    type: 'GET',
    url: '/notes'
  }
  $.ajax(options)
  .done((res) => {
    for(let i = 0; i < res.length; i++){
      $('.collapsible').append(addNote (res[i].title, res[i].textOnNotes, res[i].priority, 0))
    }
  });
});
