import React from "react";

export default class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.productName}
      </button>
    )
  }
}
