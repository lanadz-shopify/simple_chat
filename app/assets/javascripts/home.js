$(function () {
  var renderMessages = function retrieveMessages(messages) {
    $('.messages-container').html('');

    $.each(messages, function (_, message) {
      $('.messages-container').append(Template.replaceInTemplate(messageTemplate, message));
    });
  };

  var messages = new Messages({renderer: renderMessages});
  messages.fetch();

  $('#new_message').on('submit', event, function submitNewMessage() {
    event.preventDefault();

    var $form = $(this);
    var url = $form.attr("action");
    var data = $form.serialize();

    $.ajax({
      url: url,
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function successSubmit(data) {
      messages.addMessage(data);
      $form.trigger('reset');
    });
  });

  var intervalID = window.setInterval(function intervalFunction() {
    $('#submit_btn').prop('disabled', false);
    messages.fetch();
  }, 2000);
});
