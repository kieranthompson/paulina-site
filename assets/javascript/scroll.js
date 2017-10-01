$(function() {
  $('#kancelarii-link').click(function() {
    $('html, body').animate({
        scrollTop:$('#kancelarii').offset().top
    },
    'slow'
    )
  })
})
