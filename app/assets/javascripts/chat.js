var Chat = function newChat() {
  var self = this;
  self.users = new Users();
  self.messages = new Messages();

  self.fetchMessages = function selfFetchMessages() {
    var lastId = 0;
    if (self.messages.length > 0) {
      lastId = self.messages[self.messages.length - 1].id
    }

    $.ajax({
      url: '/messages.json',
      method: 'GET',
      data: {id: lastId}
    }).done(function selfSuccessfulFetch(data) {
      self.messages.fetchMessagesFromData(data);
      self.messages.render();

      self.users.fetchFromMessages(self.messages);
      self.users.render();
    });
  };
};
