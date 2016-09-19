$(function () {
  var renderMessages = function selfRenderMessages(messages) {
    $('.messages-container').html('');

    $.each(messages, function (_, message) {
      $('.messages-container').append(Template.replaceInTemplate(messageTemplate, message));
    });
  };

  var renderUsers = function selfRenderUsers(users) {
    $('.users-container').html('');

    $.each(users, function (_, user) {
      $('.users-container').append(Template.replaceInTemplate(userTemplate, user));
    });
  };

  var messages = new Messages({messagesRenderer: renderMessages, userRenderer: renderUsers});
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
  }, 5000);
});
