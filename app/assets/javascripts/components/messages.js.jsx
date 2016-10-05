var Messages = React.createClass({
  render: function () {
    var messages = this.props.messages.map(function (message) {
      return (
        <Message key={message.id}
                 user={message.user}
                 body={message.body}
                 created_at={message.created_at}/>
      );
    });

    return (
      <div>
        { messages }
      </div>
    );
  }
});
