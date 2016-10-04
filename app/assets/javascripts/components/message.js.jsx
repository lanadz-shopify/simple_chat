var Message = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-header bg-info">
          <strong>{ this.props.user }</strong>
          <small>{ this.props.created_at }</small>
        </div>

        <div className="card-block">
          { this.props.body }
        </div>
      </div>
    );
  }
});
