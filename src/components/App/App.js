import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header/>
        {/* Navigation */}
        <Navigation/>
        {/* Content */}
        <div className="content">
          <h1>Content</h1>
        </div>
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}

export default App;
