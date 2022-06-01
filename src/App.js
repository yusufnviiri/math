import React, { Component } from 'react';
import Welcome from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">

        <h1>MY CALCULATOR</h1>
        <Welcome />

      </div>
    );
  }
}

export default App;
