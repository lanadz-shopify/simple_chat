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


var messageTemplate = "<div class='card' id='message_<%id%>' data-id='<%id%>'><div class='card-header bg-info'>" +
  "<strong><%user%></strong>" +
  "<small><%created_at%></small>" +
  "</div><div class='card-block'><%body%></div></div>";
