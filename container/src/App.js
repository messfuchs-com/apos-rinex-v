import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RinexAvailability from './containers/RinexAvailability';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <RinexAvailability />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
