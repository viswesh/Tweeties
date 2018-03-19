import React, { Component } from 'react';
import './App.css';
import TweetList from './components/TweetList';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <TweetList/>
      </div>
    );
  }
}

export default App;