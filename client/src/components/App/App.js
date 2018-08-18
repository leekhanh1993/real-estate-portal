import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import RouterUrl from '../RouterUrl/RouterUrl';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Header */}
          <Header />
          {/* Navigation */}
          <Navigation />
          {/* Content */}
          <div className="content">
            <RouterUrl/>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
