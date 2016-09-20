var Message = function newMessage(data) {
  this.id = data.id;
  this.user = data.user;
  this.created_at = data.created_at;
  this.body = data.body;
};

var Messages = function newMessages() {
  var self = this;

  self.messages = [];

  self.fetchMessagesFromData = function selfFetchMessagesFromData(data) {
    self.messages = [];

    $.each(data, function (_, message) {
      self.addMessage(message);
    });
  };

  self.addMessage = function selfAddMessage(message) {
    self.messages.push(new Message(message));
  };

  self.render = function selfRenderMessages() {
    $('.messages-container').html('');

    $.each(self.messages, function (_, message) {
      $('.messages-container').append(Template.replaceInTemplate(messageTemplate, message));
    });
  };

  var messageTemplate = "<div class='card' id='message_<%id%>' data-id='<%id%>'><div class='card-header bg-info'>" +
    "<strong><%user%></strong>" +
    "<small><%created_at%></small>" +
    "</div><div class='card-block'><%body%></div></div>";

};
