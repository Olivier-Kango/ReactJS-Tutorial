import './App.css';
import React from 'react';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        {/* <MyComponent /> */}
        {/* <Welcome /> */}
        <Hello />
      </div>
    );
  }
}

export default App;
