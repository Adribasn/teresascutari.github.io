// Smooth scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
// Submit form
$(document).ready(function () {
  $('.submit').click(function (event) {
    event.preventDefault()

    var name = $('.name').val()
    var surname = $('.surname').val()
    var email = $('.email').val()
    var sujet = $('.sujet').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email valide</div>')
    } else {
      statusElm.append('<div>Email non valide</div>')
    }

    if(sujet.length > 2) {
      statusElm.append('<div>Sujet valide</div>')
    } else {
      statusElm.append('<div>Sujet trop court</div>')
    }

    if(message.length > 20) {
      statusElm.append('<div>Message valide</div>')
    } else {
      statusElm.append('<div>Message trop court</div>')
    }
  })

})