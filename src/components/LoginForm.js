import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (event.target.username.value.length > 0 && event.target.password.value.length > 0) {
      this.props.handleLogin(this.state)
    }
    
  }

  handleInput = (event) => {
    this.setState({
      username: event.target.form[0].value,
      password: event.target.form[1].value
    })
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleInput(event)} value={this.state.username} id="username"  name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleInput(event)} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
