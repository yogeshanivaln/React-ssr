import React from "react";
import "./oldslider.css";

class MyCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: ["first", "second", "third", "fourth", "fifth"],
      activeIndex: 1,
      left: [0,0,0,0,0]
    };
    this.myRef = React.createRef();
  }
  
  prevSlide() {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + 400 // this.props.sliderWidth not working for some reason
    });

    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left:
          this.state.left -
          this.props.sliderWidth * (this.state.slider.length - 1)
      });
    }
  }
  nextSlide() {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.props.sliderWidth
    });

if (this.state.activeIndex === this.state.slider.length) {
this.setState(prev => {
    {
      ...prev,
      activeIndex: this.state.activeIndex + 1,
      prev.left[this.state.activeIndex]: 0
    }
}); 
}
    /*if (this.state.activeIndex === this.state.slider.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0
      });
    }*/
    //const node = this.myRef.current;
    /.style.left = 0;

  }
  clickIndicator(e) {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left:
        this.props.sliderWidth -
        parseInt(e.target.textContent) * this.props.sliderWidth
    });
  }
  render() {
    let style = {
      left: this.state.left,
      width: this.props.sliderWidth,
      height: this.props.sliderHeight
    };
    return (
      <div>
        <div className="slider-wrapper">
          <ul className="slider">
            {this.state.slider.map(function(item, index) {
              return (
                <li
                  style={ 
                          left: this.state.left[this.state.activeIndex-1],
                          width: this.props.sliderWidth,
                          height: this.props.sliderHeight
                        }
                  className={
                    index + 1 === this.state.activeIndex
                      ? "slider-item"
                      : "hide"
                  }
                  ref={this.myRef}
                > 
                  {item}
                </li>
              );
            }, this)}
          </ul>
        </div>
        <div className="buttons-wrapper">
          <button className="prev-button" onClick={this.prevSlide.bind(this)} />
          <button className="next-button" onClick={this.nextSlide.bind(this)} />
        </div>
        <div className="indicators-wrapper">
          <ul className="indicators">
            {this.state.slider.map(function(item, index) {
              return (
                <li
                  className={
                    index + 1 === this.state.activeIndex
                      ? "active-indicator"
                      : ""
                  }
                  onClick={this.clickIndicator.bind(this)}
                >
                  {index + 1}
                </li>
              );
            }, this)}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyCom;
