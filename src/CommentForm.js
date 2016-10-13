import React, { Component } from 'react';
import './CommentForm.css';

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.handleTextChange = (ev) => (
      this.setState({ text: ev.target.value })
    );
    this.handleSubmit = this.handleSubmit.bind(this);
    /*
      When using ES6 class syntax, the functions used inside the render methods
      need to properly maintain the reference to the component instance, ie
      don't loose this.
      Common ways to archive that:
      1- Arrow functions
      2- Explicitly binding the function to `this` in the constructor
    */
    this.state = { text : '' }
    /*
      Component state is initialized in the constructor.
      We can add/remove/update any keys & values later down the road :-)
    */
  }

  handleSubmit(ev) {
    ev.preventDefault(); // ev is a synthetic event provided by React to minimize browser differences
    var text = this.state.text.trim();
    if (!text) {
      alert('Empty comments are just boring')
      return;
    }
    this.props.onSave(text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <form
        className="CommentForm-wrapper"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

export default CommentForm;
