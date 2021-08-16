// check for connection
console.log("connected!");

// for when addSong button is clicked
$('#addSong').click(event => {
 event.preventDefault()

 const song = $('#song').val()

 let songElem = $(`
 <div card-body class="songBody">
 <button class="delete">x</button>
 <button class="isListened">Not Listened</button>
 <p class="songParagraph">
 <span>${song}</span>
 </p>
 </div>
 `)

 $('#songs').append(songElem)
 $('#song').val('')

})

// global event listener for deletion
$(document).click(event => {
 if ($(event.target).attr('class') === 'delete') {
  $(event.target).parent().remove()
 }
})

// global event listerner for isListened (toggle between listened and not listed)
$(document).click(event => {
 if ($(event.target).attr('class') === 'isListened') {
  if ($(event.target).text() === 'Listened') {
   $(event.target).text('Not Listened')
  } else {
   $(event.target).text('Listened')
  }
 }
})
