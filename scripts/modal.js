//Open the modal//

/* When the buttonA clicked, display modal. */
$('#buttonA').click(function () {
  $('.modal').removeClass('hidden');
});


/* display modal with CSS class. */

$('.buttonB').click(function () {
  console.log('readmore button clicked!');
  $('.modal').addClass('hidden');
})


