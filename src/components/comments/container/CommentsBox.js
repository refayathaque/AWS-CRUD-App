import React, { Component } from 'react';
import 'styles/comments/styles.css';
import { connect } from 'react-redux';
import * as actions from 'actions/comments';

class CommentsBox extends Component {
  state = {
    comment: '',
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
    console.log(this.state.comment);
  };

  handleSubmit = event => {
    event.preventDefault();
    // Prevents page reload
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div className="comments-components">
        <h3>CommentsBox Component</h3>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(CommentsBox);
