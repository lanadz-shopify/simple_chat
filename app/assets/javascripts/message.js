var Message = function newMessage(data) {
  this.id = data.id;
  this.user = data.user;
  this.created_at = data.created_at;
  this.body = data.body;
};

var Messages = function newMessages(options) {
  var self = this;
  var messagesRenderer = options.messagesRenderer;
  var usersRenderer = options.userRenderer;

  self.messages = [];

  self.users = [];
  self.usersJSON = [];

  self.addMessage = function selfAddMessage(message) {
    self.messages.push(new Message(message));
  };

  self.fetch = function selfFetch() {
    if (self.messages.length > 0) {
      var lastId = self.messages[self.messages.length - 1].id
    }

    $.ajax({
      url: '/messages.json',
      method: 'GET',
      data: {id: lastId}
    }).done(function selfSuccessfulFetch(data) {
      $.each(data, function (_, message) {
        self.addMessage(message);
      });
      self.fetchUsers();
      messagesRenderer(self.messages);
    });
  };

  self.fetchUsers = function selfFetchUsers() {
    var allUsers = _.map(self.messages, function (message) {
      return message.user;
    });
    self.users = _.uniq(allUsers);
    self.usersJSON = [];
    _.each(self.users, function (user) {
      self.usersJSON.push({user: user});
    });
    usersRenderer(self.usersJSON);
  }
};
