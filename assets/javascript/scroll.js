$(function() {
  $('#strona-link, #third-arrow').click(function() {
    $('html, body').animate({
        scrollTop:$('body').offset().top
    },
    'slow'
    )
  })
})

$(function() {
  $('#kancelarii-link').click(function() {
    $('html, body').animate({
        scrollTop:$('#kancelarii').offset().top - 150
    },
    'slow'
    )
  })
})

$(function() {
  $('#zakres-link, #first-arrow').click(function() {
    $('html, body').animate({
      scrollTop:$('#zakres-heading').offset().top - 80
    },
    'slow'
    )
    })
  })

  $(function() {
    $('#kontact-link, #second-arrow').click(function() {
      $('html, body').animate({
        scrollTop:$('#border-2').offset().top
      },
      'slow'
      )
      })
    })
