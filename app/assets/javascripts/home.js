$(function () {
  var chat = new Chat();
  chat.fetchMessages();

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
      chat.messages.addMessage(data);
      $form.trigger('reset');
    });
  });

  var intervalID = window.setInterval(function intervalFunction() {
    $('#submit_btn').prop('disabled', false);
    chat.fetchMessages();
  }, 5000);
});
