import React from 'react';

const Comment = ({ text }) => {
  return (
    <article>
      {text}
    </article>
  )
}

/*
 PropTypes are used to statically check props passed to a component
 so we can detect missing or wrongly used properties.
 They throw a warning in development enviroment to notify errors
*/

Comment.propTypes = {
  text: React.PropTypes.string.isRequired,
}

const CommentList = (props) => {
  const commentList = props.comments.map((comment) => (
    <Comment key={`comment-${comment.id}`} {...comment}/>
  ));

  /*
    Passing down a spread object to a component is a
    common pattern that saves a bit of typing and ease
    adding new props to a component in the future
  */

  return (
    <div>
      { commentList.length > 0 ? commentList : 'No comments for today' }
    </div>
  )
}

CommentList.propTypes = {
  comments: React.PropTypes.array.isRequired,
};

export default CommentList;
