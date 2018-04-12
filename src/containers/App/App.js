import React, { Component } from 'react';
import logo from '../../logo.svg';
require("dotenv").config();

class App extends Component {

  render() {

    return <div className="App">
        <header className="">
          <h1 className="">
            Welcome to unheard.of {process.env.REACT_APP_DEV_API_URL}
          </h1>
        </header>
      </div>;
  }
}

export default App;
