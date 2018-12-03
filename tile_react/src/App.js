import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Card from './components/Card';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Card></Card>
      </div>
    );
  }
}

export default App;
