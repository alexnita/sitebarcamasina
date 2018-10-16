import React, { Component } from "react";
import ButtonsRender from "./ButtonsRender/ButtonsRender";
import ComponentContainer from "./ComponentContainer/ComponentContainer";
import style from "./CarouselComponentStyle";
// import ResizeImage from "react-resize-image";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      left: 0,
      right: 0,
      imagesHolder: []
    };
  }

  classToggle = type => {
    if (type === "next") {
      if (this.state.index === this.state.imagesHolder.length - 1) {
        this.setState({
          index: 0,
          left: this.state.left + (this.state.imagesHolder.length - 1) * 100
        });
      } else {
        this.setState({
          index: this.state.index + 1,
          left: this.state.left - 100
        });
      }
    } else if (type === "prev") {
      if (this.state.index > 0) {
        this.setState({
          index: this.state.index - 1,
          left: this.state.left + 100
        });
      } else {
        this.setState({
          index: this.state.imagesHolder.length - 1,
          left: this.state.left - (this.state.imagesHolder.length - 1) * 100
        });
      }
    }
  };

  imageContainerRender = (key, id) => {
    return (
      <div
        className={style.imageContainer}
        style={{ left: id * 100 + "%" }}
        key={key}
      >
        <img
          src={`http://localhost:4000/photo/${id}`}
          onLoad={this.onImgLoad(id)}
          id={id}
          className={style.CarouselImage}
          alt=""
        />
      </div>
    );
  };

  render() {
    return (
      <div style={style.mainContainer}>
        <ComponentContainer
          left={this.state.left}
          element={this.state.imagesHolder}
          action={this.imageContainerRender}
        />
        <div
          style={[style.nextBtn, style.buttonStyle].join(" ")}
          onClick={() => this.classToggle("next")}
        >
          <i className="fa fa-angle-right fa-4x " />
        </div>
        <div
          style={[style.prevBtn, style.buttonStyle].join(" ")}
          onClick={() => this.classToggle("prev")}
        >
          <i className="fa fa-angle-left fa-4x " />
        </div>
        <ButtonsRender
          element={this.state.imagesHolder}
          action={this.renderBtnAction}
        />
      </div>
    );
  }
}

export default Carousel;
