var Message = function (data) {
  this.id = data.id;
  this.user = data.user;
  this.created_at = data.created_at;
  this.body = data.body;
};

var Messages = function (options) {
  var self = this;
  var renderer = options.renderer;

  self.messages = [];

  self.addMessage = function (message) {
    self.messages.push(new Message(message));
  };

  self.fetch = function () {
    if (self.messages.length > 0) {
      var lastId = self.messages[self.messages.length - 1].id
    }

    $.ajax({
      url: '/messages.json',
      method: 'GET',
      data: {id: lastId}
    }).done(function (data) {
      $.each(data, function (_, message) {
        self.addMessage(message);
      });
      renderer(self.messages);
    });
  };
};
