$(document).ready(function () {
  $('#bg').addClass('active');

  $('#chats').css('transform', 'translateX(0)');
});

// keyup is if you wanna using KeyboardEvent. the value of the keyboard youre click is the key and the value will up or input

$('input')
  .keyup(function () {
    if (input.value.length > 0) {
      $('img[src="./assets/icons/microphone-solid.svg"]').attr('src', './assets/icons/paper-plane-solid.svg');
    } else {
      $('img[src="./assets/icons/paper-plane-solid.svg"]').attr('src', './assets/icons/microphone-solid.svg');
    }
  })
  .keyup();

$('#chats div').each(function () {
  $(this).click(function () {
    $('#contact-box img,#contact-info img').attr('src', $(this).find('img').attr('src'));

    $('#contact p.contact-name , #the-info p.contact-name').html($(this).find('p').first().html());

    $('#message-container').css('clip-path', 'circle(100% at 50% 50%)');
  });

  $(this)
    .find('img')
    .click(function () {
      $('#contact-info').css('transform', 'translateY(0)');
    });
});

$('#contact-box').click(function () {
  $('#contact-info img').attr('src', $('contact').find('img').attr('src'));

  $('#the-info p.contact-name').html($('contact').find('p').html());

  $('#contact-info').css('transform', 'translateY(0)');
});

$('#contact-info img').click(function () {
  $('#contact-info').css('transform', 'translateY(-1000px)');
});
