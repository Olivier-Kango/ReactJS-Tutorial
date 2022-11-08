import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state={ name: 'Olivier' }
  }
  render() {
    return <h1>Welcome {this.state.name} and {this.props.name} a.k.a {this.props.heroName}</h1>
  }
}

export default Welcome;