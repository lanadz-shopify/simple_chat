var Chat = React.createClass({
  getInitialState: function () {
    return {
      messages: this.props.messages
    };
  },

  onAddItems: function (userName, msgBody) {
    $.post(
      this.props.messagesURI,
      {message: {user: userName, body: msgBody}}
    ).done(
      function messageCreate(data) {
        var messages = this.state.messages;
        messages.unshift(data);
        this.setState({messages: messages});
      }.bind(this)
    ).fail(
      function (error) {
      }
    );
  },

  renderForm: function () {
    return (
      <MessageForm callback={this.onAddItems}/>
    );
  },

  renderMessages: function () {
    return (
      <div>
        <Messages messages={this.state.messages}/>
      </div>
    )
  },

  render: function renderChat() {
    return (
      <div className="chat">
        <div className="row">
          <div className="col-xs-12">
            { this.renderForm() }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <div className="card">
              <div className="card-header bg-inverse">History</div>
              <div className="card-block messages-container">
                { this.renderMessages() }
              </div>
            </div>
          </div>

          <div className="col-xs-6">
            <div className="card">
              <div className="card-header bg-inverse">Participants</div>
              <div className="card-block users-container"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
