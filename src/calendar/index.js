import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import Iframe from "./react-iframe.min.js";

class calendar extends PureComponent {
  render() {
    return (
      <Iframe
        url="https://calendar.google.com/calendar/embed?src=daeun.park.1%40stonybrook.edu&ctz=America%2FNew_York"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
    );
  }
}
