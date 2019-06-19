import React, { Component } from "react";
import Slider from "react-slick";
import './cor.css';
import ProductCard from '../ProductCard';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      className: "slider variable-width modify",
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{height:500}}>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div style={{ width: 350,border:'2px solid green' }}>
            <ProductCard />
          </div>
          <div style={{ width: 350 ,border:'2px solid green'}}>
            <ProductCard />
          </div>
          <div style={{ width: 350 ,border:'2px solid green'}}>
            <ProductCard />
          </div>
          <div style={{ width: 350 ,border:'2px solid green'}}>
            <ProductCard />
          </div>
        </Slider>
      </div>
    );
  }
}
