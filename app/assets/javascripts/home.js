var Template = {
  replaceInTemplate: function (template, dataJSON) {
    var re = /<%([^%>]+)?%>/g;
    var match = template.match(re);

    $.each(match, function (_, placeholder) {
      template = template.replace(placeholder, dataJSON[placeholder.slice(2, -2)]);
    });

    return template;
  }

};

var messageTemplate = "<div class='card'><div class='card-header bg-info' id='message_<%id%>'>" +
  "<strong><%user%></strong>" +
  "<small><%created_at%></small>" +
  "</div><div class='card-block'><%body%></div></div>";

$(function() {
  var retrieveLastMessages = function() {
    $.ajax({
      url: '/messages.json',
      method: 'GET'
    }).done(function (data) {
      console.log(data);
      $('.messages-container').html('');
      $.each(data, function (_, message) {
        $('.messages-container').append(Template.replaceInTemplate(messageTemplate, message));
      });
    });
  };

  $('#new_message').on('submit', event, function() {
    event.preventDefault();

    var $form = $(this);
    var url = $form.attr("action");
    var data = $form.serialize();

    $.ajax({
      url: url,
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function(data) {
      $('.messages-container').append(Template.replaceInTemplate(messageTemplate, data));
    }).always(function() {
      $form.trigger('reset');
    });
  });

  var intervalID = window.setInterval(function() {
    $('#submit_btn').prop('disabled', false);
    retrieveLastMessages();
  }, 2000);
});
