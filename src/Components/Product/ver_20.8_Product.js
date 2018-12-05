import React from "react";

export default class Product extends React.Component {
  render() {
    return (
    <div className="Product-container">
      <div className="Product-3row-separator">
      <div className="Product-name">
        {this.props.productName}
      </div>
      <div className="Product-picture">
        <img className={this.props.imgclassName} src={this.props.productImg}></img>
      </div>
      <div className="Product-description">
        {this.props.productDescription}
      </div>
    </div>
      <div className="Product-price">
        {this.props.productPrice}
      </div>
      <div className="Edit-remove-container">
        <button onClick={this.props.onEditClick}> edit </button>
        <button onClick= {this.props.onDeleteClick}> delete </button>
      </div>
    </div>
  )
  }
}
