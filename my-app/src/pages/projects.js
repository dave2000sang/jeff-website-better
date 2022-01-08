import React from 'react';
import '../index.css';

class Projects extends React.Component {
  render() {
    const itemData = [
      {
        img: require('../jeff_pics/dress1compressed.jpg'),
        title: '',
      },
      {
        img: require('../jeff_pics/ss7-min.jpg'),
        title: '',
      },
      {
        img: require('../jeff_pics/ss8-min.jpg'),
        title: '',
      },
      {
        img: require('../jeff_pics/Therapy Session.jpg'),
        title: '',
      },
      {
        img: require('../jeff_pics/superflouous-min.jpg'),
        title: '',
      },
      {
        img: require('../jeff_pics/dark oak-min.jpg'),
        title: '',
      },
      {
        img: require('../jeff_pics/selfportrait.JPG'),
        title: '',
      },
      {
        img: require('../jeff_pics/streetstyle 1-min.jpg'),
        title: '',
      },
      {
        img: require('../jeff_pics/streetstyle 2-min.jpg'),
        title: '',
      },
    ];
    return (
      <div className="carousel" id="carouselWrapper">
        {itemData.map((item) => (
          <div className="slide">
            <img src={item.img} className="picture"></img>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
