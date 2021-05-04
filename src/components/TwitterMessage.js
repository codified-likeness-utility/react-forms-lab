import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      charactersLeft: ''
    };
  }

  handleInput = (event) => {
    let currentCount = this.state.inputValue.length
    let maxCharacters = this.props.maxChars
    let charactersLeft = maxCharacters - currentCount
    if (currentCount <= maxCharacters) {
      this.setState({
        inputValue: event.target.value,
        charactersLeft: charactersLeft
      })
    } else {
      alert('Maximum of 280 characters. Please shorten...')
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleInput(event)} type="text" name="message" id="message" />
        <br></br>
        <label>Characters remaining: {this.state.charactersLeft}</label>
      </div>
    );
  }
}

export default TwitterMessage;
