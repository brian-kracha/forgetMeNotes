$(document).ready(function(){
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
});
