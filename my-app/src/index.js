import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar'
import HomePage from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div id="app-wrapper">
        <Router>
            <div style={{display: "inline-block"}}>
              <Navbar/>
            </div>
            <div style={{display: "inline-block", paddingTop:"3.5rem", position:"absolute"}}>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<HomePage/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </div>
        </Router>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
