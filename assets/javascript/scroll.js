$(function() {
  $('#kancelarii-link, #first-arrow').click(function() {
    $('html, body').animate({
        scrollTop:$('#kancelarii').offset().top
    },
    'slow'
    )
  })
})

$(function() {
  $('#zakres-link').click(function() {
    $('html, body').animate({
      scrollTop:$('#zakres').offset().top
    },
    'slow'
    )
    })
  })
