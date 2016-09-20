var User = function newUser(data) {
  this.user = data;
};

var Users = function newUsers() {
  var self = this;

  self.users = [];

  self.fetchFromMessages = function selfFetchUsers(messages) {
    messages = messages.messages;

    var allUsers = _.map(messages, function (message) {
      return message.user;
    });
    self.usersArray = _.uniq(allUsers);
    self.users = [];

    _.each(self.usersArray, function (user) {
      self.users.push(new User(user));
    });
  };

  self.render = function selfRenderUsers() {
    $('.users-container').html('');

    $.each(self.users, function (_, user) {
      $('.users-container').append(Template.replaceInTemplate(userTemplate, user));
    });
  };

  var userTemplate = "<div class='list-group'><a class='list-group-item' id='user_<%user%>' data-id='<%user%>' href='#'><%user%></a></div>";
};
