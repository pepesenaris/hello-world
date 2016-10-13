import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const mapObjectToList = (lookup) => (
  Object.keys(lookup).map(key => lookup[key])
);

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {}
    };
    this.handleCommentCreate = this.handleCommentCreate.bind(this);
  }

  handleCommentCreate(text) {
    const id = Object.keys(this.state.comments).length + 1;

    this.setState({
      comments: {
        ...this.state.comments,
        [id]: { id, text }
      }
    })
    /*
      Calling setState schedules a re-render of the component.
      React may batch multiple calls to setState and perform a single render,
      so it's not safe to assume that exist a one-to-one mapping
      between setState() and render() calls
    */
  }

  render() {
    return (
      <div>
        <CommentForm onSave={this.handleCommentCreate}/>
        <CommentList comments={mapObjectToList(this.state.comments)} />
      </div>
    )
  }
}

export default CommentsContainer;
