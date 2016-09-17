$(function () {
  var retrieveLastMessages = function (lastId) {
    $.ajax({
      url: '/messages.json',
      method: 'GET',
      data: {id: lastId}
    }).done(function (data) {
      $.each(data, function (_, message) {
        $('.messages-container').append(Template.replaceInTemplate(messageTemplate, message));
      });
    });
  };

  $('#new_message').on('submit', event, function () {
    event.preventDefault();

    var $form = $(this);
    var url = $form.attr("action");
    var data = $form.serialize();

    $.ajax({
      url: url,
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function (data) {
      $('.messages-container').append(Template.replaceInTemplate(messageTemplate, data));
    }).always(function () {
      $form.trigger('reset');
    });
  });

  var intervalID = window.setInterval(function () {
    $('#submit_btn').prop('disabled', false);
    var lastId = $('.messages-container').find('.card:last-child').data('id');
    if (lastId !== undefined) {
      retrieveLastMessages(lastId);
    } else {
      retrieveLastMessages(null);
    }
  }, 2000);
});
