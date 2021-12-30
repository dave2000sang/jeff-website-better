import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar'

const mainPortfolioBody = {
  margin: "auto",
  // width: "100%",
  border: "3px solid green",
  padding: "50px"
}

class HomePage extends React.Component {
  render() {
    const itemData = [
      {
        img: require('./jeff_pics/dress1compressed.jpg'),
        title: '',
      },
      {
        img: require('./jeff_pics/ss7-min.jpg'),
        title: '',
      },
      {
        img: require('./jeff_pics/ss8-min.jpg'),
        title: '',
      },
      {
        img: require('./jeff_pics/Therapy Session.jpg'),
        title: '',
      },
      {
        img: require('./jeff_pics/superflouous-min.jpg'),
        title: '',
      },
      {
        img: require('./jeff_pics/dark oak-min.jpg'),
        title: '',
      },
      {
        img: require('./jeff_pics/selfportrait.JPG'),
        title: '',
      },
      {
        img: require('./jeff_pics/streetstyle 1-min.jpg'),
        title: '',
      },
      {
        img: require('./jeff_pics/streetstyle 2-min.jpg'),
        title: '',
      },
    ];
    return (
      <div style={mainPortfolioBody}>
        <div className="carousel">
          {itemData.map((item) => (
            <div className="slide">
              <img src={item.img} className="picture"></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <div style={{display: "inline-block"}}>
          <Navbar/>
        </div>
        <div style={{display: "inline-block"}}>
          <HomePage />
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
