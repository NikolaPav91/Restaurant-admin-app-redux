import React from "react";
import classNames from 'classnames';

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let btnClass= classNames({
      'Menu-button': true,
      'Active-menubutton': this.props.active
    })
    return(
      <button className={btnClass} onClick={this.props.onClick}>
        <img className={this.props.imgclassname} src={this.props.imgsrc}></img>{this.props.buttontext}
      </button>
    )
  }
}
