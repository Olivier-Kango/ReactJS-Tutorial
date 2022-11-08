import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state={message: 'Welcome visitor'}
  }

  olivierKango() {
    this.setState({message: 'Thank you for sucribing'})
  }

  render() {    
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
        onClick={() => this.olivierKango()}
        >
          Subscribe
        </button>
      </div>
    )
  }
}

export default Message;