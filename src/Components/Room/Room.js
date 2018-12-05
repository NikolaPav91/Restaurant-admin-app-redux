import React from "react";

export default class Room extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.roomName}
      </button>
    )
  }
}
