import React from "react";
import ContainerRender from "../ContainerRender/ContainerRender";
import style from "../CarouselComponentStyle";
const componentContainer = props => {
  return (
    <div style={{ left: props.left + "%" }} className="container">
      <div style={style.clearFix} />

      <ContainerRender element={props.element} action={props.action} />
    </div>
  );
};

export default componentContainer;
