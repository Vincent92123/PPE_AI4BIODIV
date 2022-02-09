import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Forum from './Forum';
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/forum' element={<Forum />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;