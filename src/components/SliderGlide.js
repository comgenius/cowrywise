import React, { Component } from "react";
import Glide from "@glidejs/glide";

export default class SliderGlide extends Component {
  state = { id: null };

  componentDidMount = () => {
    // Generated random id
    this.setState(
      { id: `glide-${Math.ceil(Math.random() * 100)}` },
      this.initializeGlider
    );
  };

  initializeGlider = () => {
    this.slider = new Glide(`#${this.state.id}`, this.props.options);
    this.slider.mount();
  };

  UNSAFE_componentWillReceiveProps = newProps => {
    if (this.props.options.startAt !== newProps.options.startAt) {
      this.slider.go(`=${newProps.options.startAt}`);
    }
  };

  render = () => (
    
    // controls
    <div id={this.state.id} className="glide glide--ltr glide--slider glide--swipeable">
      {/* track  */}
      <div data-glide-el="track" className="glide__track">
        <ul className="glide__slides">
          {this.props.children.map((slide, index) => {
            return React.cloneElement(slide, {
              key: index,
              className: `${slide.props.className} your_cutom_classname`
            });
          })}
        </ul>
      </div>
      {/* bottom bullets , you can comment out this part*/}
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {this.props.children.map((slide, index) => {
          return (
            <button
              key={index}
              className="glide__bullet"
              data-glide-dir={"=" + index}
              title={index}
            />
          );
        })}
      </div>
    </div>
  );
}

SliderGlide.defaultProps = {
  options: {}
};
