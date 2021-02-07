import React, { Component } from "react";

import Header from './components/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm />
      </div>
    );
  }

}

export default App;
