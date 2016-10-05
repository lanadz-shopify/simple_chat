var Chat = React.createClass({
  getInitialState: function () {
    return {
      messages: this.props.messages
    };
  },

  renderMessages: function () {
    return (
      <div>
        <Messages messages={this.props.messages}/>
      </div>
    )
  },

  render: function renderChat() {
    return (
      <div className="chat">
        <div className="row">
          <div className="col-xs-12">
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
