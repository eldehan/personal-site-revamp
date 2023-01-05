/*
  Photon by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  emailjs.init('0Ag29JTY58HB9TTpN');

  var $window = $(window),
    $body = $('body'),
    $form = $('#email-form'),
    $form_message = $('#form-message');

  function sendmail() {
    let fullName = $("#name").val();
    let userEmail = $("#email").val();
    let userMessage = $("#message").val();

    const contactParams = {
      from_name: fullName,
      from_email: userEmail,
      message: userMessage
    };

    emailjs.send('service_nxzeaf9', 'template_ou6qv8a', contactParams).then(function (res) { })
  }

  $form.submit(function (e) {
    e.preventDefault()

    sendmail()

    $form[0].reset()

    $form_message.text('Thanks for reaching out!')
    $form_message.css('display', 'block')

    setTimeout(() => {
      $form_message.text('')
      $form_message.css('display', 'none')
    }, 5000)
  })

  // Breakpoints.
  breakpoints({
    xlarge: ['1141px', '1680px'],
    large: ['981px', '1140px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['321px', '480px'],
    xxsmall: [null, '320px']
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Scrolly.
  $('.scrolly').scrolly();

})(jQuery);