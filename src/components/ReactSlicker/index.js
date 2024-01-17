import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

class ReactSlicker extends Component {
  renderSlider = () => {
    const {newReleases}=this.props 
    return (
      <Slider {...settings}>
        {newReleases.map((eachLogo) => {
          const { isbn13, image } = eachLogo;
          return (
            <Link to={`/books/${isbn13}`} className="link-text">
                <div className="slick-item" key={isbn13}>
              <img
                className="logo-image"
                src={image}
                alt="book logo"
              />
            </div>
            </Link>
          );
        })}
      </Slider>
    );
  };

  render() {
    return (
      <div className="main-container">
        <h1 className="react-slicker-head">New Releases</h1> 
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    );
  }
}

export default ReactSlicker;